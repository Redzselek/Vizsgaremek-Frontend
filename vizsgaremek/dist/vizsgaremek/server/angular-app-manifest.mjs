
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/main-page"
  },
  {
    "renderMode": 2,
    "route": "/movies-series"
  },
  {
    "renderMode": "none",
    "route": "/movies-series-about/*"
  },
  {
    "renderMode": 2,
    "route": "/about-profile"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/navbar"
  },
  {
    "renderMode": 2,
    "route": "/footer"
  },
  {
    "renderMode": 2,
    "route": "/upload"
  },
  {
    "renderMode": 2,
    "redirectTo": "/main-page",
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12941, hash: '0e76182f7df5fb83831b573559e3941fb44c4dd064a01ec465b7ddd2fb071692', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7753, hash: '9df8efa41f52ec958c6ec2d4b6ddd848fc96afedd134da30780acb9336f06bab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 47608, hash: '9f87ba3519adc7d088ca9441506148c9adb8ebce3ea82701092008c0f6dad6eb', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 47608, hash: '9f87ba3519adc7d088ca9441506148c9adb8ebce3ea82701092008c0f6dad6eb', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 47539, hash: 'c5bf0089847cf20ff79ff48dd57755af39be2ba13355c86ddc0fa9c279ab1bbb', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 47539, hash: 'c5bf0089847cf20ff79ff48dd57755af39be2ba13355c86ddc0fa9c279ab1bbb', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 47608, hash: '9f87ba3519adc7d088ca9441506148c9adb8ebce3ea82701092008c0f6dad6eb', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 47539, hash: 'c5bf0089847cf20ff79ff48dd57755af39be2ba13355c86ddc0fa9c279ab1bbb', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 47539, hash: 'c5bf0089847cf20ff79ff48dd57755af39be2ba13355c86ddc0fa9c279ab1bbb', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'upload/index.html': {size: 47539, hash: 'c5bf0089847cf20ff79ff48dd57755af39be2ba13355c86ddc0fa9c279ab1bbb', text: () => import('./assets-chunks/upload_index_html.mjs').then(m => m.default)},
    'styles-UU75FXBW.css': {size: 225495, hash: 'jY4iTHwdRRQ', text: () => import('./assets-chunks/styles-UU75FXBW_css.mjs').then(m => m.default)}
  },
};
