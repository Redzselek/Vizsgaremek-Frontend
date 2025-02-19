
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
    'index.csr.html': {size: 2275, hash: 'ec2a34e48e88e5e5d82ac6a4d93824560d36050e402123939b3a4adeaccba28e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: '3db7ebf78648a86059f1834631ccf248f4efd4395da93819baebb87706e5f42a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 6974, hash: '85e7ee3181dfcc043a6e9a4ee75298ada0250a0b0d5bc7e8fe83a814db1d733e', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 6974, hash: '7f377e1b277fdcac07c4055e4f558428eae61b98fee8ba5520312e0edd92e63b', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 6994, hash: '688c5cd7eba0b4863b5982cc05face39a7000a1c36dcbc8fe613449ede6bf6b2', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7041, hash: '798b42801b734e7142d99311e9f9d33d6d493d6c0788f808229b380daab12397', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8435, hash: '70c471f20323fb3e85da88dca3e7f52b31ffe56e03238d5f26bbd8fdd1b574cf', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6983, hash: '92255d75827c21513b89e96dd570594cfc9d87e3777a213f66ac1da96d61d3e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
