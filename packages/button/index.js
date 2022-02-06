import BenButton from './src/button.vue'

//完整引入不会执行单个组件的install,  vue.use单个组件选项对象时才会
/* istanbul ignore next */
BenButton.install = function(Vue){
    Vue.component(BenButton.name,BenButton)
}

export default BenButton