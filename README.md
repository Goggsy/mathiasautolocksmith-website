# Mathias Auto Locksmith — Static Site

**Stack:** GitHub Pages (hosting) · Cloudflare (DNS + CDN + SSL) · Basin (form submissions)

---

## ✅ ASSETS STATUS

All assets are committed to the repository. No Squarespace CDN dependencies remain. The site is fully self-contained.

| Asset | Download from Squarespace | Save as |
|---|---|---|
| Logo | Squarespace site files | `assets/logo.png` |
| Gareth's photo | Squarespace site files | `assets/gareth.jpg` |
| Service area map | Squarespace site files | `assets/map.png` |
| Lost keys image | Squarespace site files | `assets/img-lost-keys.jpg` |
| Lock out image | Squarespace site files | `assets/img-lockout.jpg` |
| Key reprogramming image | Squarespace site files | `assets/img-reprogramming.jpg` |
| Broken key image | Squarespace site files | `assets/img-broken-key.jpg` |
| Hero video | Gareth to provide | `assets/hero-video.mp4` |
| Hero poster (fallback still) | Screenshot from video | `assets/hero-poster.jpg` |
| OG image (social sharing) | Export from Squarespace | `assets/og-image.jpg` |
| Favicon | Download from Squarespace | `assets/favicon.ico` |

Once assets are in place, update the `src` attributes in each HTML file from the Squarespace CDN URLs to the local paths (e.g. `assets/gareth.jpg`).

---

## Setup: GitHub Pages

1. Create a new GitHub repository named `mathiasautolocksmith` (or any name — doesn't matter with a custom domain)
2. Push all files in this folder to the `main` branch
3. Go to the repo → **Settings → Pages**
4. Under **Source**, select `main` branch, root `/`
5. Under **Custom domain**, enter `mathiasautolocksmith.co.uk`
6. Tick **Enforce HTTPS** (becomes available once DNS is configured)

---

## Setup: Cloudflare DNS

1. Add the domain `mathiasautolocksmith.co.uk` to Cloudflare (free plan is fine)
2. In Cloudflare DNS, add the following records:

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | Proxied (orange cloud) |
| A | `@` | `185.199.109.153` | Proxied |
| A | `@` | `185.199.110.153` | Proxied |
| A | `@` | `185.199.111.153` | Proxied |
| CNAME | `www` | `mathiasautolocksmith.co.uk` | Proxied |

3. Transfer the nameservers at the domain registrar to Cloudflare's nameservers (Cloudflare will show you what they are)
4. SSL/TLS: Set to **Full (strict)** in Cloudflare → SSL/TLS settings

---

## Setup: Basin (Contact Form)

1. Go to [https://usebasin.com](https://usebasin.com) and create a free account (Gareth should own this)
2. Click **Create a Form**
3. Copy the form endpoint — it looks like: `https://usebasin.com/f/abc12345`
4. In `contact.html`, find this line and replace `YOUR_BASIN_FORM_ID` with the actual ID:
   ```html
   <form action="https://usebasin.com/f/YOUR_BASIN_FORM_ID" method="POST">
   ```
5. In Basin settings, configure:
   - **Email notifications**: send to `mathiasautolocksmith@gmail.com`
   - **Redirect URL**: `https://mathiasautolocksmith.co.uk/contact.html?sent=1`
   - **Spam filter**: enable (free)

**Free tier:** 100 submissions/month. More than sufficient for this business at current volume.

---

## File Structure

```
/
├── index.html              Homepage
├── services.html           Services page
├── about.html              About page
├── contact.html            Contact page (Basin form)
├── privacy-policy.html     Privacy Policy (UK GDPR)
├── cookies-policy.html     Cookies Policy
├── terms-and-conditions.html  Terms & Conditions
├── CNAME                   GitHub Pages custom domain
├── css/
│   └── style.css           All styles
├── js/
│   └── main.js             Nav, FAQ accordion, form success
└── assets/
    └── (see asset list above)
```

---

## SEO Notes

- All pages have `<title>`, `<meta name="description">`, `<link rel="canonical">`, and Open Graph tags
- `index.html` includes LocalBusiness JSON-LD schema
- Once the domain is live on this stack, resubmit the sitemap in Google Search Console
- GSC: add `mathiasautolocksmith.co.uk` as a new property and verify via HTML file or DNS TXT record

---

## Post-launch Checklist

- [ ] All Squarespace assets downloaded and committed to `/assets/`
- [ ] `src` attributes updated from CDN URLs to local paths
- [ ] Basin form ID replaced in `contact.html`
- [ ] Basin email notifications pointing to Gareth's Gmail
- [ ] GitHub Pages custom domain set and HTTPS enforced
- [ ] Cloudflare DNS records in place, nameservers transferred
- [ ] Squarespace subscription cancelled only after the above are confirmed
- [ ] Google Search Console updated with new domain property
- [ ] Google Business Profile URL updated to new site
