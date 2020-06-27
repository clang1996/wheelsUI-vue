<template>
	<div class='wrapper' :class='toastClasses'>
		<div class='toast' ref='toast'>
			<div class='message'>
				<slot v-if='!enableHtml'></slot>
				<div v-else v-html='$slots.default[0]'></div>
			</div>
			<div class='line' ref='line'></div>
			<span @click="onClickClose" class='close' v-if="closeButton">{{closeButton.text}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name:'Wheels-toast',
		props:{
			autoClose:{
				type:Boolean,
				default:true
			},
			autoCloseDelay:{
				type:Number,
				default:50
			},
			closeButton:{
				type:Object,
				default() {    //default是对象的时候必须写成函数，把对象return出来
					return {
						text:'关闭',
						callback:undefined
					}
				}
			},
			enableHtml:{
				type:Boolean,
				default:false
			},
			position:{
				type:String,
				default:'top',
				validator(value) {
					return ['top', 'bottom', 'middle'].indexOf(value) >= 0
				}
			}
		},
		computed:{
			toastClasses() {
				return {[`position-${this.position}`]:true}
			}
		},
		mounted() {
			this.updateStyle()
			this.execAutoClose()
		},
		methods:{
			execAutoClose() {
				if (this.autoClose) {
					setTimeout(() => {
						this.close()
					}, this.autoCloseDelay * 1000)
				}
			},
			updateStyle() {
				this.$nextTick(() => {
					this.$refs.line.style.height =
						`${this.$refs.toast.getBoundingClientRect().height}px`
				})
			},
			close() {
				this.$el.remove()
				this.$emit('beforeClose')
				this.$destroy()  //destroy不会清除元素
			},
			onClickClose() {
				this.close()
				if (this.closeButton && typeof this.closeButton.callback === 'function') {
					this.closeButton.callback(this)
				}
			},
			log() {
				console.log('王雷');
			}
		}
	}
</script>
<style lang="scss" scoped>
	$font-size: 14px;
	$toast-min-height: 40px;
	$toast-bg: rgba(0, 0, 0, .75);
	@keyframes slide-up {
		0% {opacity: 0;transform: translateY(100%)}
		100% {opacity: 1;transform: translateY(0%)}
		}
	@keyframes slide-down {
		0% {opacity: 0;transform: translateY(-100%)}
		100% {opacity: 1;transform: translateY(0%)}
		}
	@keyframes fade-in {
		0% {opacity: 0}
		100% {opacity: 1}
		}
	.wrapper {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		&.position-top {
			top: 0;
			.toast {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
				animation: slide-down .8s;
				}
			}
		&.position-middle {
			top: 50%;
			transform: translateX(-50%) translateY(-50%);
			.toast {animation: fade-in .8s;}
			}
		&.position-bottom {
			bottom: 0;
			.toast {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				animation: slide-up .8s;
				}
			}
		}
	.toast {
		display: flex;
		align-items: center;
		font-size: $font-size;
		min-height: $toast-min-height;
		background: $toast-bg;
		color: #fff;
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
		padding: 0 16px;
		.close {
			padding-left: 16px;
			cursor: pointer;
			flex-shrink: 0;
			}
		.line {
			border: 1px solid #666;
			height: 100%;
			margin-left: 16px;
			}
		}
</style>