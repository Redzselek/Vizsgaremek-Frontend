
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
    'index.csr.html': {size: 916, hash: 'be37c8cddfc5cab5ec42bdc2e7c9639c860a6599178321d90c13b588502446f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: '536732cd2709a8e5113ec83a8941fd6f4418a0ed2ea581dbb580bba7f2bb5de5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 6190, hash: 'a1864fc9556b945c15fabd690248ec2bb898121dd0bb2e8051270b0306d3e47a', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 6210, hash: '1b53f513d62ade3495b7919a78a171021a5125b935da7da995dd7f5a6e23d765', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6178, hash: '7cd3fd59cc3d4bc78b6f6a4d17d769c894875858417fd15074fd4983e93d2624', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6180, hash: '6e9c4555abe42789234aa4d1377c0d1bac288d2b4dc8394d9d1e8d5ddd44ddf8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6190, hash: '8536db213cce2fb8e9947f1307af3103eda06bb9196f812aa70144685d22929e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 6190, hash: 'd64000d4d5e5175a3697c193d7c02c04f327b56afa27d90bd978f8208d50cdbe', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
