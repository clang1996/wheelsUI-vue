<template>
  <div :class="{error}" class="wrapper">
  	    <label>
  	        <input :disabled="disabled" :readonly="readonly"
                   :value="value" @blur="$emit('blur',$event)"
                   @change="$emit('change',$event)"
                   @focus="$emit('focus',$event)"
                   @input="$emit('input',$event)"
                   type="text"
            />
	         <template v-if="error">
		    <icon name="error"></icon>
		     <span class="error-message">{{error}}</span>
	  </template>
  	    </label>
	 
  </div>
</template>

<script>
import Icon from './icon';

export default {
    components: {Icon}, props: {
        value: {
            type: String,
        },
        disabled: {
            type: Boolean, default: false,
        },
        readonly: {
            type: Boolean, default: false,
        },
        error: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
	$height: 32px;
	$border-color: #999;
	$border-color-hover: #666;
	$border-radius: 4px;
	$font-size: 12px;
	$box-shadow-color: rgba(0, 0, 0, .5);
	$red: #f1453d;
	.wrapper {
		font-size: inherit;
		display: inline-flex;
		align-items: center;
		
		&.error {
			> label {
				> input {
					border-color: $red;
					}
				
				> .error-message {
					color: $red;
					}
				}
			}
		
		label {
			> input {
				height: 32px;
				border: 1px solid $border-color;
				border-radius: 4px;
				padding: 0 8px;
				font-size: inherit;
				
				&:hover {
					border-color: $border-color-hover;
					}
				
				&:focus {
					box-shadow: inset 0 1px 3px $box-shadow-color;
					outline: none;
					}
				
				&[disabled], &[readonly] {
					border-color: #ccc;
					color: #333;
					cursor: not-allowed;
					}
					
				}
				
				
			}
		}
</style>