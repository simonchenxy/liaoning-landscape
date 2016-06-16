
$(function(){
	var liClone=$("#picturbanner ol li").first().clone();
	$("#picturbanner ol").append(liClone);
	var liSize=$("#picturbanner ol li").size();
	var liWidth=$("#picturbanner ol li").outerWidth();
	$("#picturbanner ol").css({"width":liSize*liWidth});
	var title=$("#picturbanner img").first().attr("title");
	$("#picturbanner #picturbanner-info").text(title);
	for(var n=1;n<liSize;n++){
		$("#picturbanner ul").append("<li>"+n+"</li>");
	}
	$("#picturbanner ul li").first().addClass("on");
	var i=0;
	var t=setInterval(function(){
		i++;
		move();
		
	},1500);

	$("#picturbanner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move();
		},1500);
	});
	$("#picturbanner ul li").hover(function(){
		var index=$(this).index();
		i=index;
		move();

	})
	function move(){
		
		if(i==liSize){
			$("#picturbanner ol").css({"left":0});
			i=1;
		}
		if(i==liSize-1){
			$("#picturbanner ul li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$("#picturbanner ul li").eq(i).addClass("on").siblings().removeClass("on");
		}

		$("#picturbanner ol").stop().animate({"left":-i*liWidth},500);
		var title=$("#picturbanner img").eq(i).attr("title");
		$("#picturbanner #picturbanner-info").text(title);

	}

	var ht=$("#headernav").offset().top;
	var title=$("#float").offset().top;
	$(window).scroll(function() {
		var top=$(window).scrollTop();
		if(top>title-ht){
			$("#float").addClass("on").css({"top":+ht});
		}else{
			$("#float").removeClass("on");
		}
	});

});
