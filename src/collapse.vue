<template>
	<div class="collapse">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name:'WheelsCollapse',
	}
</script>
<style lang="scss" scoped>
	.collapse{
		border:1px solid gray;
		border-radius:4px;
		}
</style>