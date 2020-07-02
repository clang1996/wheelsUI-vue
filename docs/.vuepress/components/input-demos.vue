<template>
	<div>
		<div class="wrapper">
			<h4>预览</h4>
			<label>
				<g-input value="Wheels" />
				<g-input value="Wheels" disabled />
				<g-input value="Wheels" readonly />
			</label>
		</div>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
		<h2>双向绑定</h2>
		<h4>预览</h4>
		<label>
			<g-input v-model="value" />
		</label>
		<div>
			value : {{value}}
		</div>
		<h4>代码</h4>
		<pre><code>{{content2}}</code></pre>
	</div>
</template>
<script>
	import Input from '../../../src/input'
	export default {
		components:{
			'g-input':Input
		},
		data() {
			return {
				value:'',
				content:`<div class="wrapper"><label>
  <g-input value="Wheels" />
  <g-input value="Wheels" disabled />
  <g-input value="Wheels" readonly />
</label>`.trim(),
				content2:`<label>
  <g-input v-model="value"/>
</label>
<div>
  value : {{value}}
</div>
				`.trim()
			}
		}
	}
</script>
