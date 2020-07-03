<template>
	<div>
		<h4>预览</h4>
		<div>
			<g-button @click="toast1">上方弹出</g-button>
			<g-button @click="toast2">下方弹出</g-button>
			<g-button @click="toast3">中间弹出</g-button>
			<h4>代码</h4>
			<pre><code>{{content}}</code></pre>
		</div>
		<div>
			<h2>自定义关闭按钮</h2>
			<h4>预览</h4>
			<div>
				<g-button @click="toast4">上方弹出</g-button>
			</div>
			<h4>代码</h4>
			<pre><code>{{content2}}</code></pre>
		</div>
		<div>
			<h2>支持HTML</h2>
			<h4>预览</h4>
			<div>123</div>
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
			},
			toast4() {
				this.$toast('我是提示', {
					position:'top',
					closeButton:{
						text:'我是关闭',
						callback:() => {console.log('我是回调');}
					}
				})
			},
		},
		data() {
			return {
				content:`
<g-button @click="toast1">上方弹出</g-button>
<g-button @click="toast2">下方弹出</g-button>
<g-button @click="toast3">中间弹出</g-button>
				`.trim(),
				content2:`
<g-button @click="toast4">上方弹出</g-button>
methods:{
  toast4() {
    this.$toast('我是提示', {
      position:'top',
      closeButton:{
        text:'我是关闭',
        callback:()=>{console.log('我是回调')}
    }
  })
}`.trim(),
			}
		}
	}
</script>
