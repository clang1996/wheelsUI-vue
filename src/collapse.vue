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
			single:{
				type:Boolean,
				default:false
			},
			selected:{
				type:Array
			},
			single:{type:Boolean, default:false}
		},
		mounted() {
			this.eventBus.$emit('update:selected', this.selected)
			this.eventBus.$on('update:addSelected', (name) => {
				let selected2 = JSON.parse(JSON.stringify(this.selected))
				if (this.single) {
					selected2 = [name]
				} else {
					selected2.push(name)
				}
				this.eventBus.$emit('update:selected', selected2)
				this.$emit('update:selected', selected2)
			})
			this.eventBus.$on('update:removeSelected', (name) => {
				let selected2 = JSON.parse(JSON.stringify(this.selected))
				let index = selected2.indexOf(name)
				selected2.splice(index, 1)
				this.eventBus.$emit('update:selected', selected2)
				this.$emit('update:selected', selected2)
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