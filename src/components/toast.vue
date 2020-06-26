<template>
	<div class='toast'>
		<slot></slot>
	</div>
</template>

<script>
	
    export default {
        name: 'Wheels-toast',
    }
</script>

<style lang="scss" scoped>
	$font-size: 14px;
	$toast-height: 40px;
	$toast-bg: rgba(0, 0, 0, .75);
	
	.toast {
		display: flex;
		align-items: center;
		font-size: $font-size;
		height: $toast-height;
		background: $toast-bg;
		color: #fff;
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
		padding: 16px;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		}
</style>