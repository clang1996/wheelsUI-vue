<template>
	<div class="tabs-pane" :class="classes" v-if="active">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'WheelsTabsPane',
		inject:['eventBus'],
		data() {
			return {
				active:{
					type:Boolean,
					default:true
				}
			}
		},
		props:{
			name:{
				type:String,
				required:true
			}
		},
		computed:{
			classes() {
				return {active:this.active}
			}
		},
		created() {
			this.eventBus.$on('update:selected',
				(name) => {
					this.active = name === this.name;
				})
		},
		methods:{
			xxx() {
				this.eventBus.$emit('update:selected', this.name)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.tabs-pane{
		padding:1em;
		&.active{
			/*background:#42b883;*/
			}
		}
</style>