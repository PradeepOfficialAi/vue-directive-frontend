import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('pradeep', {
    bind(html_element, binding) {
        html_element.style.color = binding.value
        console.log("Hey Your Shit what doing", html_element, binding.modifiers);
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')