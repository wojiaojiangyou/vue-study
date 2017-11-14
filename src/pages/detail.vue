<template>
	<div class="detail_wrap">
		<div class="detail_left">
			<img :src="imgsource" alt="">
			<ul>
				<router-link :to="{path:item.href}" tag="li" v-for="item in detailList" active-class="active" key="item">{{item.title}}</router-link>
			</ul>
		</div>
		<div class="detail_right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default {
	name:'detail',
	data(){
		return {
			detailList:[
				{	
					title:'开放产品',
					href:'earth'
					
				},
				{
					title:'品牌营销',
					href:'loud'
					
				},
				{
					title:'使命必达',
					href:'car'
					
				},
				{
					title:'永攀高峰',
					href:'mounton'	
					
				}
			],
			imgMap:{
				'/detail/earth':require('../assets/images/1.png'),
				'/detail/loud':require('../assets/images/3.png'),
				'/detail/mounton':require('../assets/images/4.png'),
				'/detail/car':require('../assets/images/2.png')
			}
		}
	},
	computed:{
		imgsource(){
			return this.imgMap[this.$route.path];
		}
	}
}
</script>

<style lang="scss">
.detail_wrap{
	display: flex;
	.detail_left{
		width:200px;
		height:280px;
		background:#fff;
		overflow:hidden;
		margin-right:20px;
		img{
			width:100px;
			height:100px;
			margin:20px auto;
			display:block;
		}
		li{
			width:100%;
			height:35px;
			line-height:35px;
			font-size:14px;
			text-align: center;
			font-weight:normal;
			color:#999;
			cursor:pointer;
			&:hover,&.active{
				background:#62c596;
				color:#fff;
			}
		}
	}
	.detail_right{
		width:100%;
		height:auto;
		.detail_right_top,.detail_right_bottom{
			background:#fff;
			border:1px solid #eee;
			padding:15px;
		}
		.detail_right_top{
			margin-bottom:15px;
		}
		.detail_right_bottom{
			h4{
				font-size: 14px;
				margin-bottom:20px;
			}
			p{
				font-size:12px;
				color:#999;
			}
		}
	}
}
</style>