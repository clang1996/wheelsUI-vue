<template>
	<div class="tabs-head">
		<slot></slot>
		<div class="line" ref="line"></div>

	</div>
</template>
<script>
	export default {
		name:'WheelsTabsHead',
		inject:['eventBus'],
		mounted() {
			this.eventBus.$on('update:selected', (item, vm) => {
				let {width, height, left, top} = vm.$el.getBoundingClientRect()
				console.log(width, height, left, top);
				this.$refs.line.style.width = `${width}px`
				this.$refs.line.style.left = `${left}px`
			})
		}
	}
</script>
<style lang="scss" scoped>
	$tab-height:40px;
	.tabs-head{
		display:flex;
		height:$tab-height;
		justify-content:flex-start;
		position:relative;
		border-bottom:1px solid #ddd;
		> .line{
			position:absolute;
			bottom:0;
			border-bottom:5px solid #444444;
			transition:all 400ms;
			}
		> .actions-wrapper{
			display:flex;
			align-items:center;
			justify-content:center;
			padding:0 1em;
			margin-left:auto;
			}
		}
</style>