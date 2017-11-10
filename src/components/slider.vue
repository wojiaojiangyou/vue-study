<template>
	<div class="slider_wrap">
		<div class="list_wrap">
			<a :href="sliders[nowIndex].href" @mouseover="stopRun" @mouseout="autoRun">
				<transition name="slider-show" mode="out-in">
					<img v-if="iShow" :src="sliders[nowIndex].src" :alt="sliders[nowIndex].title">				
				</transition>
				<transition name="slider-show-old"  mode="out-in">
					<img v-if="!iShow" :src="sliders[nowIndex].src" :alt="sliders[nowIndex].title">				
				</transition>
			</a>
			<div class="list_bottom">
				<p>{{sliders[nowIndex].title}}</p>
				<ul>
					<li @click="goTo(prev)">&lt;</li>
					<li v-for="(item,index) in sliders" :class="{active:index==nowIndex}" @click="goTo(index)">{{index+1}}</li>
					<li @click="goTo(next)">&gt;</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'slider',
	props:{
		sliders:{
			type:Array,
			default:[]
		},
		duration:{
			type:Number,
			default:2000
		}
	},
	data(){
		return{
			nowIndex:0,
			iShow:false
		}
	},
	computed:{
		prev(){
			if(this.nowIndex==0){
				return this.sliders.length-1;
			}else{
				return this.nowIndex-1;
			}
		},
		next(){
			if(this.nowIndex==this.sliders.length-1){
				return 0;
			}else{
				return this.nowIndex+1;
			}
		},
	},
	methods:{
		goTo(index){
			this.iShow=false;
			setTimeout(()=>{
				this.iShow=true;
				this.nowIndex=index;
				this.$emit('onchange',index)
			});
		},
		autoRun(){
			this.autotimer=setInterval(()=>{
				this.goTo(this.next);
			},this.duration);
		},
		stopRun(){
			clearInterval(this.autotimer);
		}
	},
	mounted(){
		this.autoRun();
	}
}
</script>

<style scoped lang="scss">
.slider-show-enter-active,.slider-show-old-leave-to{
  transition: all 0.3s;
}
.slider-show-enter{
	transform: translateX(-900px);
}

.slider-show-old-leave-to{
	transform: translateX(900px);
}




.slider_wrap{
	width:100%;
	height:100%;
	overflow:hidden;
	.list_wrap{
		width:100%;
		height:100%;
		position:relative;
		img{
			width: 100%;
			height:100%;
			object-fit:fill;
		}
		.list_bottom{
			position:absolute;
			left:0;
			bottom:0;
			width:calc( 100% - 20px);
			height:40px;
			line-height:40px;
			color:#fff;
			font-size: 14px;
			background-color:rgba(0,0,0,0.4);
			padding:0 10px;
			display: flex;
			justify-content: space-between;
			p{
				width:auto;
			}
			ul{
				display: flex;
			}
			li{
				width:30px;
				height:auto;
				text-align: center;
				cursor: pointer;
				text-decoration:underline;
			}
			.active{
				color:#63c596;
			}
		}
	}
}
</style>