<template>
	<div class="mulite_check">
		<div class="checklist" :class="{active:item.active}" v-for="(item,index) in list" @click="change(item,index)">{{item.type}}</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name:'mulitecheck',
	props:{
		list:{
			type:Array,
			default:[]
		}
	},
	data(){
		return {
			oldIndex:-1,
			result:[]
		}
	},
	methods:{
		change(item,index){
			let temp={
				state:false,
				index:-1
			}
			this.result.forEach((nowitem,idx)=>{
				if(nowitem.value==item.value){
					temp.state=true;
					temp.index=idx;
				}
			});

			if(temp.state){
				this.$set(this.list[index],'active',false);
				this.result.splice(temp.index,1);
			}else{
				this.$set(this.list[index],'active',true);
				this.result.push(item);
			}

			this.$emit('onparam-change',this.result);
		}
	}
}
</script>

<style type="text/css" lang='scss' scoped>
.mulite_check{
	display: flex;
	height:15px;
	.checklist{
		width:auto;
		height:100%;
		padding:3px;
		border:1px solid #eee;
		margin-right:3px;
		line-height:15px;
		font-size: 12px;
		color:#999;
		cursor: pointer;
		&.active{
			background:#63c596;
			color:#fff;
		}
		&:last-child{
			margin:0
		}
	}
}
</style>