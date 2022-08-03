import Vue from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import AppComponent from './app.component';

import './styles/sweet-alert2.min.css';
import './components';
import './plugins';

import {filters} from './filters';

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    filters,
    render: h => h(AppComponent)
}).$mount('#app');
