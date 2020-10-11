import {
  createGlobalStyle
} from 'styled-components';
import PingFang from './PingFang.ttf'

export const GlobalStyle = createGlobalStyle `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  html,body {
      width: 100%;
      height: 100%;
      min-width: 1600px;
      min-height: 900px;
      touch-action: none;
  }
  /*自定义字体*/
  @font-face {
    font-family: "pingfang";
    src: url(${PingFang}) format("trueType");
    font-weight: normal;
    font-size: normal;
  }
  @font-face {font-family: "iconfont";
    src: url('../iconfont/iconfont.eot?t=1597201874577'); /* IE9 */
    src: url('../iconfont/iconfont.eot?t=1597201874577#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALUAAsAAAAABpQAAAKHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBEIEYATYCJAMICwYABCAFhG0HPhvMBcgekiSEIAFFJaRe4CcojuD7/djvue+imlySJ9EmWiGRaERCUmmRFJiuIfLl/+b0l2GbvecLpAbMgUualq+XAaKRU2bsN+EmCRoqK/+fz3M5vfn83oHcVf95L6e9aaxpCwOMAynAvTAKJOASyrhh7AKXcJ9ApQ4eipXa5m7Qy6xlgTiRRAb0uZgss2K5UFqzN4s70ChP58prALfh9+MHQqEnKSlYbVvHNTyUf2CXqZb+lwz7BMRBQIdLUGAMyMRebW6DSjBepTKn1gP21Rx88L/vFXt1CfbXWY3VoA2q70njam9VPoHMeIaAuVFvRtGqNZ9Zd9w8nBnBcx7gZ5Pt8jI0r/3Jeiza+L6egt6+/O5ed093WehrPMFVqkSRKpL6Yi9FeaSRdU/m/Onx9rkxO93+1uGeZfzvOm7/O4ZbT4niV8pZP8uRfgWCifWl2KGt+FVvyuDdhcdQ3S9A+f79wX/qyMD//xxcZ3lSVs0Qlwzpzm+q1IP+gxVq9DzW3nJTpVCu5dYCZdpTFMr1kZkdQ4kqkyhVbh6VRtUdrtKEUIlcgRHrAKHeFZJabyjUuyEz+4QSrV5Qqj5UqHQQrjOrDIRkrCKYoZhH7DSSuHRKcHzUGDV3YlFOMCSrC4VeTHJSEgV9gWKxDqcwmWNDbkIMUSoggaSTqBY8hhOJNMqQdAxz1BelNFPo9wt1L/Jx6SQYLSMwBoXxENY0RMJJSxH84ZSx9PlOmEiWwCAtfTXFXhiRI02OBPkEepB15lSvvnt5JmeCKISiBIiASEtCasEsLCEhDcnUz4rBOJRPdEQmo5DfHiT0NfvWtya/7ghUshwp7CmF5tMok+KicjBNnJSDgXAkEAQAAA==') format('woff2'),
    url('../iconfont/iconfont.woff?t=1597201874577') format('woff'),
    url('../iconfont/iconfont.ttf?t=1597201874577') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('../iconfont/iconfont.svg?t=1597201874577#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-shanchushangwu103401:before {
    content: "\e750";
  }
  #root {
    height: 100%;
    font-family: "pingfang", Avenir, Helvetica, Arial, sans-serif!important;
    font-size:14px;
  }
  .ant-spin-nested-loading {
    height: 100%!important;
  }
  .ant-spin-blur{
    height: 100%!important;
  }
  .ant-spin-container {
    height: 100%!important;
  }
  /*滚动条样式 */
  ::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 0;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #b8b8b8;
    -webkit-border-radius: 6px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
  }
  ::-webkit-scrollbar-thumb:hover {
    height: 50px;
    background-color: #878987;
    -webkit-border-radius: 6px;
  }
  .ant-input[disabled]{
    color:#2d3748
  }
  .ant-select-disabled.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    color:#2d3748
  }
  .ant-picker-input > input[disabled] {
    color:#2d3748
  }
  .ant-carousel .slick-dots li button {
    background: gray;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: gray;
  }
  `