import BenCard from './src/card.vue'

BenCard.install = function(Vue){
    Vue.component(BenCard.name,BenCard)
}

export default Card