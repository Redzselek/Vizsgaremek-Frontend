
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
    "renderMode": 2,
    "route": "/./about-profile"
  },
  {
    "renderMode": 2,
    "route": "/./movies-series-about"
  },
  {
    "renderMode": 2,
    "route": "/./login"
  },
  {
    "renderMode": 2,
    "route": "/./register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2275, hash: '1af9f142d555691f2a071a7117829fb261f432f67df0084fb17fafbebaebf448', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: '386f4cbd1b4bb71693756d33174bdacafea36bf296fe826876386a4f6ee11d5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
