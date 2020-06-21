<template>
	<button :class="{[`icon-${iconPosition}`]:true}" class="button">
		<g-icon v-if="icon && !loading" class="icon" :name="icon" ></g-icon>
		<g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
		<div class="content">
			<slot />
		</div>
	</button>
</template>
<script>
    export default {
        props: {
            icon: {},
	        loading:{
              type:Boolean,
		      default: false
	        },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>
<style lang="scss">
	.loading{
		animation:spin 1s infinite linear;
	}
	@keyframes spin {
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
	.button {
		
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
			margin: 0 .3em;
		}
		
		&.icon-right {
			> .content {
				order: 1
			}
			
			> .icon {
				order: 2;
				margin: 0 .3em;
			}
		}
		
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 1em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		
		&:hover {
			border-color: var(--border-color-hover);
		}
		
		&:active {
			background-color: var(--button-active-bg);
		}
		
		&:focus {
			outline: none;
		}
	}


</style>

