#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://fencetastic.net';
const TODAY = '2026-03-17';
const OUTPUT_PATH = path.join(__dirname, 'public', 'sitemap.xml');

// --- Page definitions ---

const homepage = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
];

const corePages = [
  { loc: '/about',          priority: '0.5', changefreq: 'monthly' },
  { loc: '/gallery',        priority: '0.5', changefreq: 'monthly' },
  { loc: '/financing',      priority: '0.5', changefreq: 'monthly' },
  { loc: '/faqs',           priority: '0.5', changefreq: 'monthly' },
  { loc: '/warranty',       priority: '0.5', changefreq: 'monthly' },
  { loc: '/service-areas',  priority: '0.5', changefreq: 'monthly' },
  { loc: '/services',       priority: '0.5', changefreq: 'monthly' },
  { loc: '/why-choose-us',  priority: '0.5', changefreq: 'monthly' },
];

const servicePages = [
  { loc: '/wood-fences',        priority: '0.8', changefreq: 'monthly' },
  { loc: '/metal-fences',       priority: '0.8', changefreq: 'monthly' },
  { loc: '/vinyl-fences',       priority: '0.8', changefreq: 'monthly' },
  { loc: '/farm-fences',        priority: '0.8', changefreq: 'monthly' },
  { loc: '/custom-gates',       priority: '0.8', changefreq: 'monthly' },
  { loc: '/decks',              priority: '0.8', changefreq: 'monthly' },
  { loc: '/pergolas',           priority: '0.8', changefreq: 'monthly' },
  { loc: '/pressure-wash-stain', priority: '0.8', changefreq: 'monthly' },
];

const blogListing = [
  { loc: '/blog', priority: '0.7', changefreq: 'weekly' },
];

const blogPosts = [
  'storm-season-frisco-wind-resistant-fencing',
  'mckinney-fence-permit-guide-2026',
  'board-on-board-vs-stockade-prosper-luxury',
  'southlake-pool-fence-modern-design',
  'plano-clay-soil-fence-posts',
  'dallas-deep-ellum-iron-fencing',
  'fort-worth-stockyards-suburbs-fence-landscape',
  'allen-master-planned-fence-rules',
  'richardson-telecom-corridor-fence-guide',
  'celina-explosive-growth-fence-timing',
  'flower-mound-lakeside-waterfront-fence',
  'cedar-vs-pine-texas-fence-wood-debate',
  'arlington-backyard-fence-styles',
  'colleyville-estate-fencing',
  'spring-fence-maintenance-checklist-dfw',
  'highland-park-bespoke-fencing',
  'university-park-smu-fence-considerations',
  'automatic-gates-101-dfw-homeowners',
  'rockwall-lakeside-fencing-considerations',
  'summer-fence-stain-schedule-dfw',
  'murphy-small-town-big-standards',
  'wylie-farmland-subdivisions-fencing',
  'metal-vs-wood-10-year-cost-analysis',
  'sachse-hidden-gem-neighborhoods',
  'hoa-fence-approval-step-by-step-dfw',
  'irving-las-colinas-contemporary-fence',
  'pergolas-that-get-used-dfw-design',
  'garland-diverse-neighborhoods-fencing',
  'truth-about-vinyl-fencing-texas-heat',
  'the-colony-lewisville-lake-fencing',
  'deck-season-dfw-more-than-boards',
  'fairview-rural-character-modern-fencing',
  'lucas-horse-property-farm-fence',
  'fence-financing-decoded-dfw',
  'fourth-of-july-backyard-outdoor-projects',
  'rowlett-rebuilding-outdoor-spaces',
  'dfw-heat-index-fence-materials',
  'princeton-growth-boom-fence-demand',
  'custom-gates-that-make-statement',
  'melissa-quiet-charm-fence-styles',
  'pressure-washing-fence-diy-mistakes',
  'parker-acreage-fencing',
  'texas-fence-law-property-line-rules',
  'nevada-tx-small-town-fencing',
  'fall-fence-planning-dfw-parents',
  'new-hope-rural-fence-solutions',
  'horizontal-fences-design-trend-worth-it',
  'lowry-crossing-country-fence-options',
  'staining-oil-vs-water-based-texas',
  'st-paul-community-minded-fencing',
  'fence-contractor-insurance-matters',
  'fall-fence-refresh-best-time-dfw',
  'westlake-exclusive-estates-fencing',
  'complete-guide-fence-post-depth-north-texas',
  'addison-townhomes-compact-lot-fencing',
  'choosing-right-fence-company-dfw',
  'year-round-dfw-fence-care-calendar',
].map(slug => ({ loc: `/blog/${slug}`, priority: '0.6', changefreq: 'weekly' }));

// City pages: all *.html in public/ excluding index, core, service, and " 2" duplicates
const EXCLUDE_SLUGS = new Set([
  'index',
  'about', 'gallery', 'financing', 'faqs', 'warranty',
  'service-areas', 'services', 'why-choose-us',
  'wood-fences', 'metal-fences', 'vinyl-fences', 'farm-fences',
  'custom-gates', 'decks', 'pergolas', 'pressure-wash-stain',
  'blog',
]);

const cityPages = [
  'addison', 'allen', 'arlington', 'celina', 'colleyville', 'copeville',
  'dallas', 'fairview', 'farmersville', 'fate', 'flower-mound', 'fort-worth',
  'frisco', 'garland', 'highland-park', 'irving', 'lavon', 'little-elm',
  'lowry-crossing', 'lucas', 'mckinney', 'melissa', 'murphy', 'nevada',
  'new-hope', 'parker', 'plano', 'princeton', 'prosper', 'richardson',
  'rockwall', 'rowlett', 'sachse', 'southlake', 'st-paul', 'the-colony',
  'university-park', 'westlake', 'wylie',
].map(slug => ({ loc: `/${slug}`, priority: '0.7', changefreq: 'monthly' }));

// --- Build XML ---

function urlEntry(page) {
  return [
    '  <url>',
    `    <loc>${BASE_URL}${page.loc}</loc>`,
    `    <lastmod>${TODAY}</lastmod>`,
    `    <changefreq>${page.changefreq}</changefreq>`,
    `    <priority>${page.priority}</priority>`,
    '  </url>',
  ].join('\n');
}

const allPages = [
  ...homepage,
  ...corePages,
  ...servicePages,
  ...cityPages,
  ...blogListing,
  ...blogPosts,
];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...allPages.map(urlEntry),
  '</urlset>',
].join('\n');

fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');

const totalUrls = allPages.length;
console.log(`Sitemap written to ${OUTPUT_PATH}`);
console.log(`Total URLs: ${totalUrls}`);
console.log(`  Homepage:      ${homepage.length}`);
console.log(`  Core pages:    ${corePages.length}`);
console.log(`  Service pages: ${servicePages.length}`);
console.log(`  City pages:    ${cityPages.length}`);
console.log(`  Blog listing:  ${blogListing.length}`);
console.log(`  Blog posts:    ${blogPosts.length}`);
