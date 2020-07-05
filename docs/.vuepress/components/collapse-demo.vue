<template>
	<div>
		<div>
			<h3>展示单个内容</h3>
			<h4>预览</h4>
			<hr>
			<g-collapse :selected.sync="selected1" single>
				<g-collapse-items message="标题" name="1">内容 默认选中</g-collapse-items>
				<g-collapse-items message="标题" name="2">内容</g-collapse-items>
				<g-collapse-items message="标题" name="3">内容</g-collapse-items>
			</g-collapse>
			<h4>代码</h4>
			<pre><code>{{content1}}</code></pre>
		</div>
		<hr>
		<div>
			<h2>展示多个内容</h2>
			<h4>预览</h4>
			<g-collapse :selected.sync="selected2">
				<g-collapse-items message="标题" name="1">内容 默认选中</g-collapse-items>
				<g-collapse-items message="标题" name="2">内容</g-collapse-items>
				<g-collapse-items message="标题" name="3">内容</g-collapse-items>
			</g-collapse>
			<h4>代码</h4>
			<pre><code>{{content2}}</code></pre>
		</div>
	</div>
</template>
<script>
	import Collapse from '../../../src/collapse'
	import CollapseItems from '../../../src/collapse-items'
	export default {
		components:{
			'g-collapse':Collapse,
			'g-collapse-items':CollapseItems
		},
		data() {
			return {
				selected1:['1'],
				selected2:['1'],
				content1:`<g-collapse :selected.sync="selected1" single>
  <g-collapse-items message="标题" name="1">内容 默认选中</g-collapse-items>
  <g-collapse-items message="标题" name="2">内容</g-collapse-items>
  <g-collapse-items message="标题" name="3">内容</g-collapse-items>
</g-collapse>`.trim(),
				content2:`<g-collapse :selected.sync="selected1"  >
  <g-collapse-items message="标题" name="1">内容 默认选中</g-collapse-items>
  <g-collapse-items message="标题" name="2">内容</g-collapse-items>
  <g-collapse-items message="标题" name="3">内容</g-collapse-items>
</g-collapse>`.trim(),
			}
		}
	}
</script>
<style lang="scss" scoped></style>