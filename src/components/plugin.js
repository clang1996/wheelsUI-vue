import Toast from './toast'

let currentToast
const createToast = ({Vue, message, propsData}) => {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
export default {
    install(Vue, options) {  //这里vue是用户自己配的vue
        Vue.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({Vue, message, propsData: toastOptions})
        }
    }
}
