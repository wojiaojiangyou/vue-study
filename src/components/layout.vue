<template>
	<div class="index_wrap">
		<div class="app-header">
			<div class="logo">
				<img src="../assets/logo.png" alt="">
			</div>
			<div class="tipinfo">
				<ul>
					<li v-if="username!==''">{{username}}</li>
					<li v-if="username!==''" @click="loginOut">注销</li>
					<li v-if="username===''" @click="alertLoginDialog">登录</li>
					<li v-if="username===''" @click="alertRegDialog">注册</li>
					<li @click="alertAboutDialog">关于</li>
				</ul>
			</div>
		</div>
		<div class="app-content">
			<router-view></router-view>
		</div>
		<div class="app-footer">
			<p>@TEST 底部信息说明...</p>
		</div>
		<!--对话框-->
		<my-dialog :iShow="showLoginDialog" @on-close="dialogClose('showLoginDialog')">
			<login-from @login-success="loginSuccess"></login-from>
		</my-dialog>
		<my-dialog :iShow="showRegDialog" @on-close="dialogClose('showRegDialog')">
			<span>Reg !!</span>
		</my-dialog>
		<my-dialog :iShow="showAboutDialog" @on-close="dialogClose('showAboutDialog')">
			<span>About !!</span>
		</my-dialog>

	</div>
</template>

<script>
import myDialog from '@/components/dialog'
import loginFrom from '@/components/loginfrom'

export default {
	name:'layout',
	components:{
		myDialog,
		loginFrom
	},
	data(){
		return {
			showLoginDialog:false,
			showRegDialog:false,
			showAboutDialog:false,
			username:''
		}
	},
	methods:{
		alertLoginDialog(){
			this.showLoginDialog=true;
		},
		alertRegDialog(){
			this.showRegDialog=true;
		},
		alertAboutDialog(){
			this.showAboutDialog=true;
		},
		dialogClose(closeattr){
			this[closeattr]=false;
		},
		loginSuccess(data){
			console.log("xxx login",data);
			this.dialogClose('showLoginDialog');
			this.username=data.username;
		},
		loginOut(){
			this.username='';
		}
	}
}
</script>

<style lang="scss">
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.index_wrap{
	.app-header{
		height:auto;
		background:#3d3d3d;
		padding:5px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo{
			width:50px;
			height:50px;
			img{
				width:100%;
				height:100%;
				object-fit:cover;
			}
		}
		.tipinfo{
			width:auto;
			height:auto;
			ul{
				height:100%;
				list-style:none;
				color:#fff;
				li{
					padding-right:5px;
					margin-right:5px;
					border-right:2px solid #fff;
					font-size: 14px;
					font-weight: normal;
					float:left;
					cursor: pointer;
					&:last-child{
						padding:0;
						margin:0;
						border:none;
					}
				}
			}
		}
	}
	.app-content{
		height:calc( 100vh - 150px);
		background:#f2f3f5;
		padding:20px;
	}
	.app-footer{
		height:50px;
		line-height:50px;
		text-align: center;
		background:#f9f9f9;
		color:#ccc;
		font-size:12px;
	}
}
</style>