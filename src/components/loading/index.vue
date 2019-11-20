<template>
	<transition :name="transition">
		<div class="weui-loading_toast loading" :class="!text ? 'loading-no-text' : ''" v-show="show">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast" :style="{position: position}">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content" v-if="text">
					{{text || 'loading'}}
					<slot></slot>
				</p>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'loading',
		model: {
			prop: 'show',
			event: 'change'
		},
		props: {
			show: Boolean,
			text: String,
			position: String,
			transition: {
				type: String,
				default: 'mask'
			}
		},
		watch: {
			show(val) {
				this.$emit('update:show', val)
			}
		}
	}
</script>

<style lang="less">
	@import '../../style/weui/widget/weui-tips/weui-mask';
	@import '../../style/weui/widget/weui-tips/weui-toast';
	@import '../../style/weui/widget/weui-loading/weui-loading.less';


</style>
<style lang="stylus" scoped>
	@loading-z-index = 5001
	
	.loading .weui-toast {
		z-index: @loading-z-index;
	}
	
	.weui-icon_toast.weui-loading {
		margin: 30px 0 0;
		width: 38px;
		height: 38px;
		vertical-align: baseline;
		display: inline-block;
	}
	
	.mask-enter, .mask-leave-active,
	.mask-leave-active, .mask-enter-active {
		position: relative;
		z-index: 1;
	}
	
	.mask-enter, .mask-leave-active {
		opacity: 0;
	}
	
	.mask-leave-active, .mask-enter-active {
		transition: opacity 300ms;
	}
	
	.loading-no-text .weui-toast {
		min-height: 98px;
	}


</style>