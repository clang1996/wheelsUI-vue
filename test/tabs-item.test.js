import Vue from 'vue';
import {describe} from 'mocha';
import TabsItem from '../src/tabs-item';
const expect = chai.expect;
Vue.config.productionTip = false
Vue.config.devtools = false
describe('TabsItem', () => {
		it('存在.', () => {
			expect(TabsItem).to.exist
		})
		it('子组件接受name 属性', () => {
			const Constructor = Vue.extend(TabsItem)
			const vm = new Constructor({
				propsData:{
					name:'xxx'
				}
			}).$mount()
			expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
		})
		// it('子组件接受disabled 属性', () => {
		// 	const Constructor = Vue.extend(TabsItem)
		// 	const vm = new Constructor({
		// 		propsData:{
		// 			disabled:true
		// 		}
		// 	}).$mount()
		// 	expect(vm.$el.classList.contains('disabled')).to.be.true
		// 	const callback = sinon.fake();
		// 	vm.$on('click', callback)
		// 	vm.$el.click()
		// 	expect(callback).to.have.not.been.called
		// })
	}
)