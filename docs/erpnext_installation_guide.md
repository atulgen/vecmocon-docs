# ERPNext v15 Local Installation Guide

## Overview
This guide provides complete installation instructions for ERPNext v15 on Ubuntu and Fedora Linux systems. Based on Vecmocon's requirements, this includes India Compliance for GST compliance.

## Prerequisites

### System Requirements
- **OS**: Ubuntu 22.04/24.04 or Fedora 37+
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk**: 20GB free space
- **CPU**: 2 cores minimum

### Required Software Versions
- **Python**: 3.10.12 - 3.13.x (❌ NOT 3.14.x - incompatible)
- **Node.js**: 18.x+
- **MariaDB**: 10.6+
- **Redis**: Latest
- **Git**: Latest

## Ubuntu Installation (Recommended)

### ⚠️ Important Prerequisites
**Directory Path Requirement:** ERPNext installation **MUST NOT** be in a directory path containing spaces. This causes issues with uv (Python package installer).

❌ **Wrong:** `/home/user/ERP Documents/project/` or `C:\Program Files\ERPNext\`

✅ **Correct:** `/home/user/erpnext-project/` or `/opt/erpnext/`

### Step 1: System Update
```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Dependencies
```bash
# Install Python, pip, and development tools
sudo apt install python3-dev python3-pip python3-venv software-properties-common -y

# Install MariaDB
sudo apt install mariadb-server mariadb-client -y

# Install Redis
sudo apt install redis-server -y

# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git and other tools
sudo apt install git curl wget -y

# Install wkhtmltopdf for PDF generation
sudo apt install wkhtmltopdf -y
```

### Step 3: Configure MariaDB
```bash
# Start and enable MariaDB
sudo systemctl start mariadb
sudo systemctl enable mariadb

# Secure MariaDB installation
sudo mysql_secure_installation

# Create ERPNext database user
sudo mysql -u root -p
```

Execute these SQL commands in MariaDB:
```sql
CREATE USER 'frappe'@'localhost' IDENTIFIED BY 'your_password_here';
GRANT ALL PRIVILEGES ON *.* TO 'frappe'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
```

### Step 4: Install Frappe Bench
```bash
# Install frappe-bench globally
sudo -H pip3 install frappe-bench



bench --version
```

### Step 5: Initialize Frappe Bench
```bash
# Create frappe-bench directory
bench init frappe-bench --frappe-branch version-15

# Change to bench directory
cd frappe-bench
```

### Step 6: Create ERPNext Site
```bash
# Create new site
bench new-site vecmocon.localhost \
  --db-name vecmocon_erp \
  --admin-password admin123 \
  --mariadb-root-password your_db_password

# Install ERPNext v15
bench --site vecmocon.localhost install-app erpnext --version version-15
```

### Step 7: Install India Compliance
```bash
# Get India Compliance app
bench get-app india_compliance https://github.com/resilient-tech/india-compliance.git

# Install on site
bench --site vecmocon.localhost install-app india_compliance
```

### Step 8: Start Development Server
```bash
# Start bench (development mode)
bench start

# Access at: http://localhost:8000
# Username: Administrator
# Password: admin123
```

## Fedora Installation

### Step 1: System Update
```bash
sudo dnf update -y
```

### Step 2: Install Dependencies
```bash
# Install Python and development tools
sudo dnf install python3-devel python3-pip -y

# Install MariaDB
sudo dnf install mariadb-server mariadb -y

# Install Redis
sudo dnf install redis -y

# Install Node.js 18.x
sudo dnf install nodejs npm -y

# Install Git and other tools
sudo dnf install git curl wget -y

# Install wkhtmltopdf
sudo dnf install wkhtmltopdf -y
```

### Step 3: Configure MariaDB (Same as Ubuntu)
Follow Ubuntu Step 3 for MariaDB configuration.

### Step 4-8: Follow Ubuntu Steps
The bench installation process is identical on Fedora after dependencies are installed.

## Production Setup (Optional)

### For Ubuntu:
```bash
# Setup production
bench setup production [your-user]

# Setup nginx
sudo bench setup nginx

# Setup supervisor
bench setup supervisor

# Enable services
sudo systemctl enable nginx
sudo systemctl enable supervisor
```

## Post-Installation Configuration

### 1. Access ERPNext
- URL: `http://localhost:8000` (dev) or your domain (production)
- Username: `Administrator`
- Password: Your admin password

### 2. Company Setup
1. Go to **Company** > **New Company**
2. Enter: Vecmocon Technologies
3. Configure GST details

### 3. India Compliance Setup
1. Go to **India Compliance** > **Settings**
2. Configure GST credentials
3. Set up company GST details

### 4. Basic Modules Setup
- **Chart of Accounts**: Set up for India
- **Tax Templates**: Configure GST rates
- **Item Groups**: Create EV component categories
- **Customer Groups**: OEMs, Distributors, etc.

## Troubleshooting

### Common Issues

**MariaDB Connection Error:**
```bash
# Check MariaDB status
sudo systemctl status mariadb

# Restart if needed
sudo systemctl restart mariadb
```

**Permission Errors:**
```bash
# Fix permissions
sudo chown -R $USER:$USER frappe-bench
```

**Node.js Version Issues:**
```bash
# Check version
node --version
npm --version

# Should be 18.x and 9.x+
```

**Bench Not Found:**
```bash
# Add to PATH
export PATH=$PATH:~/.local/bin
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
```

## Apps Compatibility Matrix

| App | ERPNext v15 | ERPNext v16 | Status |
|-----|-------------|-------------|---------|
| ERPNext Core | ✅ v15.x | ✅ v16.x | Stable |
| India Compliance | ✅ v15.7.0+ | ✅ v16.x | Stable |
| Frappe Framework | ✅ v15.x | ✅ v16.x | Required |

## Next Steps
1. Complete company setup
2. Import master data (customers, items, suppliers)
3. Configure workflows and approvals
4. Set up user roles and permissions
5. Test core processes (Sales Order → Delivery → Invoice)

## Support Resources
- [ERPNext Documentation](https://docs.erpnext.com/)
- [India Compliance Docs](https://docs.indiacompliance.app/)
- [Frappe Forum](https://discuss.frappe.io/)

---
*Installation Guide for Vecmocon ERPNext Implementation*
