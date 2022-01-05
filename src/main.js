import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store.js';
import route from './router.js';

import Basecard from './components/ui/BaseCard.vue';
import BaseHead from './components/ui/BaseHead.vue';
import BaseModal from './components/ui/BaseModal.vue';
import BaseProgress from './components/ui/BaseProgressBar.vue';


const app = createApp(App);

app.component('base-card', Basecard);
app.component('base-head', BaseHead);
app.component('base-modal', BaseModal);
app.component('base-progress', BaseProgress);

app.use(store);
app.use(route);

app.mount('#app');