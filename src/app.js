import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './components/layout'
import Content from './components/content'
import Sider from './components/sider'
import Header from './components/sider'
import Footer from './components/footer'
import Toast from './components/toast'
import plugin from './components/plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-content', Content)
Vue.component('g-sider', Sider)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created() {
        this.$toast(
            '王雷', {enableHtml: true}
        )
    },
    methods: {
        showToast() {
        }
    }
})

