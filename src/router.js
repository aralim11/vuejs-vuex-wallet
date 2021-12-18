import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from './components/Dash.vue';
import Income from './components/income/Income.vue';
import Expense from './components/expense/Expense.vue';
import Owe from './components/owe/owe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/dash' },
        { path: '/dash', component: DashBoard },
        { path: '/income', component: Income },
        { path: '/expense', component: Expense },
        { path: '/owe', component: Owe },
    ]
});

export default router;