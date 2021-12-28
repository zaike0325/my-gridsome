const c1 = () => import(/* webpackChunkName: "page--src-pages-post-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "D:\\myproject\\my-gridsome\\src\\templates\\MyPage.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\myproject\\my-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/post/",
    component: c1
  },
  {
    path: "/my-page/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
