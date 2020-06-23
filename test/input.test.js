import {describe} from 'mocha';
import Vue from 'vue'
import Input from '../src/input'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在', () => {
        expect(Input).to.exist
    })

    describe('prop', () => {
            const Constructor = Vue.extend(Input)
            let vm
            afterEach(() => {
                vm.$destroy()

            })
            it('接收 value', () => {
                vm = new Constructor({
                    propsData: {
                        value: '123'
                    }
                }).$mount()
                const inputElement = vm.$el.querySelector('input')
                expect(inputElement.value).to.equal('123')
            })

            it('接收 disabled', () => {
                vm = new Constructor({
                    propsData: {
                        disabled: true
                    }
                }).$mount()
                const inputElement = vm.$el.querySelector('input')
                expect(inputElement.disabled).to.equal(true)
            })
            it('接收 readonly', () => {
                vm = new Constructor({
                    propsData: {
                        readonly: true
                    }
                }).$mount()
                const inputElement = vm.$el.querySelector('input')
                expect(inputElement.readOnly).to.equal(true)
            })
            it('接收 error', () => {
                vm = new Constructor({
                    propsData: {
                        error: 'fuck'
                    }
                }).$mount()
                const useElement = vm.$el.querySelector('use')
                expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
                const errorMessage = vm.$el.querySelector('.error-message')
                expect(errorMessage.innerHTML).to.eq('fuck')
            })
        }
    )

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })
    })
})
