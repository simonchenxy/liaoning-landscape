

$(function(){//开始
	//返回顶部
	var backtoTopText = "返回顶部";
	$("body").append("<div class='backToTop'></div>");
	$(".backToTop").hide();
	$(".backToTop").attr("title",backtoTopText);
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>400){
			$(".backToTop").fadeIn();
		}else{
			$(".backToTop").fadeOut();
		}
	});
	$(".backToTop").on("click",function(){
		$("html,body").animate({scrollTop:0},500);
	});

	//这是导航菜单下拉菜单
	$("ul#menu .nav-menu").hover(

		function(){
			
			$(this).children("#sub-list").stop().slideDown(300);
		},
		function(){

			$(this).children("#sub-list").stop().slideUp(300);
	});

	

	

	
		
	

	
	//图片透明
	$(".imgbg").hover(	    		
		function(){				
			$(this).find("img").stop().fadeTo(900, .5);
			},				
		function(){								
			$(this).find("img").stop().fadeTo(900,1);
	});

	

	//minibanner
	$("#all-title #right-list #right-minibanner a").hover(
		function(){
			$(this).children("img").stop().fadeTo(600, .7);
		},
		function(){
			$(this).children("img").stop().fadeTo(900,1)
		}
	);
	



});//结束







	



