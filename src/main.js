// import Vue from "vue";
import { createApp } from 'vue';
import App from './App';
import Router from './routes/index';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
    components,
    directives,
});

createApp(App).use(Router).use(vuetify).mount('#app');
