<template>
	<div class="collapse-items">
		<div class="title" @click="toggle">{{message}}</div>
		<div class="content" v-if="open">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name:'WheelsCollapseItems',
		inject:['eventBus'],
		props:{
			message:{type:String, required:true},
			name:{type:String, required:true}
		},
		data() {return {open:false}},
		methods:{
			toggle() {
				if (this.open) {
					this.open = false
				} else {
					this.eventBus && this.eventBus.$emit('update:selected', this.name)
				}
			},
			close() {this.open = false},
			show() {this.open = true}
		},
		mounted() {
			this.eventBus && this.eventBus.$on('update:selected', (name) => {
				if (name === this.name) {
					this.show()
				} else { this.close()}
			})
		}
	}
</script>
<style lang="scss" scoped>
	.collapse-items{
		> .title{
			min-height:32px;
			display:flex;
			align-items:center;
			padding:0 8px;
			border:1px solid gray;
			margin-top:-1px;
			margin-left:-1px;
			margin-right:-1px;
			}
		&:first-child{
			> .title{
				border-top-left-radius:4px;
				border-top-right-radius:4px;
				}
			}
		&:last-child{
			> .title:last-child{
				border-bottom-left-radius:4px;
				border-bottom-right-radius:4px;
				}
			}
		> .content{
			padding:8px;
			}
		}
</style>