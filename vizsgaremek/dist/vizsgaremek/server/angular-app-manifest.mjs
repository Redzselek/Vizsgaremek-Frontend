
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
    'index.csr.html': {size: 12939, hash: '534a7262cc14a03f090e9600a265d3cd8b3c1594495181fb931e8a3c799eb28c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7751, hash: 'cf0b5ccf915c1a331df232554989209b3763aa40a90e3ba643da3524af940b5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'upload/index.html': {size: 44596, hash: 'b0cb3e61f6003c8315fc395c954b7e2b2a84fc6ec320baa97b7dbb7cac298f34', text: () => import('./assets-chunks/upload_index_html.mjs').then(m => m.default)},
    'styles-UU75FXBW.css': {size: 225495, hash: 'jY4iTHwdRRQ', text: () => import('./assets-chunks/styles-UU75FXBW_css.mjs').then(m => m.default)}
  },
};
