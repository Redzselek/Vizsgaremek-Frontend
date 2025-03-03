
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
    'index.csr.html': {size: 2275, hash: 'e60812040c34ce79dcea5e44e0f2ceb012cd2634dc457b0ed160ede7c480477c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: 'a485559fd4bcf65b73b6f9314cf36fd022133e5af27985ab7038b665f41168f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
