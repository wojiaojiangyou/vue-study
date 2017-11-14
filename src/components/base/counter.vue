<template>
	<div class="counter_wrap">
		<div class="counter_sub" @click="sub">-</div>
		<div class="counter_input">
			<input type="text" v-model="counter">
		</div>
		<div class="counter_add" @click="add">+</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name:'counter',
	data(){
		return {
			counter:0
		}
	},
	methods:{
		add(){
			this.counter++;
			this.change();
		},
		sub(){
			if(this.counter==0) this.counter=0;
			else this.counter--;
			this.change();
		},
		change(){
			this.$emit('onparam-change',this.counter);
		}
	}
}
</script>

<style type="text/css" lang='scss'>
.counter_wrap{
	font-size: 12px;
	display: flex;
	.counter_sub,.counter_add{
		width:20px;
		height:20px;
		border:1px solid #eee;
		line-height:20px;
		text-align: center;
		color:#999;
		cursor: pointer;
		&:hover{
			background:#63c596;
			color:#fff;
		}
	}
	.counter_input{
		width:50px;
		height:20px;
		border:1px solid #eee;
		margin:0 2px;
		input{
			width:100%;
			height:100%;
			text-align: center;
		}
	}

}
</style>