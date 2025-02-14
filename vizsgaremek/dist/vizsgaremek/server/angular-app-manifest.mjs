
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
    'index.csr.html': {size: 808, hash: '11d64c8759cf125832d0e54e9e70565160031d30d92964a2efa9c4f90190047c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: '8e3bd836171c0a15e4f7ad44d59b776a994a12675ceb4ba551281b20ff173f3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 3386, hash: '0d04b3a134f57d41ed1c61c3d914fa6ff91433ae216dc64d6d509a93cc4a3a57', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 3406, hash: '22ae88c006bf2b61bad0bf12db19046b14b5a6f2a4875c01edc4a7a5973974f7', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3374, hash: '2126389e3776e51a229fb621835148f876bf47ecaf899cbc4f1491c3923a1f01', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3376, hash: '235b61990adf23ae10c019651c2987fa065b9e2b04176ef9146f03f0e790c565', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 3386, hash: 'd9959bc5cd34740824699638c3b3ab48d30afa05e45dfc3d98b82b79c9796c4c', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 3386, hash: 'e06cb441fd832c34dc77393c53f784e3cd5d9ccf563900b11e82573098e585c5', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
