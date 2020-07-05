<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>
<script>
	import Vue from 'vue'
	export default {
		name:'WheelsCollapse',
		data() {
			return {
				eventBus:new Vue()
			}
		},
		provide() {
			return {eventBus:this.eventBus}
		},
		props:{
			selected:{
				type:String
			}
		},
		mounted() {
			this.eventBus.$emit('update:selected', this.selected)
			this.eventBus.$on('update:selected', (name) => {
				this.$emit('update:selected', name)
			})
		}
	}
</script>
<style lang="scss" scoped>
	.collapse{
		border:1px solid gray;
		border-radius:4px;
		}
</style>