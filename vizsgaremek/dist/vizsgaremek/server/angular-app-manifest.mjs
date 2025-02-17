
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
    'index.csr.html': {size: 808, hash: '21ab51d8d6f69289c83f371137359fddf6e589a52b99794d1436d276de9d4840', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: '7555c977e1a33148f11c96a14172a3cc061907d5ba91693190e946bedc511a3c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5531, hash: '223ffe9421b98db1fd75a30c2e549da2f835f04b1fb40924d61c180d2dd22aa9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 5543, hash: '720ab22f9aebfee01019d936c95a641cba649558d6ee52a15e54e9d62844b3a4', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 5543, hash: '6947e62b5ca2184babf020523cb99398f90a36a80350acd9b3c85be9a4e96e59', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 5563, hash: 'c918dcba27ad20a6724ce2cf26799047541b4d5bc2e6235136b20df2e63725ee', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5533, hash: 'fc1217e1e85c4924d036499db078bafdcc6df84afa4a0ff2b2fc19629172d765', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 5543, hash: '330999c1772f945c6eae932c95ef88ceb4df8916d22c3e8911cff12b6eb53d90', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
