<template>
	<div class="dialog_wrap">
		<div class="current_wrap">
			<div class="mask" @click="closeDialog" v-if="iShow"></div>
			<transition name="drop">
				<div class="content" v-if="iShow">
					<div class="content_header">
						<p @click="closeDialog">x</p>
					</div>
					<div class="content-main">
						<slot>暂无内容...</slot>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name:'dialog',
	props:{
		iShow:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {

		}
	},
	methods:{
		closeDialog(){
			this.$emit('on-close',false);
		}
	}
}
</script>

<style lang="scss" scoped>
.drop-enter-active,.drop-leave-active{
	transition: all 0.3s ease;
	transform: translate3d(0);
}


.drop-enter,.drop-leave-to{
	transform: translateY(-500px);
}

.dialog_wrap{
	.current_wrap{
		.mask{
			position:fixed;
			top:0;
			left:0;
			width:100%;
			height:100%;
			background:rgba(0,0,0,0.3);
		}
		.content{
			position:fixed;
			top:30%;
			left:50%;
			margin-left:-25%;
			width:50%;
			height:auto;
			background:#fff;
			border:2px solid #999;
			padding:10px;
			.content_header{
				height:30px;
				display: flex;
				justify-content: flex-end;
				p{
					width:30px;
					height:30px;
					text-align: center;
					line-height:30px;
					color:#999;
					cursor: pointer;
				}
			}
			.content-main{
				min-height:40px;
				font-size:14px;
				color:#666;
			}
		}
	}
}
</style>