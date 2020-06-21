<template>
	<button :class="{[`icon-${iconPosition}`]:true}" class="button">
		<g-icon v-if="icon" :name="icon"></g-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>
<script>
    export default {
        props: {
            icon:{},
	        iconPosition:{
                type:String,
		        default:'left',
		        validator(value){
		            return value==='left' || value==='right'
		        }
	        }
        }
    }
</script>
<style lang="scss">
	.button {
		margin-top: 20px;
		padding: 0 1em;
		font-size: 14px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		vertical-align: top;
		
		> .content {
			order: 2
		}
		
		> .icon {
			order: 1;
			width: 1em;
			height: 1em;
			margin:0 .3em;
		}
		
		&.icon-right {
			> .content {
				order: 1
			}
			
			> .icon {
				order: 2;
				margin:0 .3em;
			}
		}
	}


</style>

