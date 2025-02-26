
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
    'index.csr.html': {size: 2275, hash: 'c86de2639d67a7c5ff69b41f8e90a43a97ecfa21bebc6b607483b4ff3c54606f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: 'bc0873df2eca370ed141aa5037edc468990d703038f6c1b780267d863cc686da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7610, hash: 'a0ed31a275f85f9296d46462e44274e524bd49c705e7f6f50d0c655b7646edcf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7499, hash: '9d7a57ee2362a23cb0129dd79087d86b7e50c8598170d4e7a8feb3ebeed5a2db', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8647, hash: '2f8f8d64c7910a54d9db320f011c8e0d8d7b417d339a65d3913b6f252e2ed75c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 8960, hash: 'aaf3fd8712313580c586c9e945053250da53fec2cb66119c6e1332615fd8d6af', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7519, hash: 'b940376be8633f1b4d63731dd206fb8785004f3cbe6ace315dcb584f93e25c7d', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 11760, hash: 'cf5646eac829f74ca49111e93b3d59e695da8854d75354afe249c737f4fb933d', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
