<template>
	<div class="select_wrap">
		<select v-model="val" @change='change'>
			<option value="none">--请选择--</option>
			<option :value="item.value" v-for="(item,index) in list">{{item.type}}</option>
		</select>
	</div>
</template>

<script type="text/javascript">
export default {
	name:'selected',
	props:{
		list:{
			type:Array,
			default(){
				return [{
					type:'初级版',
					value:'small'
				}]
			}
		}
	},
	data(){
		return {
			val:'none'
		}
	},
	methods:{
		change(){
			let result={
				type:'请选择',
				value:'none'
			};

			this.list.forEach((item,index)=>{
				if(item.value==this.val){
					result=item;
				}
			});

			this.$emit('onparam-change',result);
		}
	}
}
</script>

<style type="text/css" lang='scss'>
.select_wrap{
	width:100px;
	height:20px;
	border:1px solid #eee;
	select{
		width:100%;
		height:100%;
		border:none;
		color:#999;
	}
}
</style>