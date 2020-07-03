<template>
	<div>
		<h4>预览</h4>
		<div class="toast">
			<g-button @click="toast1">上方弹出</g-button>
			<g-button @click="toast2">下方弹出</g-button>
			<g-button @click="toast3">中间弹出</g-button>
			<h4>代码</h4>
			<pre><code>{{content}}</code></pre>
		</div>
	</div>
</template>
<script>
	import Toast from '../../../src/toast'
	import Button from '../../../src/button'
	import plugin from '../../../src/plugin';
	import Vue from 'vue';
	Vue.use(plugin)
	export default {
		components:{
			'g-toast':Toast,
			'g-button':Button,
		},
		methods:{
			toast1() {
				this.$toast('我是提示', {
					position:'top',
				})
			},
			toast2() {
				this.$toast('我是提示', {
					position:'bottom',
				})
			},
			toast3() {
				this.$toast('我是提示', {
					position:'middle',
				})
			}
		},
		data() {
			return {
				content:`
<g-button @click="toast1">上方弹出</g-button>
<g-button @click="toast2">下方弹出</g-button>
<g-button @click="toast3">中间弹出</g-button>
				`.trim()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.toast{
		z-index:30;
		}
</style>