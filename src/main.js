/* global $ */

/* 引入bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
/* 引入metismenu插件 */
import 'metismenu/dist/metisMenu.min.css';
import 'metismenu/dist/metisMenu.min';

import Vue from 'vue';
import App from './App';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
