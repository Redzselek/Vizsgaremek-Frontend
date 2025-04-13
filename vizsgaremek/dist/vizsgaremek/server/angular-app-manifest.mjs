
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
    'index.csr.html': {size: 12759, hash: '188dd64b7c185193d5b720610e2e256f5994fb25686ae6b95893061415b71de0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7594, hash: '6f11637aec07780479186cb842d1a54ab8f188274ca4a5445204238c84675b36', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-L47E3SIC.css': {size: 225472, hash: 'vjXIVpTee1o', text: () => import('./assets-chunks/styles-L47E3SIC_css.mjs').then(m => m.default)}
  },
};
