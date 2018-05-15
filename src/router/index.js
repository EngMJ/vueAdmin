import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '全程供应链', icon: 'menu' },
    children: [
      {
        path: 'supplyChain',
        name: 'Table',
        component: () => import('@/views/supplyChain/index'),
        meta: { title: '全程供应链', icon: 'table' }
      },
      {
        path: 'import',
        name: 'import',
        component: () => import('@/views/import/index'),
        meta: { title: '进口业务', icon: 'table' }
      },
      {
        path: 'export',
        name: 'export',
        component: () => import('@/views/export/index'),
        meta: { title: '出口业务', icon: 'table' }
      },
      {
        path: 'agency',
        name: 'agency',
        component: () => import('@/views/agency/index'),
        meta: { title: '代采业务', icon: 'table' }
      }
    ]
  },

  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index'),
        meta: { title: '主页', icon: 'home' }
      }
    ]
  },
  {
    path: '/flow',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'flow',
        component: () => import('@/views/flow/index'),
        meta: { title: '整体流程', icon: 'flow' }
      }
    ]
  },
  {
    path: '/orderSearch',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/orderSearch/index'),
        meta: { title: '订单查询', icon: 'search' }
      }
    ]
  },
  {
    path: '/orderPay',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'orderFrom',
        component: () => import('@/views/orderPay/index'),
        meta: { title: '订单下单', icon: 'orderFrom' }
      }
    ]
  },
  {
    path: '/inventorySearch',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'repertorySearch',
        component: () => import('@/views/inventorySearch/index'),
        meta: { title: '库存查询', icon: 'repertory' }
      }
    ]
  },
  {
    path: '/logistics',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'logistics',
        component: () => import('@/views/logistics/index'),
        meta: { title: '物流派单', icon: 'logistics' }
      }
    ]
  },
  {
    path: '/pay',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'payRequest',
        component: () => import('@/views/pay/index'),
        meta: { title: '付款申请', icon: 'pay' }
      }
    ]
  },
  {
    path: '/setiing',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'setting',
        component: () => import('@/views/setiing/index'),
        meta: { title: '设置管理', icon: 'setting' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

