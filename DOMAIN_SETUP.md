# Custom Domain Setup Guide

## Overview
Your portfolio will be deployed to GitHub Pages at your custom domain: **piyushsinghbhati.com**

## What We've Done
✅ Created `public/CNAME` file with your domain  
✅ Updated GitHub Actions workflow to handle custom domain  
✅ Updated `package.json` with custom domain URL  

## What You Need to Do

### Step 1: Configure Your Domain Registrar's DNS

You need to point your domain to GitHub Pages. Choose ONE of these options:

#### Option A: Using Apex Domain (Recommended)
If you want `piyushsinghbhati.com` to work (without `www`):

**Add these A records** to your DNS provider:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Settings location varies by provider:**
- GoDaddy: Manage DNS → A Records
- Namecheap: Advanced DNS → A Records
- Google Domains: DNS → Custom records
- Cloudflare: DNS → A records

#### Option B: Using www Subdomain
If you want `www.piyushsinghbhati.com`:

**Add a CNAME record:**
- Name/Host: `www`
- Value: `yourusername.github.io`
- TTL: 3600 (or default)

#### Option C: Both (Recommended)
Set up both apex and www to work:

**A records (for apex domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME record (for www):**
- Name: `www`
- Value: `yourusername.github.io`

### Step 2: Verify DNS Propagation

After adding DNS records, wait 10-48 hours for propagation (usually 24 hours).

**Check propagation:**
```bash
# macOS/Linux
dig piyushsinghbhati.com

# Or use any online tool:
# - https://mxtoolbox.com/dnslookup.aspx
# - https://www.whatsmydns.net/
```

### Step 3: Enable HTTPS on GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Custom domain", enter: `piyushsinghbhati.com`
4. Click "Save"
5. **Check "Enforce HTTPS"** (wait a few minutes for certificate)

GitHub will automatically create:
- SSL/TLS certificate from Let's Encrypt
- Automatic HTTPS redirects

### Step 4: First Deployment

Push your code to trigger the workflow:

```bash
git add .
git commit -m "feat: configure custom domain piyushsinghbhati.com"
git push origin main
```

The GitHub Actions workflow will:
1. Build your project
2. Run tests and linting
3. Deploy to GitHub Pages
4. Create the gh-pages branch (if not exists)
5. Automatically use the CNAME configuration

### Step 5: Verify Your Site

After deployment (5-10 minutes):

1. Visit `http://piyushsinghbhati.com` (should redirect to HTTPS)
2. Check that your portfolio loads correctly
3. Test responsive design on mobile
4. Verify all links work

**Troubleshooting:**
- If page shows 404: DNS may not have propagated yet, wait longer
- If certificate error: HTTPS enforcement may not be ready, try again in 5 minutes
- If wrong site shows: Verify CNAME file is in `public/` directory

## DNS Records Summary

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | yourusername.github.io | 3600 |
| TXT | @ | (optional verification) | 3600 |

## GitHub Pages Settings to Configure

1. **Repository Settings**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

2. **Custom Domain**
   - Custom domain: `piyushsinghbhati.com`
   - ✅ Enforce HTTPS

3. **Branch Protection (Optional)**
   - Settings → Branches
   - Branch protection rules → main
   - Require status checks to pass

## Automatic SSL Certificate

GitHub Pages provides free SSL/TLS certificates:
- Issued by Let's Encrypt
- Auto-renewed before expiration
- HTTP requests auto-redirect to HTTPS
- No action needed from you

## Troubleshooting Common Issues

### Domain shows 404
**Cause**: DNS propagation delay  
**Solution**: Wait 24-48 hours and try again

### Shows different site
**Cause**: DNS points to wrong server  
**Solution**: Verify A records match GitHub's IPs exactly

### HTTPS shows warning
**Cause**: Certificate still issuing  
**Solution**: Wait 5-10 minutes after enabling HTTPS

### Page looks broken (CSS/JS not loading)
**Cause**: Incorrect base path in vite config  
**Solution**: Ensure vite.config.ts doesn't have custom base path set

### Domain works but shows GitHub 404
**Cause**: CNAME file not in public directory or not deployed  
**Solution**: 
```bash
# Verify CNAME in public/
ls -la public/CNAME

# Push changes
git add public/CNAME
git commit -m "Add CNAME file"
git push origin main
```

## Domain Registration Tips

**Recommended registrars:**
- Namecheap - Good pricing, excellent DNS management
- Google Domains - Simple, integrates with Google services
- Cloudflare - Free DNS, excellent performance
- GoDaddy - Popular, wide feature set

**Cost**: Typically $8-12/year for `.com` domain

## After Deployment

1. **Test all functionality**
   - Navigation works
   - Projects load correctly
   - Contact form (if any) functions
   - Mobile responsive

2. **Monitor analytics** (optional)
   - Add Google Analytics to track visitors
   - Add email capture for networking

3. **Keep updated**
   - Monitor dependency updates
   - Keep Node.js current
   - Review security advisories

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- Contact your domain registrar's support

---

**Your domain will be accessible at:** `https://piyushsinghbhati.com` 🚀

DNS propagation may take up to 48 hours. Once propagated, your portfolio will be live!
