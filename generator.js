const SitemapGenerator = require('sitemap-generator');

// create generator
const generator = SitemapGenerator('https://t.me/s/wabarc', {
  stripQuerystring: false
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
  console.log('done')
});

// start the crawler
generator.start();
