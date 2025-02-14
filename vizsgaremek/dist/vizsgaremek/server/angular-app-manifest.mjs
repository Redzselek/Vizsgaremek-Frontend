
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
    "route": "/frontend/movies-series"
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
    'index.csr.html': {size: 808, hash: '81a30e67ab606f206172a77b58c7d894d9a7f7699436f77afc2be159e58c89cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: 'c329443b66b136e532ccbc3c49ed97698f46e7aaf3a87f4b4af22455b1a0396a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'frontend/movies-series/index.html': {size: 3386, hash: '385ff6a7a005f9e3bcf356317312d3c35c355b4bd54e033b8cf53ee33c333c7d', text: () => import('./assets-chunks/frontend_movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 3386, hash: '326adbda859bbd7d54c27d53a1831d8515f4b10485cb2d911564eb941262bde5', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3376, hash: '3c4c1ace0079422d79fbb24773d0512026e3d593bf8d63f20cd45c6583613c04', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 3386, hash: 'b1e62733aae6548228b9fc7246f3c8597c7a5a1da6bbbce3e382ca38860b3a23', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 3406, hash: 'f4851c7eeb06da00e19e5e88d968e73ca41a455e4673b2dcea766a1c2b34eea9', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3374, hash: '71b61757122efd7a76a4f341f1f97ebf4c969118355a2dd64d070797fa06cab5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
