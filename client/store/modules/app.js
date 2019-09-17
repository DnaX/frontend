import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: false
  },
  effect: {
    translate3d: true
  },
  navbar: {
    menuOpened: false
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_NAVBAR_MENU] (state, config) {
    if (config.hasOwnProperty('opened')) {
      state.navbar.menuOpened = config.opened
    } else {
      state.navbar.menuOpened = false
    }
  },

  [types.TOGGLE_SIDEBAR] (state, config) {
    if (config.hasOwnProperty('opened')) {
      state.sidebar.opened = config.opened
    } else {
      state.sidebar.opened = true
    }
  },

  [types.SWITCH_EFFECT] (state, effectItem) {
    for (let name in effectItem) {
      state.effect[name] = effectItem[name]
    }
  }
}

export default {
  state,
  mutations
}
