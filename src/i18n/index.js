import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './lang'
Vue.use(VueI18n)

const locale = localStorage.getItem('locale') || 'cn'

export default new VueI18n({
  locale,
  messages
})
