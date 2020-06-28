<template>
	<div class="tabs">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'WheelsTabHeader',
		props:{
			selected:{
				type:String,
				required:true
			},
			direction:{
				type:String,
				default:'horizontal',
				validator(value) {
					return ['horizontal', 'vertical'].indexOf(value) >= 0
				}
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		created() {}
	}
</script>
<style lang="scss" scoped>
	.tabs {

		}
</style>