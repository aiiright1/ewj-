$(function(){
	var $shopcart = $.cookie("shopcart");
	if($shopcart){
		var $sum=strOper.sum($shopcart);
		$("#cartItemNumber").html($sum);
	   $("#cartnumber").html($sum);
	}
	
	//侧边栏
	$("body img").lazyload({effect:"fadeIn"});
	 $(".detail").removeClass("active");
	$(".global>.item").mouseenter(
		function(){
			var $index=$(this).index();
			$(".global>.item").css({
			background:"#fff"
		    });
		   $(this).css({
			background:"#e14041",
			color:"#fff"
		   });
			
			//$(".detail").show();
		   $(".detail").addClass("active");
		   $(".detail>ul>.item").removeClass("active");
		   $(".detail>ul>.item").eq($index).addClass("active");
		   
		}
	);
	$(".sideGoodCategoriesMenu").mouseleave(
		function(){
			$(".detail").removeClass("active");
			 $(".detail>ul>.item").removeClass("active");
			 $(".global>.item").css({
			background:"#fff"
		    });
		}
	);
	//轮播图
	var num=0;
	var $termid;
	var $index;
	$(".index_banner_group>.banner_list>li>a").hide();
	$(".index_banner_group>.banner_list>li>a").eq(0).show();
	time();
	$(".index_banner_group>.banner_nav>li").click(function(){
		 $index=$(this).index();
         	    num=$(this).index();
         	    //console.log($(".index_banner_group>.banner_list>a"));
      	$(".index_banner_group>.banner_list>li>a").hide();
     	$(".index_banner_group>.banner_list>li>a").eq($index).fadeIn(600);
          $(".index_banner_group>.banner_nav>li").removeClass("active");
         $(".index_banner_group>.banner_nav>li").eq($index).addClass("active");
	});
	$(".index_banner_group>.banner_nav>li").mouseenter(
		function(){
			num=$(this).index();
			$(".index_banner_group>.banner_list>li>a").hide();
     	$(".index_banner_group>.banner_list>li>a").eq(num).fadeIn(600);
          $(".index_banner_group>.banner_nav>li").removeClass("active");
         $(".index_banner_group>.banner_nav>li").eq(num).addClass("active");
		}
	);
	function time(){
	  $termid= setInterval(function(){
          num++;
	     if(num>2){
       	   num=0;
         }
         $(".index_banner_group>.banner_list>li>a:not("+num+")").hide();
         $(".index_banner_group>.banner_list>li>a").eq(num).fadeIn(600);
         $(".index_banner_group>.banner_nav>li:not("+num+")").removeClass("active");
         $(".index_banner_group>.banner_nav>li").eq(num).addClass("active");

      },1500);
     }
      $(".index_banner_group").hover(
      	function(){
      		clearInterval($termid);
      	},function(){
      		time();
      	}
      );
      //热卖json
      $.get("../server/page3.json",function(data){
      	
      	var html=""
      	$.each(data,function(i,o){
      		html+='<li class="a">'
	        	 +'<div class="img" >'
	        	 +'<a href="shop.html?biaoshi='+o.a+'">'
	        				+'<div class="picdiv">'
	        					+'<img class="shopimg" biaoshi="'+o.a+'"  data-original=" '+o.imgsrc+' " alt="【价格含税】倩碧卓越润肤乳天才黄油（有油）125ml">'
	        				+'</div>'
	        			+'</a>'
	        		+'</div>'
	        		+'<div class="cont">'
	        			+'<div class="meta">'
	        				+'<div class="desc">'
	        					+'<img class="country" src=" '+o.imgsrc1+'"/>'
	        					+'<span class="txt">'+o.txt+'</span>'
	        				+'</div>'
	        				+'<div class="title">'
	        					+o.title
	        				+'</div>'
	        				+'<div class="title-des">'
	        					+o.titledes
	        				+'</div>'
	        			+'</div>'
	        			+'<div class="pb-price">'
	        			+'<div class="price">'
	        				+'<span class="">¥<strong>'+o.price+'</strong>.00</span>'
	        				+'<span class="old_price">'+o.old_price+'</span>'
	        			+'</div>'
	        			+'<a class="buynow" href="javascript:;" pid="'+o.id+'">加入购物车</a>'

	        			+'</div>'
	        		+'</div>'
	        	  +'</li>';
	        	  
      	});
      	$(".bigbox>.hotlist>.hotlist1").html(html);
      	$("body img").lazyload({effect:"fadeIn"});
      });
        
      
      
       $(".bigbox>.hotlist>.hotlist1").click(function(e){
       	  if($(e.target).is(".buynow")){
       	  	 var id=$(e.target).attr("pid");
       	  	 //console.log(id);
       	  	 var pname=$(e.target).prev().parent().prev().children().eq(0).children(".txt").html();
       	  	// console.log(pname);
       	  	var img=$(e.target).prev().parent().parent().prev().children().children().children().attr("src");
       	  	var price=$(e.target).prev().children().eq(0).children().eq(0).html();
       	  	// console.log(price);
       	  	var str=id+"#"+pname+"#"+img+"#"+price+"#"+"1";
       	  	//console.log(str);
       	  	var $shopcart=$.cookie("shopcart");
       	  	if(!$shopcart){
       	  		$.cookie("shopcart",str,{expires:7});
       	  	}else{
       	  		var result = strOper.add($shopcart,str);
                $.cookie("shopcart",result);
       	  	}
       	  	//getShopcart(); 
       	  }
          if($(e.target).is(".shopimg")){
          	console.log(1)
          }
       });
     
     
      //个护切换
      $.get("../server/page4.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="listwrap">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="item last">'
	      	 		 +'<div class="mask"></div>'
	      	 		 +'<div class="hd">'
	      	 		 +'<div class="country">'
	      	 		 +'<img src=" '+o.imgsrc+' "/>'
	      	 		 +'<span class="tip">'+o.desc+'</span>'
	      	 		 +'</div>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="img_view">'
	      	 		 +'<img data-original=" '+o.imgsrc1+' "/>'
	      	 		 +'</a>'
	      	 		 +'<div class="bottom">'
	      	 		 +'<a class="name" target="_blank" title="【价格含税】【第二件半价】FANCL芳珂保湿洁面粉II 50g">'+o.name1+'</a>'
	      	 		 +'<a class="name" target="_blank" title="FANCL Face Wash Powder（Moist） 50g ">'+o.name2+' </a>'
	      	 		 +'<div class="float_1">'
	      	 		 +'<p class="textPrimary price" priceid="p_3510366">¥<strong>'+o.price+'</strong>.00</p>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="buy btn-buy" count="8" buy="">'+o.buynow+'</a>'
	      	 		 +'</div>'
	      	 		 +'</li>';
      		});
      		html+=htmll+'</ul>';
      			//$("#personal_con>.mc>.listwrap").html("htmll");
      		//console.log(o.list);
      		
      	});
      	$("#personal_con>.mc").html(html);
      //	$("#personal_con>.mc>.listwrap").html(htmll);
      	
      	$("body img").lazyload({effect:"fadeIn"});
      
      	 
      });
      //console.log($("#personal_con>.mc>.listwrap"))
     
      $("#personal_con>.mt>.tab>li").mouseenter(
      	function(){
      		//alert(1);
      		 var $index=$(this).index();
      		//console.dir($(this));
      		$("#personal_con>.mt>.tab>li>a").removeClass("active");
      		$(this).children("a").addClass("active");
      		$("#personal_con>.mc>.listwrap").css({
      			"z-index":1
      		});
      		$("#personal_con>.mc>.listwrap").eq($index).css({
      			"z-index":10
      		});
      	}
      );
     //母婴呵护
      $.get("../server/page5.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="listwrap">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="item last">'
	      	 		 +'<div class="mask"></div>'
	      	 		 +'<div class="hd">'
	      	 		 +'<div class="country">'
	      	 		 +'<img src=" '+o.imgsrc+' "/>'
	      	 		 +'<span class="tip">'+o.desc+'</span>'
	      	 		 +'</div>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="img_view">'
	      	 		 +'<img data-original=" '+o.imgsrc1+' "/>'
	      	 		 +'</a>'
	      	 		 +'<div class="bottom">'
	      	 		 +'<a class="name" target="_blank" title="【价格含税】【第二件半价】FANCL芳珂保湿洁面粉II 50g">'+o.name1+'</a>'
	      	 		 +'<a class="name" target="_blank" title="FANCL Face Wash Powder（Moist） 50g ">'+o.name2+' </a>'
	      	 		 +'<div class="float_1">'
	      	 		 +'<p class="textPrimary price" priceid="p_3510366">¥<strong>'+o.price+'</strong>.00</p>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="buy btn-buy" count="8" buy="">'+o.buynow+'</a>'
	      	 		 +'</div>'
	      	 		 +'</li>';
      		});
      		html+=htmll+'</ul>';
      			//$("#personal_con>.mc>.listwrap").html("htmll");
      		//console.log(o.list);
      		
      	});
      	$("#mother_con>.mc").html(html);
      //	$("#personal_con>.mc>.listwrap").html(htmll);
      	
      	$("body img").lazyload({effect:"fadeIn"});
      
      	 
      });
      $("#mother_con>.mt>.tab>li").mouseenter(
      	function(){
      		//alert(1);
      		 var $index=$(this).index();
      		console.dir($(this));
      		$("#mother_con>.mt>.tab>li>a").removeClass("active");
      		$(this).children("a").addClass("active");
      		$("#mother_con>.mc>.listwrap").css({
      			"z-index":1
      		});
      		$("#mother_con>.mc>.listwrap").eq($index).css({
      			"z-index":10
      		});
      	}
      );
      //营养保健
       $.get("../server/page6.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="listwrap">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="item last">'
	      	 		 +'<div class="mask"></div>'
	      	 		 +'<div class="hd">'
	      	 		 +'<div class="country">'
	      	 		 +'<img src=" '+o.imgsrc+' "/>'
	      	 		 +'<span class="tip">'+o.desc+'</span>'
	      	 		 +'</div>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="img_view">'
	      	 		 +'<img data-original=" '+o.imgsrc1+' "/>'
	      	 		 +'</a>'
	      	 		 +'<div class="bottom">'
	      	 		 +'<a class="name" target="_blank" title="【价格含税】【第二件半价】FANCL芳珂保湿洁面粉II 50g">'+o.name1+'</a>'
	      	 		 +'<a class="name" target="_blank" title="FANCL Face Wash Powder（Moist） 50g ">'+o.name2+' </a>'
	      	 		 +'<div class="float_1">'
	      	 		 +'<p class="textPrimary price" priceid="p_3510366">¥<strong>'+o.price+'</strong>.00</p>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="buy btn-buy" count="8" buy="">'+o.buynow+'</a>'
	      	 		 +'</div>'
	      	 		 +'</li>';
      		});
      		html+=htmll+'</ul>';
      			//$("#personal_con>.mc>.listwrap").html("htmll");
      		//console.log(o.list);
      		
      	});
      	$("#heath_con>.mc1").html(html);
      //	$("#personal_con>.mc>.listwrap").html(htmll);
      	 $("body img").lazyload({effect:"fadeIn"});
      	
      
      	 
      });
       $("#heath_con>.mt>.tab>li").mouseenter(
      	function(){
      		//alert(1);
      		 var $index=$(this).index();
      		console.dir($(this));
      		$("#heath_con>.mt>.tab>li>a").removeClass("active");
      		$(this).children("a").addClass("active");
      		$("#heath_con>.mc1>.listwrap").css({
      			"z-index":1
      		});
      		$("#heath_con>.mc1>.listwrap").eq($index).css({
      			"z-index":10
      		});
      	}
      );
      //精选食品
        $.get("../server/page7.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="listwrap">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="item last">'
	      	 		 +'<div class="mask"></div>'
	      	 		 +'<div class="hd">'
	      	 		 +'<div class="country">'
	      	 		 +'<img src=" '+o.imgsrc+' "/>'
	      	 		 +'<span class="tip">'+o.desc+'</span>'
	      	 		 +'</div>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="img_view">'
	      	 		 +'<img data-original=" '+o.imgsrc1+' "/>'
	      	 		 +'</a>'
	      	 		 +'<div class="bottom">'
	      	 		 +'<a class="name" target="_blank" title="【价格含税】【第二件半价】FANCL芳珂保湿洁面粉II 50g">'+o.name1+'</a>'
	      	 		 +'<a class="name" target="_blank" title="FANCL Face Wash Powder（Moist） 50g ">'+o.name2+' </a>'
	      	 		 +'<div class="float_1">'
	      	 		 +'<p class="textPrimary price" priceid="p_3510366">¥<strong>'+o.price+'</strong>.00</p>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="buy btn-buy" count="8" buy="">'+o.buynow+'</a>'
	      	 		 +'</div>'
	      	 		 +'</li>';
      		});
      		html+=htmll+'</ul>';
      			//$("#personal_con>.mc>.listwrap").html("htmll");
      		//console.log(o.list);
      		
      	});
      	$("#food_con>.mc").html(html);
      //	$("#personal_con>.mc>.listwrap").html(htmll);
      	$("body img").lazyload({effect:"fadeIn"});
      	
      
      	 
      });
       $("#food_con>.mt>.tab>li").mouseenter(
      	function(){
      		//alert(1);
      		 var $index=$(this).index();
      		//console.dir($(this));
      		$("#food_con>.mt>.tab>li>a").removeClass("active");
      		$(this).children("a").addClass("active");
      		$("#food_con>.mc>.listwrap").css({
      			"z-index":1
      		});
      		$("#food_con>.mc>.listwrap").eq($index).css({
      			"z-index":10
      		});
      	}
      );
      //
        $.get("../server/page7.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="listwrap">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="item last">'
	      	 		 +'<div class="mask"></div>'
	      	 		 +'<div class="hd">'
	      	 		 +'<div class="country">'
	      	 		 +'<img src=" '+o.imgsrc+' "/>'
	      	 		 +'<span class="tip">'+o.desc+'</span>'
	      	 		 +'</div>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="img_view">'
	      	 		 +'<img data-original=" '+o.imgsrc1+' "/>'
	      	 		 +'</a>'
	      	 		 +'<div class="bottom">'
	      	 		 +'<a class="name" target="_blank" title="【价格含税】【第二件半价】FANCL芳珂保湿洁面粉II 50g">'+o.name1+'</a>'
	      	 		 +'<a class="name" target="_blank" title="FANCL Face Wash Powder（Moist） 50g ">'+o.name2+' </a>'
	      	 		 +'<div class="float_1">'
	      	 		 +'<p class="textPrimary price" priceid="p_3510366">¥<strong>'+o.price+'</strong>.00</p>'
	      	 		 +'</div>'
	      	 		 +'<a href="#" class="buy btn-buy" count="8" buy="">'+o.buynow+'</a>'
	      	 		 +'</div>'
	      	 		 +'</li>';
      		});
      		html+=htmll+'</ul>';
      			//$("#personal_con>.mc>.listwrap").html("htmll");
      		//console.log(o.list);
      		
      	});
      	$("#day_con>.mc").html(html);
      //	$("#personal_con>.mc>.listwrap").html(htmll);
      	
      	$("body img").lazyload({effect:"fadeIn"});
      
      	 
      });
      //顶部,底部出现
   $(window).scroll(function(){
         	if($(window).scrollTop()>$(window).height()){
         		$(".onscrolltop").slideDown(400);
         		$(".onscrollbot").fadeIn(200);
         	}else{
         		$(".onscrolltop").slideUp(200);
         		$(".onscrollbot").fadeOut(200);
         	}

       });
   //回到顶部
   $(".onscrollbot>ul>li").eq(3).click(
   	function(){
   		$("html,body").animate({
         		scrollTop:0
         },600);
   	}
   );
});
