import Toast from "./toast";

let CurrentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (text, props,location=document.body) {
            if (CurrentToast) {CurrentToast.disappear()}
            CurrentToast = createToast(Vue, text, props,location)
        }
    }
}


function createToast(Vue, text, props,location) {
    //动态创建toast实例
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData: props})
    toast.$slots.default = text
    toast.$mount()
    location.appendChild(toast.$el)
    console.log(toast.$el);
    return toast
}
