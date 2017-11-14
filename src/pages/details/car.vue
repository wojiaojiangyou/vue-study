<template>
	<div>
		<div class="detail_right_top">
			<h2>当前产品是:使命必达</h2>
			<div class="quote">这是当前的产品说明...</div>
			<div class="form_wrap">
				<div class="form_row">
					<span class="form_ttile">购买数量:</span>
					<div class="form_input">
						<counter @onparam-change="onParamChange('buyNumber',$event)"></counter>
					</div>
				</div>
				<div class="form_row">
					<span class="form_ttile">产品类型:</span>
					<div class="form_input">
						<selected :list='proType' @onparam-change="onParamChange('currentType',$event)"></selected>
					</div>
				</div>
				<div class="form_row">
					<span class="form_ttile">有效时间:</span>
					<div class="form_input">
						<mulitcheck :list="veriableYear" @onparam-change="onParamChange('currentYear',$event)"></mulitcheck>
					</div>
				</div>
				<div class="form_row">
					<span class="form_ttile">产品版本:</span>
					<div class="form_input">
						<mulitcheck :list='proVersion' @onparam-change="onParamChange('currnetVersion',$event)"></mulitcheck>
					</div>
				</div>
				<div class="form_row">
					<span class="form_ttile">总价:</span>
					<div class="form_input price">{{price}}</div>
				</div>
				<button>立即购买</button>
			</div>
		</div>
		<div class="detail_right_bottom">
			<h4>这是一个商品介绍</h4>
			<p>测试介绍描述内容页...</p>
		</div>
	</div>
</template>

<script type="text/javascript">
import counter from '@/components/base/counter'
import selected from '@/components/base/selected'
import mulitcheck from '@/components/base/mulitcheck'

export default {
	name:'erath',
	components:{
		counter,selected,mulitcheck
	},
	data(){
		return {
			requestParams:{},
			price:0,
			proType:[
				{
					type:'初级版',
					value:'small'
				},
				{
					type:'中级版',
					value:'middle'
				},
				{
					type:'高级版',
					value:'high'
				}
			],
			veriableYear:[
				{
					type:'半年',
					value:'0.5'
				},
				{
					type:'一年',
					value:'1'
				},
				{
					type:'三年',
					value:'3'
				}
			],
			proVersion:[
				{
					type:'客户版',
					value:'guster'
				},
				{
					type:'代理商版',
					value:'proxy'
				},
				{
					type:'专家版',
					value:'professional'
				}
			]
		}
	},
	methods:{
		onParamChange(attr,item){
			if(attr=='currentType'){
				this.requestParams[attr]=item.value;
			}else if(attr=='currentYear'){
				let temp=[];
				item.forEach((sonitem,idx)=>{
					temp.push(sonitem.value);
				});
				this.requestParams[attr]=temp.join(',');
			}else if(attr=='currnetVersion'){
				let temp=[];
				item.forEach((sonitem,idx)=>{
					temp.push(sonitem.value);
				});
				this.requestParams[attr]=temp.join(',');
			}else{
				this.requestParams[attr]=item;
			}

			this.$axios.get('/api/getPrice',this.requestParams).then((result)=>{
				this.price=result.data.amount;
			}).catch((error)=>{
				console.log(error);
			});


		}
	}
}
</script>

<style type="text/css" lang='scss' scoped>
.detail_right_top{
	.quote{
		font-size: 12px;
		margin: 20px 0;
		background: #f8fcfd;
		padding: 10px 5px;
		color:#999;
	}
	.form_wrap{
		font-size: 13px;
		color:#999;
		.form_row{
			margin-bottom:20px;
			display: flex;
			.form_ttile{
				display: inline-block;
				line-height:20px;
				margin-right:5px;
			}
			.price{
				height:20px;
				line-height:20px;
			}
		}
		button{
			width:150px;
			height:35px;
			background:#63c596;
			border:none;
			text-align: center;
			line-height:35px;
			color:#fff;
			font-size: 14px;
			padding:0;
		}
	}
}

</style>