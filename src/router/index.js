import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import ProductList from '../views/ProductList.vue'
import Product from '../views/Product.vue'
import Appraisal from '../views/Appraisal.vue'
import Qa from '../views/Qa.vue'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '樂收郵幣社'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '關於我們'
      }
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        title: '最新消息'
      }
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList,
      meta: {
        title: '商品列表'
      }
    },
    {
      path: '/productList/:id/:productName',
      name: 'Product',
      component: Product,
      props: true,
      meta: {
        title: '商品內頁'
      }
    },
    {
      path: '/appraisal',
      name: 'Appraisal',
      component: Appraisal,
      meta: {
        title: '鑑定收購'
      }
    },
    {
      path: '/qa',
      name: 'Qa',
      component: Qa,
      meta: {
        title: '常見問題'
      }
    },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})

export default router
