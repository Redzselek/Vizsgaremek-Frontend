
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/./main-page",
    "route": "/."
  },
  {
    "renderMode": 2,
    "route": "/./main-page"
  },
  {
    "renderMode": 2,
    "route": "/./movies-series"
  },
  {
    "renderMode": "none",
    "route": "/./movies-series-about/*"
  },
  {
    "renderMode": 2,
    "route": "/./about-profile"
  },
  {
    "renderMode": 2,
    "route": "/./login"
  },
  {
    "renderMode": 2,
    "route": "/./register"
  },
  {
    "renderMode": 2,
    "route": "/./navbar"
  },
  {
    "renderMode": 2,
    "route": "/./footer"
  },
  {
    "renderMode": 2,
    "route": "/./upload"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12941, hash: '521b1ae3717d3fe0b826f9e5b8e671d62ba1c9a4cda80503f124d5e251ad906a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7753, hash: 'e691d62abf55a95fafef0f2ac9ef351dfe87a2c72468aea9f47271fd30c061b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UU75FXBW.css': {size: 225495, hash: 'jY4iTHwdRRQ', text: () => import('./assets-chunks/styles-UU75FXBW_css.mjs').then(m => m.default)}
  },
};
