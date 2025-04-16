export default `<!doctype html>
<html lang="hu" data-bs-theme="dark" data-beasties-container="">

<head>
  <meta charset="utf-8">
  <title>Vizsgaremek</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Preload Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <style>@font-face{font-family:'Quicksand';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>

  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
  <script src="src/swiper-bundle.mjs"></script>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11.2.6/swiper-bundle.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/swiper@11.2.6/swiper-bundle.min.css" rel="stylesheet">


<style>@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:300 700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*{font-family:Quicksand,serif}body{overflow-x:hidden}:root{--bs-blue:#007bff;--bs-indigo:#6610f2;--bs-purple:#593196;--bs-pink:#e83e8c;--bs-red:#fc3939;--bs-orange:#fd7e14;--bs-yellow:#efa31d;--bs-green:#13b955;--bs-teal:#20c997;--bs-cyan:#009cdc;--bs-black:#000;--bs-white:#fff;--bs-gray:#868e96;--bs-gray-dark:#343a40;--bs-gray-100:#fafafa;--bs-gray-200:#f9f8fc;--bs-gray-300:#ededed;--bs-gray-400:#cbc8d0;--bs-gray-500:#adb5bd;--bs-gray-600:#868e96;--bs-gray-700:#444;--bs-gray-800:#343a40;--bs-gray-900:#17141f;--bs-primary:#31965b;--bs-secondary:#a991d4;--bs-success:#13b955;--bs-info:#009cdc;--bs-warning:#efa31d;--bs-danger:#fc3939;--bs-light:#f9f8fc;--bs-dark:#17141f;--bs-primary-rgb:89, 49, 150;--bs-secondary-rgb:169, 145, 212;--bs-success-rgb:19, 185, 85;--bs-info-rgb:0, 156, 220;--bs-warning-rgb:239, 163, 29;--bs-danger-rgb:252, 57, 57;--bs-light-rgb:249, 248, 252;--bs-dark-rgb:23, 20, 31;--bs-primary-text-emphasis:#24143c;--bs-secondary-text-emphasis:#443a55;--bs-success-text-emphasis:#084a22;--bs-info-text-emphasis:#003e58;--bs-warning-text-emphasis:#60410c;--bs-danger-text-emphasis:#651717;--bs-light-text-emphasis:#444;--bs-dark-text-emphasis:#444;--bs-primary-bg-subtle:#ded6ea;--bs-secondary-bg-subtle:#eee9f6;--bs-success-bg-subtle:#d0f1dd;--bs-info-bg-subtle:#ccebf8;--bs-warning-bg-subtle:#fcedd2;--bs-danger-bg-subtle:#fed7d7;--bs-light-bg-subtle:#fdfdfd;--bs-dark-bg-subtle:#cbc8d0;--bs-primary-border-subtle:#bdadd5;--bs-secondary-border-subtle:#ddd3ee;--bs-success-border-subtle:#a1e3bb;--bs-info-border-subtle:#99d7f1;--bs-warning-border-subtle:#f9daa5;--bs-danger-border-subtle:#feb0b0;--bs-light-border-subtle:#f9f8fc;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255, 255, 255;--bs-black-rgb:0, 0, 0;--bs-font-sans-serif:system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace:SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#444;--bs-body-color-rgb:68, 68, 68;--bs-body-bg:#fff;--bs-body-bg-rgb:255, 255, 255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0, 0, 0;--bs-secondary-color:rgba(68, 68, 68, .75);--bs-secondary-color-rgb:68, 68, 68;--bs-secondary-bg:#f9f8fc;--bs-secondary-bg-rgb:249, 248, 252;--bs-tertiary-color:rgba(68, 68, 68, .5);--bs-tertiary-color-rgb:68, 68, 68;--bs-tertiary-bg:#fafafa;--bs-tertiary-bg-rgb:250, 250, 250;--bs-heading-color:inherit;--bs-link-color:#3d9631;--bs-link-color-rgb:89, 49, 150;--bs-link-decoration:underline;--bs-link-hover-color:#593196;--bs-link-hover-color-rgb:89, 49, 150;--bs-code-color:#e83e8c;--bs-highlight-color:#444;--bs-highlight-bg:#fcedd2;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#ededed;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:#59319640;--bs-form-valid-color:#13b955;--bs-form-valid-border-color:#13b955;--bs-form-invalid-color:#fc3939;--bs-form-invalid-border-color:#fc3939}*,*:before,*:after{box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:#00000000}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}:root{--bs-btn-close-filter: }:root{--bs-carousel-indicator-active-bg:#fff;--bs-carousel-caption-color:#fff;--bs-carousel-control-icon-filter: }</style><link rel="stylesheet" href="styles-UU75FXBW.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-UU75FXBW.css"></noscript></head>

<body ngcm="">
  <app-root></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-BPFDZCEY.js" type="module"></script></body>

</html>`;