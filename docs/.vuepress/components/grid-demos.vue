<template>
	<div>
		<h2>24格网格</h2>
		<h4>预览</h4>
		<div>
			<g-row class="demoRow">
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
			</g-row>
			<g-row class="demoRow">
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
			</g-row>
			<g-row class="demoRow">
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
			</g-row>
			<g-row class="demoRow">
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
			</g-row>
		</div>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
		<h2>设置gutter</h2>
		<h4>预览</h4>
		<div>
			<g-row class="demoRow" gutter="10">
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
			</g-row>
			<g-row class="demoRow" gutter="10">
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6">
					<div class="demoCol">6</div>
				</g-col>
			</g-row>
		</div>
		<h4>代码</h4>
		<pre><code>{{content2}}</code></pre>
		<h2>设置空隙</h2>
		<h4>预览</h4>
		<div>
			<g-row class="demoRow" gutter="10">
				<g-col span="8">
					<div class="demoCol">8</div>
				</g-col>
				<g-col span="8" offset="8">
					<div class="demoCol">8</div>
				</g-col>
			</g-row>
			<g-row class="demoRow" gutter="10">
				<g-col span="6" offset="6">
					<div class="demoCol">6</div>
				</g-col>
				<g-col span="6" offset="6">
					<div class="demoCol">6</div>
				</g-col>
			</g-row>
			<g-row class="demoRow" gutter="10">
				<g-col span="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4" offset="4">
					<div class="demoCol">4</div>
				</g-col>
				<g-col span="4" offset="8">
					<div class="demoCol">4</div>
				</g-col>
			</g-row>
			<g-row class="demoRow" gutter="10">
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2" offset="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2" offset="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2" offset="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2">
					<div class="demoCol">2</div>
				</g-col>
				<g-col span="2" offset="2">
					<div class="demoCol">2</div>
				</g-col>
			</g-row>
		</div>
		<h4>代码</h4>
		<pre><code>{{content3}}</code></pre>
	</div>
</template>
<style lang="scss" scoped>
	*{
		box-sizing:border-box;
		}
	.demoRow{
		margin:8px;
		}
	.demoCol{
		background:#42b883;
		display:flex;
		align-items:center;
		justify-content:center;
		border:1px solid grey;
		height:50px;
		}
</style>
<script>
	import Col from '../../../src/col'
	import Row from '../../../src/row'
	export default {
		components:{
			'g-col':Col,
			'g-row':Row
		},
		data() {
			return {
				content:`
				<div>
  <g-row class="demoRow">
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
    <g-col span="8">
      <div class="demoCol">8</div>
    </g-col>
  </g-row>

  <g-row class="demoRow">
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
    <g-col span="6">
      <div class="demoCol">6</div>
    </g-col>
  </g-row>

  <g-row class="demoRow">
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
    <g-col span="4">
      <div class="demoCol">4</div>
    </g-col>
  </g-row>

  <g-row class="demoRow">
   <g-col span="2">
     <div class="demoCol">2</div>
   </g-col>
   <g-col span="2">
     <div class="demoCol">2</div>
   </g-col>
   <g-col span="2">
     <div class="demoCol">2</div>
   </g-col>
   <g-col span="2">
     <div class="demoCol">2</div>
   </g-col>
   <g-col span="2">
     <div class="demoCol">2</div>
   </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    <g-col span="2">
      <div class="demoCol">2</div>
    </g-col>
    </g-row>
</div>`.trim(),
				content2:`
					<g-row class="demoRow" gutter="10">
   <g-col span="8">
     <div class="demoCol">8</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">8</div>
   </g-col>
   <g-col span="8">
     <div class="demoCol">8</div>
   </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
   <g-col span="6">
     <div class="demoCol">6</div>
   </g-col>
   <g-col span="6">
     <div class="demoCol">6</div>
   </g-col>
   <g-col span="6">
     <div class="demoCol">6</div>
   </g-col>
   <g-col span="6">
     <div class="demoCol">6</div>
   </g-col>
</g-row>`.trim(),
				content3:`
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>`.trim()
			}
		}
	}
</script>