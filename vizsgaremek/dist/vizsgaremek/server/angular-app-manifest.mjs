
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'frontend',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/frontend"
  },
  {
    "renderMode": 2,
    "route": "/frontend/movies-series"
  },
  {
    "renderMode": 2,
    "route": "/frontend/about-profile"
  },
  {
    "renderMode": 2,
    "route": "/frontend/movies-series-about"
  },
  {
    "renderMode": 2,
    "route": "/frontend/login"
  },
  {
    "renderMode": 2,
    "route": "/frontend/register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2282, hash: '55f03351d648c5fb031486983a00a582743fd3aab7a08b9127c1de5bcdc29202', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1458, hash: 'e01f833cf4133440462b112eaaaa3f6891313bbc489690045cb2f8677ad3e9a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 7795, hash: 'de66879110729a11df3f273bee74e4fb76dc83dc975f7aa8c4441ff7580c2c8e', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7795, hash: 'de66879110729a11df3f273bee74e4fb76dc83dc975f7aa8c4441ff7580c2c8e', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7795, hash: 'de66879110729a11df3f273bee74e4fb76dc83dc975f7aa8c4441ff7580c2c8e', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 7795, hash: 'de66879110729a11df3f273bee74e4fb76dc83dc975f7aa8c4441ff7580c2c8e', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7795, hash: 'de66879110729a11df3f273bee74e4fb76dc83dc975f7aa8c4441ff7580c2c8e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7795, hash: 'de66879110729a11df3f273bee74e4fb76dc83dc975f7aa8c4441ff7580c2c8e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
