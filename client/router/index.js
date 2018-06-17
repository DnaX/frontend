import Vue from 'vue'
import Router from 'vue-router'
import menuModule from 'vuex-store/modules/menu'

Vue.use(Router)

export default new Router({
  mode: 'hash', // TODO: replace/remove when moving to production
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '*',
      redirect: '/'
    }
  ]
})

function generateRouteForComponents (componentsList, secondIteration = false) {
  const routes = []

  for (const menuItem of componentsList) {
    if (menuItem.path) {
      routes.push(menuItem)
    }

    /* if (!secondIteration && item.children) {
      routes.push(...generateRouteForComponents(item.children, true))
    } */
  }

  return routes
}

function generateRoutesFromMenu (menu = []) {
  return menu
    .map(category => generateRouteForComponents(category.components))
    .reduce((acc, val) => acc.concat(val), [])
}
