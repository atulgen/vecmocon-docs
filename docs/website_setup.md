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
cd /home/atuld/Desktop/GennextIT/ERP\ Documents/

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

#### Option A: Netlify (Recommended for quick setup)
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `build`
5. Deploy

#### Option B: GitHub Pages
```bash
# Install gh-pages package
pnpm add --save-dev gh-pages

# Update package.json scripts
"scripts": {
  "deploy": "docusaurus deploy"
}

# Update docusaurus.config.js
organizationName: 'your-github-username',
projectName: 'vecmocon-erp-docs',

# Deploy
pnpm deploy
```

#### Option C: Manual Static Hosting
- Build the site: `pnpm build`
- Upload the `build/` folder to any static hosting service (AWS S3, Vercel, etc.)

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
