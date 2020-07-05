<template>
	<div>
		<h4>预览</h4>
		<g-button>默认按钮</g-button>
		<g-button icon="settings">默认按钮</g-button>
		<g-button :loading="true">默认按钮</g-button>
		<g-button disabled>默认按钮</g-button>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
	</div>
</template>
<script>
	import Button from '../../../src/button'
	export default {
		components:{
			'g-button':Button
		},
		data() {
			return {
				content:`<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>`.trim()
			}
		}
	}
</script>