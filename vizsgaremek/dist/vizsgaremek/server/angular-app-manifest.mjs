
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
    'index.csr.html': {size: 2254, hash: '8e5a42647ab1b4e2b48637550a7140b1f6c4c006c351888ad545d4196a30198a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: 'd5a72f3d0359a2b69ea3b3ed399eccf27d24bff61216ad375da93a3ebd05814d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 7821, hash: '5e57b41d4771a448d4b09afbc741415c6d14caf10fe8da2a876228f17730fc93', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7821, hash: '884146cdbc7d9bfc0037f2eaf7dd7eab2ad1d0093fb04356b27f0d9fbab7da13', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7841, hash: '4b872f55952ed54ac70d1f6b1ea6a33f5fdf29c4a72de70c2ca2451ae26a08c1', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 7890, hash: '8d1219646c002d1d1dbd40a393803884faa36c1ba04f9ef28275f14c35a13e7f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8868, hash: '1f533dbdd9b0f4f99ac251ad7facf6108b1a0227acea4a15e196167663c282a3', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7809, hash: '0c2f8440a5beb4504463e9fdba60a96580fbcc944d748935818dc42d0f28d7ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
