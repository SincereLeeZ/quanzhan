// 引入
import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue'
import Rank from '@/components/Rank.vue'
import Entry from '@/components/Entry.vue'
import Inquire from '@/components/Inquire.vue'

// 创建路由器
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[//路由规则
        {
            path:'/首页',
            component:Home
        },
        {
            path:'/评估分排行',
            component:Rank
        },
        {
            path:'/参与评估',
            component:Entry
        },
        {
            path:'/评估报告查询',
            component:Inquire
        }
    ]
})
//暴露
export default router
