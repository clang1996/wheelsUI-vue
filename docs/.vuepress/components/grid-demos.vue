<template>
	<div>
		<h2>24格网格</h2>
		<h4>预览</h4>
		<div class="component-wrapper">
			<div class="component-wrapper-demo">
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
			<div class="code-content" style="height: 0;">
				<div class="code-content-height">
					<pre><code class="html">{{content}}</code></pre>
				</div>
			</div>
			<div @click="showCode(0)" class="lock-code" ref="xxx">
				<g-icon :name="isShow[0] === false ? 'down' : 'up'" class="icon-down"></g-icon>
				<span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
			</div>
		</div>
		<h2>设置gutter</h2>
		<h4>预览</h4>
		<div class="component-wrapper">
			<div class="component-wrapper-demo">
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
			<div class="code-content" style="height: 0;">
				<div class="code-content-height">
					<pre><code class="html">{{content2}}</code></pre>
				</div>
			</div>
			<div @click="showCode(1)" class="lock-code" ref="xxx">
				<g-icon :name="isShow[1] === false ? 'down' : 'up'" class="icon-down"></g-icon>
				<span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
			</div>
		</div>
		<h2>设置空隙</h2>
		<h4>预览</h4>
		<div class="component-wrapper">
			<div class="component-wrapper-demo">
				<g-row class="demoRow" gutter="10">
					<g-col span="8">
						<div class="demoCol">8</div>
					</g-col>
					<g-col offset="8" span="8">
						<div class="demoCol">8</div>
					</g-col>
				</g-row>
				<g-row class="demoRow" gutter="10">
					<g-col offset="6" span="6">
						<div class="demoCol">6</div>
					</g-col>
					<g-col offset="6" span="6">
						<div class="demoCol">6</div>
					</g-col>
				</g-row>
				<g-row class="demoRow" gutter="10">
					<g-col span="4">
						<div class="demoCol">4</div>
					</g-col>
					<g-col offset="4" span="4">
						<div class="demoCol">4</div>
					</g-col>
					<g-col offset="8" span="4">
						<div class="demoCol">4</div>
					</g-col>
				</g-row>
				<g-row class="demoRow" gutter="10">
					<g-col span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col offset="2" span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col offset="2" span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col offset="2" span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col span="2">
						<div class="demoCol">2</div>
					</g-col>
					<g-col offset="2" span="2">
						<div class="demoCol">2</div>
					</g-col>
				</g-row>
			</div>
			<h4>代码</h4>
			<div class="code-content" style="height: 0;">
				<div class="code-content-height">
					<pre><code>{{content3}}</code></pre>
				</div>
			</div>
			<div @click="showCode(2)" class="lock-code" ref="xxx">
				<g-icon :name="isShow[2] === false ? 'down' : 'up'" class="icon-down"></g-icon>
				<span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
			</div>
		</div>
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
	import Icon from '../../../src/icon'
	import mixin from '../mixin'
	export default {
		mixins:[mixin],
		components:{
			'g-icon':Icon,
			'g-col':Col,
			'g-row':Row,
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