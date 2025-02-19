
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
    'index.csr.html': {size: 2275, hash: '963d0f604d2e993ebaba3d09929043a168ecc0614b4dbc83798ab3a6a588a878', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: 'bb40233235d7d58f4866db6b96bf9e1ff92aea79ea2fab18260e0d1e1cc9b1a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7830, hash: '08cfd1b1fd85c1a0747f98c7399c0965e140c3bf96ccfb598dd2849bba089324', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 7842, hash: '9bc007a7303249e9b85958bfb2a2a3b90adfd8a356134d0b97b4f288348cd85e', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7909, hash: '7610338c706dd985df702552ca12dcc37cf42f5ae0ea5cba168f6bb8a358c864', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 9303, hash: 'b4beb099b7359bbf6f4f6c8d63f3fb2445bb98a24d1f5158916b70415fc87387', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7842, hash: 'db71846317aa298688d621a9b9dc8d40d74c826aa30c0012d103980b1c8b09b0', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7862, hash: 'fcef45f3c7baefd436cf783eb4bf08e49f43fcb9692e7a21de25025da9a3faa1', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
