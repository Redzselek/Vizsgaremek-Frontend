
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
    'index.csr.html': {size: 2254, hash: '57b23e8e8972d1316f7a38a9249f3522942e16b500bd9aa49f64318a2d301e0a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1430, hash: 'b5a0fc7665dfb81aa0e581b65c627e3083f1d5184dddd9129206763659ead716', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7809, hash: '057f4261b5f7753ee04480942db96a149920c818614ae55c93706e4c792056cc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 7821, hash: 'aa8aad3b632bc0fa434b30785cd9501f9df90bd5f48efa1d2e3fe035f5b58484', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 7821, hash: '18c16f9c108fda2863d3bac8b0d78d843678296e51c94cd15aeb6d8cbbfd3083', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 9303, hash: '07250b57514d490a83d1ccc10d08ceed7996193f9f97591e9ec3b1d8a7e674f6', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 8868, hash: '84dff6a94d5a19da31d7e9898599f39a1a579e78b0e0c481f988c35771c3bddd', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 7841, hash: 'fc697f1d42f4757c033ee526400285e08f62df4c98e61adb13339e599930e739', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
