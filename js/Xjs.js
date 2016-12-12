//asd d asd asd 
window.onload=function(){
	var iScroll = document.body.scrollTop || document.documentElement.scrollTop;
	//var jsone_Height=document.getElementById("jsheaderdisplay");
	//alert(jsone_Height.offsetHeight)
	// alert(jsone_Height.style.height)
	// var jsone_Height=jsheaderdisplay.style.height;
	// alert(jsheaderdisplay.style.height+"px")
		// if(iScroll=>jsaone_Height.offsetHeight*5+"px"){
		//  	 tianmaochaoshi.style.display=jsbeijing.style.display="none";
		 	 
		// }else{
		// 	 tianmaochaoshi.style.display="block";
		// }
		// function getScrollTop(){ 
		// var D = document; 
		// return Math.max(D.body.scrollTop,
		//  D.documentElement.scrollTop)}
		//  //获取网页横向滚动宽度function getScrollLeft(){ var D = document; return Math.max(D.body.scrollLeft, D.documentElement.scrollLeft)}
		// }
		// alert(getScrollTop);
		var ulli=GUN.getElementsByClassName('JingXuanUlLi');
		var adiv=G.getElementsByClassName('JXcontent');
		for(var i=0;i<ulli.length;i++){
			ulli[i].index=i;
			ulli[i].onclick=function(){
				for(var i=0;i<adiv.length;i++){
					 adiv[i].style.display="none";
					 ulli[i].style.background="#fff";
				}
				adiv[this.index].style.display="block";
				ulli[this.index].style.background="#dd2727";
			}
		}
		//alert(adiv.length);


		// var oNav = document.getElementById("GUN");
		// oNav.addEventListener("touchstart", start, false); //手指 按下
		// oNav.addEventListener("touchmove", move, false); //手指移动
		// oNav.addEventListener("touchend", end, false)

		// //手指按下
		// function start(e) {
		// 	var e = e || window.event;
		// 	e.preventDefault();
		// 	startX = e.targetTouches[0].clientX; //当前dom元素上手指的列表
		// 	//startY = e.targetTouches[0].clientY;
		// 	e.cancelBubble=true;


		// }		
		// //手指移动中
		// function move(e) {
		// 	var e = e || event;
		// 	e.preventDefault();
		// 	var moveX = e.targetTouches[0].clientX;
		// 	//moveY = e.targetTouches[0].clientX;
		// 	lenX = moveX - startX;
		// 	this.style.left = lenX - 10 + 'px';

		// }
		// //手指离开
		// function end(e) {
		// 	var e = e || event;
		// 	e.preventDefault();
		// 	if(lenX > 30) {
		// 		this.style.left = 0;
		// 	} else if(lenX < -247) {
		// 		this.style.left = -288 + 'px';
		// 	}
		// }
 
}
 	










































