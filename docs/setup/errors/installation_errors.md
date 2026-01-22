# ERPNext Installation Errors Log

This document tracks all errors encountered during ERPNext v15 installation and setup process.

## Error Log Template

### Error [Number]: [Brief Description]
**Date:** YYYY-MM-DD HH:MM
**Step:** [Installation step where error occurred]
**Command:** [Command that caused the error]
**Error Message:**
```
[Paste full error message here]
```

**Solution Applied:**
[Describe what was done to resolve the error]

**Status:** ✅ Resolved / ❌ Unresolved / ⏳ Pending

---

## Installation Errors

### Error 1: UV Path Handling Issue (Spaces in Directory Name)
**Date:** 2026-01-22 17:30
**Step:** Initializing Frappe Bench (Frappe Installation)
**Command:** `bench init erp-bench --frappe-branch version-15`
**Error Message:**
```
error: No virtual environment or system Python installation found for path `/home/atuld/Desktop/GennextIT/ERP`; run `uv venv` to create an environment
Error occured during app install: uv pip install --quiet --upgrade -e /home/atuld/Desktop/GennextIT/ERP Documents/ERP Documents_Nangia/erp-bench/apps/frappe  --python /home/atuld/Desktop/GennextIT/ERP Documents/ERP Documents_Nangia/erp-bench/env/bin/python
```

**Root Cause:**
The directory path contains spaces ("ERP Documents"), and uv (Python package installer) is not properly handling the quoted path. It's truncating the path at the first space, interpreting `/home/atuld/Desktop/GennextIT/ERP` instead of the full path.

**Solution Applied:**
1. **Option 1 (Recommended):** Move to a directory without spaces in the path
   ```bash
   # Create new directory without spaces
   mkdir ~/erpnext-setup
   cd ~/erpnext-setup

   # Re-run bench init
   bench init erp-bench --frappe-branch version-15
   ```

2. **Option 2:** Use double quotes and escape properly (may not work with uv)
   ```bash
   # Try with proper escaping (unlikely to work)
   bench init "erp-bench" --frappe-branch version-15
   ```

3. **Option 3:** Use relative paths
   ```bash
   # From a directory without spaces, use full path
   bench init /full/path/to/erp-bench --frappe-branch version-15
   ```

**Status:** ❌ Unresolved - Requires directory relocation

**Note:** This issue is now documented in the main installation guide under "Important Prerequisites" to prevent future occurrences.

### Error 2: Python 3.14 Compatibility Issue (ast.Str AttributeError)
**Date:** 2026-01-22 17:35
**Step:** Installing Frappe (Python package installation)
**Command:** `bench init erp-bench --frappe-branch version-15`
**Error Message:**
```
× Failed to build `pypika==0.48.9`
├─▶ The build backend returned an error
╰─▶ Call to `setuptools.build_meta:__legacy__.build_wheel` failed (exit status: 1)

      [stderr]
      Traceback (most recent call last):
        File "<string>", line 14, in <module>
        requires = get_requires_for_build({})
        File "/home/atuld/.cache/uv/builds-v0/.tmpwp8vd2/lib64/python3.14/site-packages/setuptools/build_meta.py", line 333, in get_requires_for_build_wheel
          return self._get_build_requires(config_settings, requirements=[])
                 ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        File "/home/atuld/.cache/uv/builds-v0/.tmpwp8vd2/lib64/python3.14/site-packages/setuptools/build_meta.py", line 301, in _get_build_requires
          self.run_setup()
          ~~~~~~~~~~~~~~^^
        File "/home/atuld/.cache/uv/builds-v0/.tmpwp8vd2/lib64/python3.14/site-packages/setuptools/build_meta.py", line 518, in run_setup
          super().run_setup(setup_script=setup_script)
          ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
        File "/home/atuld/.cache/uv/builds-v0/.tmpwp8vd2/lib64/python3.14/site-packages/setuptools/build_meta.py", line 317, in run_setup
          exec(code, locals())
          ~~~~^^^^^^^^^^^^^^^^
        File "<string>", line 38, in <module>
        File "<string>", line 20, in version
      AttributeError: module 'ast' has no attribute 'Str'

      hint: This usually indicates a problem with the package or the build environment.
  help: `pypika` (v0.48.9) was included because `frappe` (v15.97.0) depends on `pypika==0.48.9`
```

**Root Cause:**
Python 3.14 removed the `ast.Str` attribute which was deprecated. The `pypika==0.48.9` package used by Frappe v15 is incompatible with Python 3.14. ERPNext v15 requires Python 3.10-3.13.

**Solution Applied:**
1. **Check Python version:**
   ```bash
   python3 --version
   # Should show 3.10.x - 3.13.x, not 3.14.x
   ```

2. **Option 1: Install compatible Python version (Recommended)**
   ```bash
   # On Fedora, install Python 3.11
   sudo dnf install python3.11 python3.11-devel python3.11-pip -y

   # Set Python 3.11 as default for this session
   alias python3=/usr/bin/python3.11
   alias pip3=/usr/bin/pip3.11

   # Or permanently set it
   sudo alternatives --set python3 /usr/bin/python3.11
   ```

3. **Option 2: Use pyenv to manage Python versions**
   ```bash
   # Install pyenv
   curl https://pyenv.run | bash

   # Install Python 3.11
   pyenv install 3.11.8
   pyenv global 3.11.8

   # Restart shell
   exec $SHELL
   ```

4. **Option 3: Use Docker (Alternative approach)**
   ```bash
   # Use official ERPNext Docker image
   docker run -d -p 8000:8000 frappe/erpnext:version-15
   ```

**Status:** ❌ Unresolved - Requires Python version downgrade

**Prevention:** Update installation guide to specify supported Python versions.

---

## Common Error Patterns

### Database Connection Issues
**Symptoms:**
- MariaDB connection refused
- Authentication failures
- Permission denied

**Common Causes:**
- MariaDB not running
- Wrong credentials
- Firewall blocking connections

**Solutions:**
- Check MariaDB status: `sudo systemctl status mariadb`
- Start MariaDB: `sudo systemctl start mariadb`
- Verify credentials in site config

### Python/Node.js Version Conflicts
**Symptoms:**
- Import errors
- Module not found
- Compilation failures

**Common Causes:**
- Wrong Python version (need 3.10.12+)
- Node.js version mismatch (need 18.x+)
- Virtual environment issues

**Solutions:**
- Check versions: `python3 --version && node --version`
- Use correct virtual environment
- Clear pip cache: `pip cache purge`

### Permission Issues
**Symptoms:**
- Access denied
- Cannot write to directory
- File ownership problems

**Common Causes:**
- Running commands as wrong user
- Directory permissions
- SELinux/AppArmor restrictions

**Solutions:**
- Use `sudo` for system operations
- Change ownership: `sudo chown -R $USER:$USER directory`
- Check SELinux status: `sestatus`

### Network/Download Issues
**Symptoms:**
- Connection timeout
- Certificate verification failed
- Git clone failures

**Common Causes:**
- Firewall blocking
- Proxy configuration
- DNS resolution issues

**Solutions:**
- Configure proxy if needed
- Use different DNS servers
- Check internet connectivity

### India Compliance Installation Issues
**Symptoms:**
- App installation fails
- Version compatibility errors
- GST API connection issues

**Common Causes:**
- Wrong India Compliance version
- Missing dependencies
- API credentials not configured

**Solutions:**
- Use compatible version: `india_compliance v15.7.0+` for ERPNext v15
- Install dependencies first
- Configure GST settings after installation

---

## Error Resolution Checklist

- [ ] Verify system requirements (RAM, CPU, Disk)
- [ ] Check all dependencies installed
- [ ] Confirm versions match requirements
- [ ] Test database connectivity
- [ ] Verify file permissions
- [ ] Check network connectivity
- [ ] Review error logs thoroughly
- [ ] Search Frappe forum for similar issues
- [ ] Check GitHub issues in relevant repositories

## Useful Commands for Debugging

```bash
# Check system resources
free -h && df -h

# Check service status
sudo systemctl status mariadb redis

# Check Python environment
which python3 && python3 --version
pip list | grep frappe

# Check Node.js environment
which node && node --version && npm --version

# Check bench status
bench --version && bench doctor

# Check site status
bench --site [site-name] doctor

# View logs
tail -f logs/bench.log
tail -f sites/[site-name]/logs/web.log
```

## Contact Support

If errors persist:
1. **Frappe Forum:** https://discuss.frappe.io/
2. **ERPNext GitHub Issues:** https://github.com/frappe/erpnext/issues
3. **India Compliance Issues:** https://github.com/resilient-tech/india-compliance/issues
4. **Local Community:** Check for ERPNext user groups in your region

---

*Last Updated: 2026-01-22*
*Maintained by: Vecmocon ERP Implementation Team*
