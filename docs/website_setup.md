[Back to Main Documentation](README.md)

# Docusaurus Website Setup Guide

## Overview
This guide documents the process for setting up a professional documentation website using Docusaurus for the Vecmocon ERP implementation documentation.

## Prerequisites
- Node.js 16.14 or later
- pnpm package manager
- Git (for version control)

## Step-by-Step Setup Process

### 1. Initialize Docusaurus Project
```bash
# Navigate to parent directory (outside docs folder)
cd /ERP\ Documents/

# Create Docusaurus website
npx create-docusaurus@latest vecmocon-erp-website classic

# Navigate to the created directory
cd vecmocon-erp-website
```

### 2. Copy Documentation Files
```bash
# Copy existing docs folder to Docusaurus
cp -r ../ERP\ Documents_Nangia/docs ./docs
```

### 3. Install Dependencies
```bash
# Install all required packages
pnpm install
```

### 4. Configure Docusaurus
Update `docusaurus.config.js` with the following key configurations:

#### Basic Site Configuration
```javascript
const config = {
  title: 'Vecmocon ERP Implementation',
  tagline: 'Complete ERPNext Implementation Guide for EV Parts Manufacturing',
  url: 'https://vecmocon-erp-docs.netlify.app', // Update with your deployment URL
  baseUrl: '/',

  // ... other config

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-org/vecmocon-erp-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-org/vecmocon-erp-docs/edit/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};
```

#### Navigation Configuration
```javascript
themeConfig: {
  navbar: {
    title: 'Vecmocon ERP',
    logo: {
      alt: 'Vecmocon Technologies Logo',
      src: 'img/logo.png', // Add company logo to static/img/
    },
    items: [
      {
        type: 'doc',
        docId: 'README',
        position: 'left',
        label: 'Documentation',
      },
      {
        href: 'https://github.com/your-org/vecmocon-erp-docs',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Documentation',
        items: [
          { label: 'Overview', to: '/docs/README' },
          { label: 'Process Summary', to: '/docs/process_summary' },
          { label: 'Implementation Plan', to: '/docs/implementation_plan' },
        ],
      },
      {
        title: 'Departments',
        items: [
          { label: 'Sales', to: '/docs/sales_mappings/README' },
          { label: 'Finance', to: '/docs/finance_mappings/README' },
          { label: 'Production', to: '/docs/production_mappings/README' },
        ],
      },
      {
        title: 'More',
        items: [
          { label: 'GitHub', href: 'https://github.com/your-org/vecmocon-erp-docs' },
          { label: 'Issues', href: 'https://github.com/your-org/vecmocon-erp-docs/issues' },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Vecmocon Technologies. Built with Docusaurus.`,
  },
}
```

### 5. Configure Sidebar Navigation
Update `sidebars.js` to organize the documentation:

```javascript
module.exports = {
  docs: [
    'README',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'process_summary',
        'erp_scope_of_work',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'gap_analysis',
        'customizations',
        'implementation_plan',
        'recommendations',
      ],
    },
    {
      type: 'category',
      label: 'Department Mappings',
      items: [
        'sales_mappings/README',
        'inventory_mappings/README',
        'production_mappings/README',
        'quality_mappings/README',
        'logistics_mappings/README',
        'finance_mappings/README',
        'sourcing_mappings/README',
        'rnd_mappings/README',
        'hr_mappings/README',
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: [
        'erpnext_mapping',
        'concrete_plan',
        'dry_run_scenario',
        'thorough_process',
      ],
    },
  ],
};
```

### 6. Customize Styling
Update `src/css/custom.css` for Vecmocon branding:

```css
/* Custom styles for Vecmocon ERP documentation */
:root {
  --ifm-color-primary: #007acc; /* Vecmocon brand color */
  --ifm-color-primary-dark: #005999;
  --ifm-color-primary-darker: #004d80;
  --ifm-color-primary-darkest: #003d66;
  --ifm-color-primary-light: #338fcc;
  --ifm-color-primary-lighter: #4d9fdd;
  --ifm-color-primary-lightest: #80c4ee;
}

/* Additional custom styles */
.hero__title {
  color: var(--ifm-color-primary);
}

.button--primary {
  background-color: var(--ifm-color-primary);
  border-color: var(--ifm-color-primary);
}

.button--primary:hover {
  background-color: var(--ifm-color-primary-dark);
  border-color: var(--ifm-color-primary-dark);
}
```

### 7. Add Static Assets
```bash
# Create static directories
mkdir -p static/img

# Add company logo and other assets
# Copy logo.png to static/img/
# Add any other static assets needed
```

### 8. Development and Testing
```bash
# Start development server
pnpm start

# Build for production
pnpm build

# Test production build locally
pnpm serve
```

### 9. Deployment Options

#### Option A: GitHub Pages (Free & Integrated)
```bash
# 1. Install gh-pages package
npm install --save-dev gh-pages

# 2. Update docusaurus.config.ts
# Add to config:
organizationName: 'atulgen',
projectName: 'vecmocon-docs',
deploymentBranch: 'gh-pages',

# 3. Update package.json scripts
"scripts": {
  "deploy": "docusaurus deploy"
}

# 4. Deploy to GitHub Pages
npm run deploy
```

**Result:** Website available at `https://atulgen.github.io/vecmocon-docs/`

#### Option B: Netlify (Recommended - Fast & Professional)
1. **Connect Repository:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import from Git"
   - Select `atulgen/vecmocon-docs` repository

2. **Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - **Node version:** 18.x

3. **Environment Variables** (if needed):
   - Add any required environment variables

4. **Deploy:**
   - Click "Deploy site"
   - Website gets custom domain or `*.netlify.app` URL

#### Option C: Vercel (Fast & Modern)
1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import `atulgen/vecmocon-docs`

2. **Configure Project:**
   - **Framework:** Docusaurus
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

3. **Deploy:**
   - Click "Deploy"
   - Get instant preview and production URL

#### Option D: Manual Static Hosting
```bash
# 1. Build the site
npm run build

# 2. The build/ folder contains static files ready for deployment

# 3. Upload build/ folder to any static hosting:
# - AWS S3 + CloudFront
# - Google Cloud Storage
# - Azure Static Web Apps
# - DigitalOcean Spaces
# - Any web server
```

### 10. Recommended Deployment: Netlify

**Why Netlify?**
- ✅ **Free tier** with custom domains
- ✅ **Automatic HTTPS** certificates
- ✅ **Instant deployments** on git push
- ✅ **Form handling** (if needed)
- ✅ **CDN** for global performance
- ✅ **Preview deployments** for PRs

**Setup Steps:**
1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on every push

**Expected Result:** Professional website at `https://vecmocon-erp-docs.netlify.app/`

### 11. Build Commands Reference

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start

# Build for production
npm run build

# Test production build locally
npm run serve

# Deploy to GitHub Pages
npm run deploy
```

### 12. Custom Domain Setup

**For any hosting provider:**
1. Purchase domain (e.g., vecmocon-docs.com)
2. Configure DNS settings to point to hosting provider
3. Enable HTTPS (usually automatic)
4. Set up custom domain in hosting dashboard

**Recommended Domain:** `docs.vecmocon.com` or `erp.vecmocon.com`

## Features Included
- ✅ **Search functionality** across all documentation
- ✅ **Responsive design** for mobile/tablet access
- ✅ **Version control** integration with GitHub
- ✅ **Customizable theme** with Vecmocon branding
- ✅ **Multi-level navigation** with sidebar
- ✅ **SEO optimization** for better discoverability
- ✅ **Fast loading** with static site generation

## Maintenance
- Update documentation in Markdown files
- Commit and push changes to trigger automatic deployment
- Use GitHub issues for feedback and improvement requests

## Estimated Timeline
- **Setup**: 2-3 hours
- **Configuration**: 1-2 hours
- **Customization**: 1-2 hours
- **Testing & Deployment**: 1 hour

## Support
For Docusaurus documentation, refer to: https://docusaurus.io/docs
