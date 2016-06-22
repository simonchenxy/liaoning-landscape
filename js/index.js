

$(function(){//开始

	$(".nav-bg").remove();
	$("#header #menu").css({"position":"relative"});
	$("#header #menu").append("<li class='bar'></li>");
	$("#header .bar").css({"height":"3px","width":"100px","position":"absolute","top":"0","left":"0","background-color":"#00ff00"});
	var index=window.location.href.split("/").length-1;
	var href=window.location.href.split("/")[index].substr(0,4);

	$("#headernav a[href^='"+href+"']").addClass("on");
	if(href==0){
		$("#headernav a.nav-sub[href^='index.html']").addClass("on");
	}
	$(".sub-list>a.on").parents(".nav-menu").children(".nav-sub").addClass("on");
	
	var liWidth=$("#headernav .nav-sub.on").outerWidth();
	var liLeft=$("#headernav .nav-sub.on").position().left;
	$("#header .bar").css({"width":liWidth,"left":liLeft});
	$("#headernav .nav-menu").hover(function(){
		var liWidth=$(this).outerWidth();
		var liLeft=$(this).position().left;
		$("#header .bar").stop().animate({"width":liWidth,"left":liLeft},300);
	},function(){
		$("#header .bar").stop().animate({"width":liWidth,"left":liLeft},300);
	})


	var ht=$("#headernav").offset().top;
	$(window).scroll(function(){
		var t=$(this).scrollTop();
		if(t>ht){
			$("#headernav").addClass("on");
		}else{
			$("#headernav").removeClass("on");
		}
	})






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







	



