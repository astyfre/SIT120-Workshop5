import { createRouter, createWebHistory} from 'vue-router'

import MyHome from './views/MyHome.vue';
import MyCart from './views/MyCart.vue';
import MyCheckout from './views/MyCheckout.vue';
import MyProducts from './views/MyProducts.vue';

const routes = [
    {path: '/', name: 'home', component: MyHome},
    {path: '/products', name: 'products', component: MyProducts},
    {path: '/cart', name: 'cart', component: MyCart},
    {path: '/checkout', name: 'checkout', component: MyCheckout},
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router;