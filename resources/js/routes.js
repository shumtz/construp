const Home = () => import('./components/Home.vue');
const Create = () => import('./components/Create.vue');
const Update = () => import('./components/Update.vue');

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'create',
        path: '/create',
        component: Create
    },
    {
        name: 'update',
        path: '/edit/:id',
        component: Update
    },
]
