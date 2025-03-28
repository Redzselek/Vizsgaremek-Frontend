
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
    'index.csr.html': {size: 8317, hash: '29e4ad4db0f9fce129aa0f33213b7cd4b94c00a25fe06a409146e882536447d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7493, hash: 'e9d8c5e997061ecf6ea0dcc1677f34801f86fc2aa2023ecd22359afbee28b5df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-REVB3AVR.css': {size: 1213, hash: '5Fi7DFfxITE', text: () => import('./assets-chunks/styles-REVB3AVR_css.mjs').then(m => m.default)}
  },
};
