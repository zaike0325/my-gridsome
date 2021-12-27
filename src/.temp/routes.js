const c1 = () => import(/* webpackChunkName: "page--src-pages-user-id-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\user\\[id].vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-post1-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\post1.vue")
const c3 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "D:\\myproject\\my-gridsome\\src\\templates\\MyPage.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-foo-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\Foo.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\About.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\myproject\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    name: "__user_id",
    path: "/user/:id",
    component: c1,
    meta: {
      dataPath: "/user/_id.json",
      dynamic: true
    }
  },
  {
    path: "/post1/",
    component: c2
  },
  {
    path: "/my-page/",
    component: c3
  },
  {
    path: "/foo/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
