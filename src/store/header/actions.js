export default {
  openMenu({commit}) {
    commit('changeMstatue', true)
  },
  closeMenu({commit}) {
    commit('changeMstatue', false)
  }
}
