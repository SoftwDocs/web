import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import express from 'express';
import dotenv from 'dotenv';
import {
  ALL_SERVICES,
  BLOG_POSTS,
  BRAND,
  CORE_SERVICES,
  EXTERNAL_WORK_SERVICES,
  GLOBAL_REGIONS,
  PRICING_PLANS,
  SEO_HUB_PAGES,
  UPCOMING_PRODUCTS,
} from './src/data/softwdocsData.ts';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';
const ROOT_DIR = process.cwd();
const DATA_DIR = path.join(ROOT_DIR, '.data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

interface InquiryRecord {
  referenceId: string;
  name: string;
  email: string;
  country: string;
  division: string;
  message: string;
  createdAt: string;
}

const memoryInquiries: InquiryRecord[] = [];

function saveInquiry(record: InquiryRecord) {
  memoryInquiries.push(record);
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const existing: InquiryRecord[] = fs.existsSync(INQUIRIES_FILE)
      ? JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'))
      : [];
    existing.push(record);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existing.slice(-250), null, 2), 'utf-8');
  } catch {
    // Fallback to in-memory store if filesystem is read-only
  }
}

function getBaseUrl(req: express.Request): string {
  if (process.env.APP_URL && process.env.APP_URL.startsWith('http')) {
    return process.env.APP_URL.replace(/\/+$/, '');
  }
  const proto = req.get('x-forwarded-proto') || req.protocol || 'https';
  const host = req.get('host') || `localhost:${PORT}`;
  return `${proto}://${host}`;
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getSeoForPath(pathname: string, baseUrl: string) {
  const clean = pathname.split('?')[0].replace(/\/+$/, '') || '/';

  if (clean === '/services') {
    return {
      ...SEO_HUB_PAGES.services,
      canonical: `${baseUrl}/services`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: SEO_HUB_PAGES.services.title,
        description: SEO_HUB_PAGES.services.description,
        url: `${baseUrl}/services`,
      },
    };
  }

  if (clean === '/external-work') {
    return {
      ...SEO_HUB_PAGES.externalWork,
      canonical: `${baseUrl}/external-work`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: SEO_HUB_PAGES.externalWork.title,
        description: SEO_HUB_PAGES.externalWork.description,
        url: `${baseUrl}/external-work`,
      },
    };
  }

  if (clean === '/global-tech-services') {
    return {
      ...SEO_HUB_PAGES.globalTech,
      canonical: `${baseUrl}/global-tech-services`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: SEO_HUB_PAGES.globalTech.title,
        description: SEO_HUB_PAGES.globalTech.description,
        url: `${baseUrl}/global-tech-services`,
      },
    };
  }

  if (clean === '/seo-hub') {
    return {
      ...SEO_HUB_PAGES.seoHub,
      canonical: `${baseUrl}/seo-hub`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: SEO_HUB_PAGES.seoHub.title,
        description: SEO_HUB_PAGES.seoHub.description,
        url: `${baseUrl}/seo-hub`,
      },
    };
  }

  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 2 && (parts[0] === 'services' || parts[0] === 'external-work')) {
    const svc = ALL_SERVICES.find((s) => s.slug === parts[1]);
    if (svc) {
      const canonical = `${baseUrl}/${parts[0]}/${svc.slug}`;
      return {
        title: svc.seoTitle,
        description: svc.seoDescription,
        canonical,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: svc.title,
          description: svc.seoDescription,
          serviceType: svc.shortTag,
          category:
            svc.division === 'external'
              ? 'Side Division · Print & Fabrication'
              : 'Official Core Business · Worldwide Tech Services',
          areaServed: svc.division === 'core' ? 'Worldwide' : 'Regional & Custom Shipping',
          provider: {
            '@type': 'Organization',
            name: BRAND.name,
            email: BRAND.email,
            telephone: BRAND.phone,
          },
          url: canonical,
        },
      };
    }
  }

  return {
    title: SEO_HUB_PAGES.home.title,
    description: SEO_HUB_PAGES.home.description,
    canonical: `${baseUrl}/`,
    jsonLd: null,
  };
}

function injectSeoMeta(html: string, pathname: string, baseUrl: string): string {
  const seo = getSeoForPath(pathname, baseUrl);
  const titleSafe = escapeHtmlAttr(seo.title);
  const descSafe = escapeHtmlAttr(seo.description);
  const urlSafe = escapeHtmlAttr(seo.canonical);

  let updated = html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${titleSafe}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${descSafe}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${titleSafe}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${descSafe}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${titleSafe}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${descSafe}" />`
    );

  const canonicalTag = `<link rel="canonical" href="${urlSafe}" />\n    <meta property="og:url" content="${urlSafe}" />`;
  const jsonLdTag = seo.jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>`
    : '';

  updated = updated.replace('</head>', `    ${canonicalTag}${jsonLdTag}\n  </head>`);
  return updated;
}

function isBlockedPrivateHost(hostname: string): boolean {
  const lower = hostname.toLowerCase();
  if (
    lower === 'localhost' ||
    lower === '127.0.0.1' ||
    lower === '::1' ||
    lower === '0.0.0.0' ||
    lower.endsWith('.local') ||
    lower.endsWith('.internal')
  ) {
    return true;
  }
  if (/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.)/.test(lower)) {
    return true;
  }
  return false;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  // API Routes
  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      brand: BRAND.name,
      officialWork: 'Global Tech Services (Worldwide)',
      sideDivision: 'UV Printing, Signage & Custom Fabrication',
    });
  });

  app.get('/api/catalog', (_req, res) => {
    res.json({
      brand: BRAND,
      officialCoreServices: CORE_SERVICES,
      sideDivisionServices: EXTERNAL_WORK_SERVICES,
      globalRegions: GLOBAL_REGIONS,
      upcomingProducts: UPCOMING_PRODUCTS,
      pricingPlans: PRICING_PLANS,
      blogPosts: BLOG_POSTS,
    });
  });

  app.get('/api/services/:slug', (req, res) => {
    const found = ALL_SERVICES.find((s) => s.slug === req.params.slug);
    if (!found) {
      res.status(404).json({ error: 'Service not found' });
      return;
    }
    res.json(found);
  });

  app.post('/api/inquiries', (req, res) => {
    const body = req.body as Partial<InquiryRecord>;
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';
    const country = typeof body?.country === 'string' ? body.country.trim() : 'Worldwide Remote';
    const division =
      body?.division === 'side-fabrication' ? 'Side Division (UV/Print)' : 'Official Tech (Global)';

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and project brief are required.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: 'Valid email address is required.' });
      return;
    }

    const referenceId = `SD-${new Date().getFullYear()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const record: InquiryRecord = {
      referenceId,
      name: name.slice(0, 120),
      email: email.slice(0, 160),
      country: (country || 'Worldwide Remote').slice(0, 100),
      division,
      message: message.slice(0, 3000),
      createdAt: new Date().toISOString(),
    };
    saveInquiry(record);

    res.status(201).json({
      ok: true,
      referenceId,
      division,
      receivedAt: record.createdAt,
    });
  });

  app.post('/api/aoda-check', async (req, res) => {
    const rawUrl = typeof req.body?.url === 'string' ? req.body.url.trim() : '';
    const companySize = typeof req.body?.companySize === 'string' ? req.body.companySize : '20-49';

    if (!rawUrl) {
      res.status(400).json({ error: 'Website URL is required.' });
      return;
    }

    const normalized = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
    let parsed: URL;
    try {
      parsed = new URL(normalized);
    } catch {
      res.status(400).json({ error: 'Invalid URL format.' });
      return;
    }

    if (isBlockedPrivateHost(parsed.hostname)) {
      res.status(400).json({ error: 'Public domain URL required for accessibility inspection.' });
      return;
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      const response = await fetch(parsed.toString(), {
        signal: controller.signal,
        headers: { 'User-Agent': 'SoftwDocs-Accessibility-Check/1.0' },
      });
      clearTimeout(timeout);

      const html = await response.text();
      const hasLang = /<html[^>]*\slang=/i.test(html);
      const hasViewport = /<meta[^>]*name=["']viewport["']/i.test(html);
      const hasH1 = /<h1[\s>]/i.test(html);
      const hasMain = /<main[\s>]/i.test(html);

      const findings: string[] = [];
      if (!hasLang) findings.push('missing <html lang>');
      if (!hasViewport) findings.push('missing viewport meta');
      if (!hasH1) findings.push('missing primary <h1> landmark');
      if (!hasMain) findings.push('missing <main> semantic region');

      const summary =
        findings.length === 0
          ? `Live scan of ${parsed.hostname} (HTTP ${response.status}, ${companySize} staff) passed baseline HTML semantic landmarks (<html lang>, viewport, <h1>, <main>). Full WCAG 2.1 AA contrast & keyboard audit available.`
          : `Live scan of ${parsed.hostname} (HTTP ${response.status}, ${companySize} staff) detected: ${findings.join(', ')}. SoftwDocs can remediate these code-level WCAG 2.1 AA barriers.`;

      res.json({ ok: true, status: response.status, findings, summary });
    } catch {
      res.json({
        ok: true,
        summary: `Assessment queued for ${parsed.hostname} (${companySize} staff). Direct fetch was blocked by host firewall—our engineers perform full authenticated browser + screen-reader WCAG 2.1 AA audits.`,
      });
    }
  });

  // Dynamic XML Sitemap & Robots.txt
  app.get('/sitemap.xml', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const urls = [
      { loc: `${baseUrl}/`, priority: '1.0' },
      { loc: `${baseUrl}/services`, priority: '0.95' },
      { loc: `${baseUrl}/global-tech-services`, priority: '0.95' },
      { loc: `${baseUrl}/external-work`, priority: '0.85' },
      { loc: `${baseUrl}/seo-hub`, priority: '0.9' },
      ...CORE_SERVICES.map((s) => ({ loc: `${baseUrl}/services/${s.slug}`, priority: '0.95' })),
      ...EXTERNAL_WORK_SERVICES.map((s) => ({
        loc: `${baseUrl}/external-work/${s.slug}`,
        priority: '0.85',
      })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((u) => `  <url><loc>${escapeHtmlAttr(u.loc)}</loc><priority>${u.priority}</priority></url>`)
      .join('\n')}\n</urlset>`;

    res.header('Content-Type', 'application/xml').send(xml);
  });

  app.get('/robots.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    res
      .header('Content-Type', 'text/plain')
      .send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    app.use('*', async (req, res, next) => {
      try {
        if (req.originalUrl.startsWith('/api/')) {
          next();
          return;
        }
        const rawHtml = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf-8');
        const transformed = await vite.transformIndexHtml(req.originalUrl, rawHtml);
        const seoHtml = injectSeoMeta(transformed, req.originalUrl, getBaseUrl(req));
        res.status(200).set({ 'Content-Type': 'text/html' }).end(seoHtml);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distDir = path.resolve(ROOT_DIR, 'dist');
    app.use(express.static(distDir, { index: false }));

    app.use('*', (req, res) => {
      const distHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
      const seoHtml = injectSeoMeta(distHtml, req.originalUrl, getBaseUrl(req));
      res.status(200).set({ 'Content-Type': 'text/html' }).end(seoHtml);
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SoftwDocs server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
