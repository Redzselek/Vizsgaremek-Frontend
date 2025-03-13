
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2494, hash: '4d8376ebff546502df3bdb20ae2e506c474a9da04001255fcdbc40d6edb0b16e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1670, hash: 'c5315dd8a6687756c7e82c27c3184c516628d85db84d2141fc972f71cfc7e779', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-REVB3AVR.css': {size: 1213, hash: '5Fi7DFfxITE', text: () => import('./assets-chunks/styles-REVB3AVR_css.mjs').then(m => m.default)}
  },
};
