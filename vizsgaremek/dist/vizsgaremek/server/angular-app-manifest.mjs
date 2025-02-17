
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
    'index.csr.html': {size: 2254, hash: '1c85d987115967c5f3cbedf90d825f2b166fb6d40b254d9980342dd8d131e0e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: 'fab9558a76373f9d4f2688e20abe1f6b12d342c17c5249f63d98d7ec72da7fdc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7809, hash: 'c7cea03a97a375f4debeacc36b6083a2c66b98140115417e3d3ac7bb4c9586a6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7841, hash: 'b0d1e446d0f68df65b576c0da57eff83dd0de6f3b2d5da6d3847d3054e40bdb3', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 7821, hash: '2158b8853de4ac4778681e59b992f1bbb90c1876c29e7410b2c40d12aea57af7', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 7821, hash: '2362159ed6ec30ef55e828c4b024f18f6a3167023a6014aaac34a85d490135de', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7821, hash: '21c5c8112b75620f84733f1440b61e06d6aca1cba3ed9f8b4b15d83e8d5674c2', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7811, hash: '2c9389e43b77e7e4cd8f2652af534fcf333aad7115b51cb5dc1d084d0f269ff0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
