<template>
	<div class="index_wrap">
		<div class="left_menu">
			<div class="menu_pro">
				<h2>最新产品</h2>
				<div class="menu_list" v-for="(item,index) in productList">
					<h4>{{item.title}}</h4>
					<div v-for="listitem in item.list" class='title_wrap'>
						<span class="title"><a :href="listitem.href">{{listitem.title}}</a></span>
						<span class="hot-item" v-show="listitem.isHot">HOT</span>
					</div>
					<div class="line" ></div>
				</div>					
			</div>
			<div class="menu_info">
				<h2>最新消息</h2>				
				<div class="menu_list title_wrap" v-for="(item,index) in newsList" >
					<h4 v-if="index==0"></h4>
					<span class="title"><a :href="item.href">{{item.title}}</a></span>
					<span class="hot-item" v-show="item.isHot">HOT</span>
				</div>	
				<div class="line" ></div>		
			</div>
		</div>
		<div class="right_content">
			<div class="slider">
				<slider :sliders="sliderList" :duration='3000' @onchange="sliderChange"></slider>
			</div>
			<div class="prolist">
				<div class="prowrap" :class="['prowrap_bg_'+item.id]" v-for="(item,index) in buyList">
					<h2>{{item.title}}</h2>
					<p>{{item.description}}</p>
					<router-link :to="{path:item.path}" tag="button">立即购买</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Slider from "@/components/slider"

export default{
	name:'index',
	components:{
		Slider
	},
	created(){
		this.$axios.get('/api/newsList').then( (response)=> {
		    // console.log("xxxxx",response);
		    this.newsList=response.data;
		}).catch( (response)=> {
		});
	},
	data(){
		return {
			productList:[
				{
					title:'PC产品',
					list:[
						{
							title:'数据统计',
							href:'http://www.baidu.com'
						},
						{
							title:'数据预测',
							href:'http://www.baidu.com',
							isHot:true
						},
						{
							title:'数据分析',
							href:'http://www.baidu.com'
						},
						{
							title:'广告发布',
							href:'http://www.baidu.com'
						}
					]
				},
				{
					title:'应用类',
					list:[
						{
							title:'91助手',
							href:'http://www.baidu.com'
						},
						{
							title:'产品助手',
							href:'http://www.baidu.com'
						},
						{
							title:'智能地图',
							href:'http://www.baidu.com'
						},
						{
							title:'团队语音',
							href:'http://www.baidu.com'
						}
					]
				}
			],
			newsList:[],
			buyList:[
				{	
					id:'earth',
					title:'开放产品',
					description:'开放产品是一种开放产品',
					href:'http://www.baidu.com',
					path:'detail/earth'
				},
				{
					id:'loud',
					title:'品牌营销',
					description:'品牌营销是一种品牌营销',
					href:'http://www.baidu.com',
					path:'detail/loud'
				},
				{
					id:'car',
					title:'使命必达',
					description:'使命必达是一种使命必达',
					href:'http://www.baidu.com',
					path:'detail/car'
				},
				{
					id:'mounton',
					title:'永攀高峰',
					description:'永攀高峰是一种永攀高峰',
					href:'http://www.baidu.com',
					path:'detail/mounton'
				}
			],
			sliderList:[
				{
					src:require('../assets/slideShow/pic1.jpg'),
					title:'ReactJs 入门与实战',
					href:'http://www.baidu.com'
				},
				{
					src:require('../assets/slideShow/pic2.jpg'),
					title:'Android开发工程师',
					href:'http://www.baidu.com'
				},
				{
					src:require('../assets/slideShow/pic3.jpg'),
					title:'玩转算法面试',
					href:'http://www.baidu.com'
				},
				{
					src:require('../assets/slideShow/pic4.jpg'),
					title:'ReactNative开发跨平台github App',
					href:'http://www.baidu.com'
				}
			]
		}
	},
	methods:{
		sliderChange(changeIdx){
			// console.log("xxxx sliderChange",changeIdx);
		}
	}
}
</script>

<style scoped lang="scss">
.line{
	height:2px;
	background:#f2f3f5;
}
.hot-item{
	background:rgba(220,20,60,1);
	color:#fff;
	font-size: 12px;
	padding:0 2px;
	border-radius:3px;
}

.index_wrap{
	display: flex;
	height: 100%;
	.left_menu{
		width: 250px;
		height: 100%;
		margin-right: 10px;
		h2{
			padding: 10px 20px;
			font-size: 14px;
			background: #62c596;
			color: #fff;		
		}
		.title_wrap{
			margin-bottom:10px;
			padding-left:20px;
		}
		.menu_pro,.menu_info{
			height:auto;
			background: #fff;
			box-shadow:2px 2px 3px rgba(0,0,0,0.1);
		}
		.menu_pro{
			margin-bottom: 10px;
			.title_wrap{
				padding-left:25px;
			}
		}
		.menu_list{
			h4{
				color:#000;
				font-weight: bold;
				font-size: 14px;
				padding:10px 20px;
			}
			.title{
				font-size: 13px;
				color:#999;
			}
		}
		a{
			color:#999;
			text-decoration:none;
			&:hover{
				color:#62c596;
				text-decoration:none;
			}
		}
	}
	.right_content{
		flex: 1;
		.slider{
			width:100%;
			height:480px;
			margin-bottom:20px;
		}
		.prolist{
			width:100%;
			height:auto;
			display: flex;
			flex-flow: row wrap;
			.prowrap{
				width:calc( (100% - 320px)/2 );
				height:100px;
				background:#fff;
				margin:0 20px 20px 0;
				padding:20px 0 20px 150px;
				&:nth-child(even){
					margin-right:0;
				}
				h2{
					font-size: 16px;
					color:#000;
					font-weight:bold;
					margin-bottom:15px;
				}
				p{
					font-size: 13px;
					color:#999;
					margin-bottom:20px;
				}
				button{
					width:150px;
					height:40px;
					background:#65c399;
					color:#fff;
					font-size: 14px;
					text-align: center;
					line-height:40px;
					border:none;
					cursor: pointer;
				}
				&.prowrap_bg_earth{
					background:#fff url("../assets/images/1.png") no-repeat 20px center;
					background-size:100px 100px;
				}
				&.prowrap_bg_car{
					background:#fff url("../assets/images/2.png") no-repeat 20px center;
					background-size:100px 100px;
				}
				&.prowrap_bg_loud{
					background:#fff url("../assets/images/3.png") no-repeat 20px center;
					background-size:100px 100px;
				}
				&.prowrap_bg_mounton{
					background:#fff url("../assets/images/4.png") no-repeat 20px center;
					background-size:100px 100px;
				}
			}
		}
	}
}
</style>