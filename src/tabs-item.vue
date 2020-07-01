<template>
	<div :class="classes" :data-name="name" @click="onClick" class="tabs-item">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'WheelsTabsItem',
		inject:['eventBus'],
		data() {
			return {
				active:false
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
				return {
					active:this.active,
					disabled:this.disabled
				}
			}
		},
		created() {
			if (this.eventBus) {
				this.eventBus.$on('update:selected',
					(name) => {
						this.active = name === this.name;
					})
			}
		},
		methods:{
			onClick() {
				if (this.disabled) {
					return
				}
				this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
				this.$emit('click', this)
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
		&.disabled{
			color:#eee;
			cursor:not-allowed;
			}
		}
</style>