
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
    'index.csr.html': {size: 808, hash: 'e69706f3988421dba9a9f18c9357f00bf444f6a583eeadfbe7de4773db65f4f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: 'cb021376cf97be5ca7ff685b8a0a5534112cbfda79e1aabf25950e279f0653d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 3425, hash: '1d97aad2aabb3bda6a4c0a8a0d0ed5948ef9508d1608b87ad33937680e8a579d', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 3425, hash: 'a7ddf18d2355ebda91b3bd31b871be29fad321f6a6afbe70cbb10e89a8cb033b', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3413, hash: '11381abc5789ea051695c43a81368349c0d0c51e0b3bd03b40995be0c44a601f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 3445, hash: '8e9d3df5a69d996d77382e5e0dddd9dc219ab939027cb349ed38d88ddd62b3f8', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3415, hash: 'c64fbc55eca3727185c906cf328f95e661b2ff8d4071017e865d43360b24148f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 3425, hash: 'ccd30c746e73be6fde207e8a2a7ac98ae6f3d27b8be391511296f5e6481a873b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
