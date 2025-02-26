
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/./main-page",
    "route": "/."
  },
  {
    "renderMode": 2,
    "route": "/./main-page"
  },
  {
    "renderMode": 2,
    "route": "/./movies-series"
  },
  {
    "renderMode": 2,
    "route": "/./about-profile"
  },
  {
    "renderMode": 2,
    "route": "/./movies-series-about"
  },
  {
    "renderMode": 2,
    "route": "/./login"
  },
  {
    "renderMode": 2,
    "route": "/./register"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2275, hash: 'f155ba96ce63ccac97ea18c5423d2312dbad4715eaf001e9ba7acf9bde49ada6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1451, hash: '332709eb394bbda1c78bd2830bb94e729e6e37dfdf9201a3c38e7c1ec2513f07', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-MECZKUYO.css': {size: 1213, hash: 'JXC4EHhpbiE', text: () => import('./assets-chunks/styles-MECZKUYO_css.mjs').then(m => m.default)}
  },
};
