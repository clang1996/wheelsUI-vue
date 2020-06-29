<template>
	<div :class="classes" :data-name="name" @click="xxx" class="tabs-item">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'WheelsTabsItem',
		inject:['eventBus'],
		data() {
			return {
				active:{
					type:Boolean,
					default:false
				}
			}
		},
		props:{
			disabled:{
				type:Boolean,
				default:false
			},
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
				this.eventBus.$emit('update:selected', this.name, this)
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
		}
</style>