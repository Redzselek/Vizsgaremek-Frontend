
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
    'index.csr.html': {size: 12941, hash: '2200e001d3b3132ecf1258fa1c8b3848359b0a3751f007eff0546c1765c073b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7753, hash: 'c312bb2227c11e436615c0fa299659acb5b5ccfc7f38a0e026e026710f7a304c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UU75FXBW.css': {size: 225495, hash: 'jY4iTHwdRRQ', text: () => import('./assets-chunks/styles-UU75FXBW_css.mjs').then(m => m.default)}
  },
};
