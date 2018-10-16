import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Course from '@/components/Course'
import CourseDetail from '@/components/CourseDetail'
import Help from '@/components/help/Help'
import AboutUs from '@/components/help/AboutUs'
import Feedback from '@/components/help/Feedback'
import UserNote from '@/components/help/UserNote'
import News from '@/components/News'
import Shop from '@/components/Shop'
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
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/course',
            name: 'course',
            component: Course
        },
      {
            path: '/news',
            name: 'news',
            component: News
        },
      {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/course/detail/:id',
            name: 'courseDetail',
            component: CourseDetail
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
