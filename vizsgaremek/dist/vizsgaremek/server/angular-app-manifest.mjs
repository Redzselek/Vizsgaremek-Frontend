
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
    'index.csr.html': {size: 2254, hash: '9c96d9122f050685b0559deedd13db254aceeff518a5f82888351f1ffb220908', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: '12e5959d1288f381af47f2cdf27b4bafaf3904bf183ad6c1312477b806d20028', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 6168, hash: '9f9a381210a7dc3a7a52a6d67dfc6a010895e811715337d177cf94b699bdd5cb', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6158, hash: '3fa1a881110cbe5a4d5bd50ef1ead108dc7f843297ce81606256f19782805747', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 6168, hash: 'f8c5d886634b81f9e235b098c74a0ad79d0f76d9aaf8df1748ea12273964a45f', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6168, hash: '15ea67a8ba55a3301c7b7f7ad1f3b7fdc5c3da44fb0ec77b957c707304f57306', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6156, hash: '616b605a79b94615bdebb693e7038ea370072fdf3824e2dc84769b71ab6a732d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 6188, hash: '9e0d7ed8a585f87df24fa0f7a6c6f463b36401284e288f0c6e581a79bc4416e0', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
