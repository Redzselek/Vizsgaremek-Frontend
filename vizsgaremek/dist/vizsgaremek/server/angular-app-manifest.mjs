
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/movies-series"
  },
  {
    "renderMode": 2,
    "route": "/about-profile"
  },
  {
    "renderMode": 2,
    "route": "/movies-series-about"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2275, hash: '5007871184cd27a7388f0cf5294cc82889ab6aca10a858c355f3860f4a335e65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: 'ac927cb6273a0e2a902f9dcc6d953d1e50c46737c43d926e0dbc9a8d47c50734', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 7842, hash: '0dbe074091bb4d631749b7a44cc18065129eb837c7de444db4da36617cafdd34', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7842, hash: '64646d08e008f5270ad7e7b5a8611617f99608ad9f662d36b80132a5158c4c1a', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7862, hash: '2561e865350a1d269943ebb9d324a46bbeb40dccc7814b39d7f9b73bb39d327c', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7909, hash: '12b3a55fc49d9082caa2c8726a5b8ca545198ecec795e96c06c393ffec7d2546', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 9303, hash: 'c3fa343d8cfc4af7918723daf04141fc4f06e5f718a45de522ba3ed337352f71', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7830, hash: '2a600c8b605ad78c0a743dcf6ae1874468d13de63695d2d9e7e1a5e873e6b167', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
