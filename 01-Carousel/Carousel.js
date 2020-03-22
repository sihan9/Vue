// document.styleSheets["0"].cssRules["0"].style.cssText = "--positive:-100%;"
// document.styleSheets["0"].cssRules["0"].style.cssText = "--negative:100%;"
new Vue({
	el:"#app",
	data:{
		list:[
			{
				image:'./img/lb01.jpg',
				desc:'图片一',
				index:0
			},{
				image:'./img/lb02.jpg',
				desc:'图片二',
				index:1
			},{
				image:'./img/lb03.jpg',
				desc:'图片三',
				index:2
			}
		],
		myindex: 0,
		timer: '',
		isaction:[true,false,false],
		action:'action',
		dotlist:'dotlist'
	},
	methods:{
		//向左 未实现
		//问题：不是向左滑动而是向右滑动
		left:function(){
			// document.styleSheets["0"].cssRules["0"].style.cssText="--positive:-100%;--negative:100%;"
			if (this.myindex === 0) {
				this.myindex = 2;
			}else{
				this.myindex --;
			}
			this.isaction=[false,false,false];
			this.isaction[this.myindex]=true;
		},
		//向右 已实现
		right:function(){
			// document.styleSheets["0"].cssRules["0"].style.cssText="--positive:100%;--negative:-100%;"
			if (this.myindex === this.list.length - 1) {
				this.myindex = 0;
			}else{
				this.myindex ++;
			}
			this.isaction=[false,false,false];
			this.isaction[this.myindex]=true;
		},
		// 单次轮播
		play:function(){
			// document.styleSheets["0"].cssRules["0"].style.cssText="--positive:100%;--negative:-100%;"
			this.myindex ++;
			if (this.myindex > this.list.length - 1) {
				this.myindex = 0;
		    }
			this.isaction=[false,false,false];
			this.isaction[this.myindex]=true;
		},
		//鼠标移开时 继续轮播
		go:function(){
			this.timer = setInterval(()=>{
				this.play()
			},3000);
		},
		//鼠标移上时 停止轮播
		stop:function(){
			clearInterval(this.timer);
		},
		//下方小圆点点击切换
		dotclick:function(num){	
			this.myindex = num;
			this.isaction=[false,false,false];
			this.isaction[this.myindex]=true;
		}
	},
	created() {
		// console.log(document.styleSheets["0"].cssRules["0"].style.cssText);
		//实例创建后 开始轮播
		this.timer = setInterval(()=>{
			this.play()
		},3000);
	 }
})