import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _576d9af6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _8778c418 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _6d6d9994 = () => import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */).then(m => m.default || m)
const _d450528c = () => import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */).then(m => m.default || m)
const _77466177 = () => import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */).then(m => m.default || m)
const _15824788 = () => import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */).then(m => m.default || m)
const _4e397261 = () => import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */).then(m => m.default || m)
const _1b1304a5 = () => import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _576d9af6,
			name: "index"
		},
		{
			path: "/about",
			component: _8778c418,
			name: "about"
		},
		{
			path: "/admin",
			component: _6d6d9994,
			name: "admin"
		},
		{
			path: "/posts",
			component: _d450528c,
			name: "posts"
		},
		{
			path: "/admin/auth",
			component: _77466177,
			name: "admin-auth"
		},
		{
			path: "/admin/new-post",
			component: _15824788,
			name: "admin-new-post"
		},
		{
			path: "/admin/:postId",
			component: _4e397261,
			name: "admin-postId"
		},
		{
			path: "/posts/:id",
			component: _1b1304a5,
			name: "posts-id"
		}
    ],
    
    
    fallback: false
  })
}
