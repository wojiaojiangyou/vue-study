<template>
	<div class="login_wrap">
		<div class="form-line">
			<span class="title">用户名:</span>
			<div class="line-input">
				<input type="text" placeholder="请输入用户名" v-model="username"/>
				<span class="error">{{userobj.errorText}}</span>
			</div>
		</div>
		<div class="form-line">
			<span class="title">密&nbsp;&nbsp;&nbsp;码:</span>
			<div class="line-input">
				<input type="password" placeholder="请输入密码" v-model="password"/>
				<span class="error">{{passobj.errorText}}</span>
			</div>
		</div>
		<div class="form-line">
			<button class="loginbtn" @click="login">登陆</button>
			<span class="error">{{errorText}}</span>	
		</div>
	</div>
</template>

<script>
export default {
	name:'loginform',
	data(){
		return {
			username:'',
			password:'',
			errorText:'',
			isShow:false
		}
	},
	computed:{
		userobj(){
			let status='',errorText='';
			if(!/@/g.test(this.username)){
				status=true;
				errorText="必须包含@符号！"
			}else{
				status=false;
				errorText=""
			}

			if(!this.tipUserInfo){
				errorText="";
				this.tipUserInfo=true;
			}

			return {
				status,errorText
			}
		},
		passobj(){
			let status='',errorText='';
			if(!/^\w{1,6}$/g.test(this.password)){
				status=true;
				errorText="密码长度为1-6位！"
			}else{
				status=false;
				errorText=""
			}

			if(!this.tipPassInfo){
				errorText="";
				this.tipPassInfo=true;
			}

			return {
				status,errorText
			}
		}
	},
	methods:{
		login(){
			if(this.userobj.status || this.passobj.status){
				this.errorText='用户名和密码不符合规范,请重新填写 ！'
			}else{
				this.errorText='';
				this.$axios.get('/api/userinfo')
				.then((data)=>{
					let result=data.data;
					if(result.username==this.username&&result.password==this.password){
						this.$emit('login-success',result);
					}
				}).catch((error)=>{
					console.log(error);
				});
			}
		}
	}
}
</script>

<style lang='scss' scoped>
.login_wrap{
	.form-line{
		display: flex;
		align-items: center;
		margin-bottom: 20px;
		.title{
			color:#999;
			font-size: 14px;
			font-weight: bold;
			margin-right:5px;
		}
		.line-input{
			display: flex;
			align-items: center;
			input{
				width:140px;
				height:25px;
			}
		}
		.loginbtn{
			width:120px;
			height:40px;
			line-height:40px;
			text-align:center;
			color:#fff;
			border:none;
			background:#66c399;
		}
		.error{
			margin-left:15px;
			font-size:13px;
			color:red;
		}
	}
}
</style>