import Button from '../packages/button/index.js'
import Card from '../packages/card/index.js'

const components = [
    Button,
    Card
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    install
}

