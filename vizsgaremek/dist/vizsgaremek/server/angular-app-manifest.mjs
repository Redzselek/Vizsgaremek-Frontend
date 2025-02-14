
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
    'index.csr.html': {size: 808, hash: '2cb17933b80b2fa405c30a027aada9cd9c449c055113eac1526e5aec3d675ced', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1321, hash: '48844c07891217e17360c73c06c30dea95f8fda713cebd491667465fae547c6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies-series/index.html': {size: 3474, hash: '90f1fd394b1a9ed8fda31a3ab89d45296c84ee4d91c7a1d174add732044e9aa1', text: () => import('./assets-chunks/movies-series_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3464, hash: '0dc057ade9b32b2771fbaa12206505bd86d7faacc0fb657d4624000de079c8f0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'about-profile/index.html': {size: 3474, hash: 'b0cb8e02a954eeff91cf91f05bb969339bcfa21740f3d10c94cc91444e92d8ea', text: () => import('./assets-chunks/about-profile_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 3474, hash: 'd960d4bcfa62468bfd8378e3c5756fcf4b91d055ccd715fabf02c5335ba1165d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'movies-series-about/index.html': {size: 3494, hash: '5614710b83e032a1b5f547fe86669007f6475bc8969f0d63d468032132626e73', text: () => import('./assets-chunks/movies-series-about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3462, hash: '21a1421fe41bd5dc970cce73338e204cd66429457dcd3ca7ba93a047efaa940a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
