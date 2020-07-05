<template>
	<div>
		<h2>预览</h2>
		<g-tabs :selected="selected">
			<g-tabs-head>
				<g-tabs-item name="1">title1</g-tabs-item>
				<g-tabs-item name="2">title2</g-tabs-item>
			</g-tabs-head>
			<g-tabs-body>
				<g-tabs-pane name="1">content 1</g-tabs-pane>
				<g-tabs-pane name="2">content 2</g-tabs-pane>
			</g-tabs-body>
		</g-tabs>
		<h2>代码</h2>
		<pre><code>{{content}}</code></pre>
	</div>
</template>
<script>
	import Tabs from '../../../src/tabs'
	import TabsHead from '../../../src/tabs-head'
	import TabsItem from '../../../src/tabs-item'
	import TabsBody from '../../../src/tabs-body'
	import TabsPane from '../../../src/tabs-pane'
	export default {
		components:{
			'g-tabs':Tabs,
			'g-tabs-item':TabsItem,
			'g-tabs-head':TabsHead,
			'g-tabs-body':TabsBody,
			'g-tabs-pane':TabsPane,
		},
		data() {
			return {
				selected:'2',
				content:`
data:{
    selected:1
  }
<g-tabs selected="1">
  <g-tabs-head>
    <g-tabs-item  name="1">title1</g-tabs-item>
    <g-tabs-item name="2">title2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
      `.trim()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.tabs-item{
		padding:0 1em;
		flex-shrink:0;
		cursor:pointer;
		height:100%;
		display:flex;
		align-items:center;
		&.active{
			color:#fff;
			background:#42b883;
			}
		&.disabled{
			color:#eee;
			cursor:not-allowed;
			}
		}
</style>