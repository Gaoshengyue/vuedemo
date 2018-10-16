import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Help from '@/components/help/Help'
import AboutUs from '@/components/help/AboutUs'
import Feedback from '@/components/help/Feedback'
import UserNote from '@/components/help/UserNote'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/help',
            name: 'help',
            component: Help,
            children: [
                {
                    path: 'about-us',
                    name: 'about-us',
                    component: AboutUs
                },
                {
                    path: 'user-note',
                    name: 'user-note',
                    component: UserNote
                },
                {
                    path: 'feedback',
                    name: 'feedback',
                    component: Feedback
                }
            ]
        }
    ],
    mode: 'history'
})
