
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/./about-profile",
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
    'index.csr.html': {size: 8418, hash: 'be13b3cd17208987f6ed883a2e0f0662679293025fcc5f0571da5b16c63a439a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7594, hash: '5adb8dc87b4219aa8c4cb7b25e960ce60acd4886f81fd79b42b8c26f3f5ad070', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-REVB3AVR.css': {size: 1213, hash: '5Fi7DFfxITE', text: () => import('./assets-chunks/styles-REVB3AVR_css.mjs').then(m => m.default)}
  },
};
