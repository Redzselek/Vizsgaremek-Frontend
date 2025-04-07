
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
    'index.csr.html': {size: 8418, hash: 'fd7b886512db98f9984d91538d3670d5f4514c2e5a0ce95301472fd7d19bf2c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7594, hash: '48d5fb92c83564890703c44a0421014890c22519a019f455cb9b467d6a545518', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-REVB3AVR.css': {size: 1213, hash: '5Fi7DFfxITE', text: () => import('./assets-chunks/styles-REVB3AVR_css.mjs').then(m => m.default)}
  },
};
