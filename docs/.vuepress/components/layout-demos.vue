<template>
	<div>
		<h2>布局</h2>
		<h4>预览</h4>
		<div>
			<g-layout style="color: white; margin-bottom:50px;">
				<g-footer style="height: 50px; background:#42b883;">
					header
				</g-footer>
				<g-content style="height: 100px; background: #42d999;">
					content
				</g-content>
				<g-footer style="height: 50px; background:#42b883;">
					footer
				</g-footer>
			</g-layout>
		</div>
		<h4>代码</h4>
		<pre><code>{{content}}</code></pre>
		<h2>布局</h2>
		<h4>预览</h4>
		<div>
			<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
				<g-header style="height: 50px; background:#42b883;">
					header
				</g-header>
				<g-layout>
					<g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
						sider
					</g-sider>
					<g-content style="height: 100px; background:#42d999;">
						content
					</g-content>
				</g-layout>
				<g-footer style="height: 50px; background:#42b883;">
					footer
				</g-footer>
			</g-layout>
		</div>
		<pre><code>{{content3}}</code></pre>
		<h2>布局</h2>
		<h4>预览</h4>
		<div>
			<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
				<g-sider style=" background:#ddd; width:200px; color: black;">
					sider
				</g-sider>
				<g-layout>
					<g-header style="height: 50px; background:#42b883;">
						header
					</g-header>
					<g-content style="height: 100px; background:#42d999;">
						content
					</g-content>
					<g-footer style="height: 50px; background:#42b883;">
						footer
					</g-footer>
				</g-layout>
			</g-layout>
		</div>

		<h4>代码</h4>
		<pre><code>{{content2}}</code></pre>
	</div>
</template>
<script>
	import Layout from '../../../src/layout'
	import Content from '../../../src/content'
	import Sider from '../../../src/sider'
	import Header from '../../../src/header'
	import Footer from '../../../src/footer'
	export default {
		components:{
			'g-layout':Layout,
			'g-content':Content,
			'g-sider':Sider,
			'g-header':Header,
			'g-footer':Footer,
		},
		data() {
			return {
				content:`<div>
 <g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:#42b883;">
     header
  </g-header>
  <g-content style="height: 100px; background:#42d999;">
     content
  </g-content>
  <g-footer style="height: 50px; background:#42b883;">
     footer
  </g-footer>
</g-layout>
</div>`.trim(),
				content3:`<div>
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:#42b883;">
    header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-content style="height: 100px; background:#42d999;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:#42b883;">
    footer
  </g-footer>
</g-layout>
</div>`.trim(),
				content2:`<div>
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:#42b883;">
      header
    </g-header>
    <g-content style="height: 100px; background:#42d999;">
      content
    </g-content>
    <g-footer style="height: 50px; background:#42b883;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
</div>`.trim(),
			}
		}
	}
</script>
