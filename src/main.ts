import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '/@/utils/directive.ts';
import { i18n } from '/@/i18n/index.ts';
import { globalComponentSize } from '/@/utils/componentSize.ts';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '/@/theme/index.scss';
import mitt from 'mitt';
import screenShort from 'vue-web-screen-shot';
import VueGridLayout from 'vue-grid-layout';

const app = createApp(App);
app
	.use(router)
	.use(store, key)
	.use(ElementPlus, { i18n: i18n.global.t, size: globalComponentSize })
	.use(i18n)
	.use(screenShort, { enableWebRtc: false })
	.use(VueGridLayout)
	.mount('#app');

app.config.globalProperties.mittBus = mitt();

directive(app);
