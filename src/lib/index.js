import Tips from '../components/stepsTips'

const VueIntroduction = {
  install (Vue, options) {
    Vue.component(Tips.name, Tips)
  }
}

export default VueIntroduction

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueIntroduction)