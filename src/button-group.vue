<template>
	<div class="g-button-group">
		<slot />
	</div>
</template>

<script>
export default {
    mounted() {
        for (let node of this.$el.children) {
            let name = node.nodeName.toLocaleLowerCase()
            if (name !== 'button') {
                console.warn(`g-button-group 的子元素应该全部是button, 而这里写的是${name}`)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
	$button-height:32px;
	$font-size:14px;
	$button-bg:white;
	$button-active-bg:#eeeeee;
	$border-radius:4px;
	$color:#333333;
	$border-color:#999999;
	$border-color-hover:#666666;
	.g-button-group{
		display:inline-flex;
		vertical-align:top;
		> .g-button{
			border-radius:0;
			&:not(:first-child){
				margin-left:-1px;
				}
			
			&:first-child{
				border-bottom-left-radius:$border-radius;
				border-top-left-radius:$border-radius;
			}
			
			&:last-child{
				border-bottom-right-radius:$border-radius;
				border-top-right-radius:$border-radius;
			}
			
			&:hover {
				position: relative;
				z-index: 1;
			}
		}
	}
</style>