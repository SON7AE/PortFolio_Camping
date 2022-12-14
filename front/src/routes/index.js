import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Detail from '~/pages/Detail';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: Detail,
        },
    ],
});
