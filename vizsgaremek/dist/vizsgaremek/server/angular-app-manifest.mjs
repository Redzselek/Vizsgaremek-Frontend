
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
    'index.csr.html': {size: 8317, hash: '5e646bf6bea3ea9137710e639a930711f6bb4aeaef0220e3845a0a830cad1c3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7493, hash: 'f9c3b20ed34534696d1f782cd1029a78e7e95e309c104e993ff6deaedcc1cea7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-REVB3AVR.css': {size: 1213, hash: '5Fi7DFfxITE', text: () => import('./assets-chunks/styles-REVB3AVR_css.mjs').then(m => m.default)}
  },
};
