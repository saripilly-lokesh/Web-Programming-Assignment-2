import {createRouter, createWebHistory} from 'vue-router'
import EmployeeList from '../components/EmployeeList.vue'
import PostComp from '../components/PostComp.vue'
import UpdateList from '../components/UpdateList.vue'
import DeleteList from '../components/DeleteList.vue'
import HomePage  from '../components/HomePage.vue'

const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/employee-create',
        component:PostComp
    },
    {
        path:'/employee-read',
        component:EmployeeList
    },
    {
        path:'/employee-update',
        component:UpdateList
    },
    {
        path:'/employee-delete',
        component:DeleteList
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;