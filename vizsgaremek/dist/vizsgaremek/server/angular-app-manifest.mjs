
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
    'index.csr.html': {size: 12939, hash: '85f0d087e5ed9913e910be3bbaf94fe68419e1edb04875ff10ea30e404d8940d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7751, hash: 'f0ac65fbd08bcc96e68f510ea58ce5071de0af767ebc86521a21473479ad7ad6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-page/index.html': {size: 47550, hash: 'af4c9eee86d1014564241e5381558a408c37d86fbead49a84b6d80c8c8277cce', text: () => import('./assets-chunks/main-page_index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 47550, hash: 'af4c9eee86d1014564241e5381558a408c37d86fbead49a84b6d80c8c8277cce', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 47550, hash: 'af4c9eee86d1014564241e5381558a408c37d86fbead49a84b6d80c8c8277cce', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 47550, hash: 'af4c9eee86d1014564241e5381558a408c37d86fbead49a84b6d80c8c8277cce', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 47550, hash: 'af4c9eee86d1014564241e5381558a408c37d86fbead49a84b6d80c8c8277cce', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 47618, hash: 'def3d3898868f9a76479f81bf00731b9f711a629415a730e03e0641b03495adf', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 47618, hash: 'def3d3898868f9a76479f81bf00731b9f711a629415a730e03e0641b03495adf', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'upload/index.html': {size: 47550, hash: 'af4c9eee86d1014564241e5381558a408c37d86fbead49a84b6d80c8c8277cce', text: () => import('./assets-chunks/upload_index_html.mjs').then(m => m.default)},
    'styles-UU75FXBW.css': {size: 225495, hash: 'jY4iTHwdRRQ', text: () => import('./assets-chunks/styles-UU75FXBW_css.mjs').then(m => m.default)}
  },
};
