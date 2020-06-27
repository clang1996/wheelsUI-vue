import Toast from './toast'

export default {
    install(Vue, options) {  //这里vue是用户自己配的vue
        Vue.prototype.$toast = function (message, toastOptions) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: toastOptions
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
