$(function(){
	$("body img").lazyload({effect:"fadeIn"});
	//console.log($("#cartItemNumber").html());
	var $shopcart = $.cookie("shopcart");
	if($shopcart){
		var $sum=strOper.sum($shopcart);
		$("#cartItemNumber").html($sum);
	   $("#cartnumber").html($sum);
	}
	
	
	//console.log(strOper.sum($shopcart));
	/*侧边栏*/
	$.get("../server/index6.json",function(data){
		//console.log(data);
		$.each(data,function(i,o){
			//console.log(o)
			$("<li class=\"item\">"+
				"<div class=\"listWrap\">"+
					"<ul class=\"list\">"+
					"</ul>"+
				"</div>"+
			"</li>").appendTo(".sideGoodCategoriesDetail");
			$.each(o, function(a,b) {
				$.each(b,function(j,h){
				//console.log(h)
					var $lis = $("<li>"+
									"<i class=\"title\">"+h.name+"</i>"+
									"<span class=\"itemGroup\"></span>"+
								"</li>");
					//console.log(h)
					$lis.appendTo(".listWrap>.list:eq("+i+")");
					$.each(h.cont,function(k,g){
						//console.log(k)
						
						var $a = $("<a href=\""+g.wsrc+"\">"+g.pname+"</a>");
						//console.log($a)
						$a.appendTo(".listWrap>.list:eq("+i+")>li .itemGroup:eq("+j+")");
						
					});
				});
			});
		});
	});
	
	$(".sideGoodCategoriesMenu>ul>li").mouseenter(
		
		function(){
		var $index=$(this).index();
		//console.log($index);
		$(".sideGoodCategoriesMenu>ul>li").css({
			background:"#fff"
		});
		$(this).css({
			background:"#e14041"
		});
		$(".sideGoodCategoriesDetail>li").hide();
		
		 $(".sideGoodCategoriesDetail>li").eq($index).show().css({
		 	"opacity":0.9}
		 );
		  $(".sideGoodCategoriesDetail>li").eq(0).hide();
		}
	);
	$(".sideGoodCategoriesBd").mouseleave(
		function(){
			$(".sideGoodCategoriesDetail>li").hide();
			$(".sideGoodCategoriesMenu>ul>li").css({
			background:"#fff"
		  });
		}
	);
	
	
	/*轮播图*/
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
	     if(num>4){
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
      //new
      $.get("../server/index2.json",function(data){
      	var html="";
      	$.each(data,function(i,o){
      		html+='<li class="newGoodsList">'
						+'<div class="mask"></div>'
						+'<a href="shop.html" target="_blank" class="img_view">'
						
						+'<img data-original="'+o.imgsrc+'" alt="" height="258" width="258">'
						+'<span class="isQSq" ></span>'
						+'<div class="jx_box">'
							+'<i><img data-original="'+o.imgsrc1+'" alt="" width="18" height="18"></i>'
						    +'<span>'+o.txt+'</span>'
						
						+'</div>'
						+'</a>'
						
						+'<div class="bottom">'
						+'<div class="shop_info">'
						+'<div class="shop_name">'
						+'<a class="qcnameStyle" title="Swisse 叶绿素口服液 薄荷味 500ml" href="/product.jsp?id=p_4160067" target="_blank"><span>'+o.title+'</span></a>'
						+'</div>'
						
						+'</div>'
						+'<div class="shop_pri" priceid="p_4160067"><span><em>¥&nbsp;</em>'+o.price+'<em>.00</em></span></div>'
						+'<p class="intro"><a class="qcpointStyle" href="#" target="_blank">'+o.titledes+'</a></p>'
						+'</div>'
						
						+'</li>';
      		
      	});
      	   $(".shop-con .list").html(html);
      	   $("body img").lazyload({effect:"fadeIn"});
      	     $("#new li").mouseenter(function(){
     	var $index=$(this).index();
     	
     	$("#new .bottom .intro").eq($index).animate({height:60},400);
     });
     $("#new li").mouseleave(function(){
     	var $index=$(this).index();
     	
     	$("#new .bottom .intro").eq($index).animate({height:0},400);
     });
      });
      
   
     
   /*freash特效*/
  
  $(".freshleft>.list>li").hover(
  	function(){
  	 $(this).animate(
  	{top:-3},100
      );
  	},function(){
  		$(this).animate(
  	{top:0},100
      );
  	}
  );
  //homt ajax
  $.get("../server/index3.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="homeconlist">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="">'
      			               +'<div class="mask"></div>'
                                +'<a class="img_view" href="shop.html" target="_blank">'
                                    +'<div class="picDiv">'
                                    +'<img data-original=" '+o.imgsrc+' " original="../images/home2.jpg" alt="【全国配送】美的（Midea）RT2149电磁炉（赠送炒锅和汤锅）" style="display: inline;">'
                                        
                                    +'</div>'
                                +'</a>'
                                +'<div class="bottom">'
                                    +'<a href="/product.html?id=p_3530045&amp;mid=m_490000" target="_blank" class="name" title="【全国配送】美的（Midea）RT2149电磁炉（赠送炒锅和汤锅）">'+o.title+'</a>'
                                   +'<span class="sellPoint" title="美的电磁炉，品质保证，增炒锅及汤锅">'+o.desc+'</span>'
                                    +'<p class="textPrimary price" pid="p_3530045">¥<strong>'+o.price+'</strong>.00</p>'
                                +'</div>'
                                +'<div class="same">'
                                  +'<a class="samea" href="#">'+o.a1+'</a>'
                                  +'<a  class="samea" href="#">'+o.a2+'</a>'
                                +'</div>'
                                +'</li>';
      		});
      		html+=htmll+'</ul>';
      			
      		
      	});
      	$(".homecon").html(html);
      	$("body img").lazyload({effect:"fadeIn"});
      //	$("#personal_con>.mc>.listwrap").html(htmll);
      	
      	//$("body img").lazyload({effect:"fadeIn"});
      	//console.log($(".homecon li").eq(0));
        $(".homecon ul").eq(0).addClass("active");
      	 $("#hometab>a").mouseenter(
  	function(){
  		var $index=$(this).index();
  		$("#hometab>a").removeClass("active");
  	   $(this).addClass("active");
  	   $(".homecon>.homeconlist").removeClass("active");
  	   $(".homecon>.homeconlist").eq($index).addClass("active");
  	}
  );
  $(".homeconlist>li").mouseenter(
    function(){
      $(this).children(".same").stop().animate(
        {height:99},500
       );
    }
  );
  $(".homeconlist>li").mouseleave(
    function(){
      $(this).children(".same").stop().animate(
        {height:0},1000
       );
    }
  );
      });
  //home切换
  
  //吃享主义切换
  
  
   $.get("../server/index4.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="eatconlist">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="">'
      			               +'<div class="mask"></div>'
                                +'<a class="img_view" href="#" target="_blank">'
                                    +'<div class="picDiv">'
                                    +'<img data-original=" '+o.imgsrc+' " original="../images/home2.jpg" alt="【全国配送】美的（Midea）RT2149电磁炉（赠送炒锅和汤锅）" style="display: inline;">'
                                        
                                    +'</div>'
                                +'</a>'
                                +'<div class="bottom">'
                                    +'<a href="#" target="_blank" class="name" title="【全国配送】美的（Midea）RT2149电磁炉（赠送炒锅和汤锅）">'+o.title+'</a>'
                                   +'<span class="sellPoint" title="美的电磁炉，品质保证，增炒锅及汤锅">'+o.desc+'</span>'
                                    +'<p class="textPrimary price" pid="p_3530045">¥<strong>'+o.price+'</strong>.00</p>'
                                +'</div>'
                                +'<div class="same">'
                                  +'<a class="samea" href="#">'+o.a1+'</a>'
                                  +'<a  class="samea" href="#">'+o.a2+'</a>'
                                +'</div>'
                                +'</li>';
      		             });
      		html+=htmll+'</ul>';
      			
      		
      	});
      	$(".eatcon").html(html);
      	$("body img").lazyload({effect:"fadeIn"});
      	 $(".eatcon ul").eq(0).addClass("active");
      	  $("#eattab>a").mouseenter(
  	function(){
  		var $index=$(this).index();
  		$("#eattab>a").removeClass("active");
  	   $(this).addClass("active");
  	   $(".eatcon>.eatconlist").removeClass("active");
  	   $(".eatcon>.eatconlist").eq($index).addClass("active");
  	}
  );
  $(".eatconlist>li").mouseenter(
    function(){
      $(this).children(".same").stop().animate(
        {height:99},500
       );
    }
  );
  $(".eatconlist>li").mouseleave(
    function(){
      $(this).children(".same").stop().animate(
        {height:0},1000
       );
    }
  );
   });
 
  //乐趣童年切换  
  $.get("../server/index5.json",function(data){	
      	var html="";
      		
      	$.each(data,function(i,o){
      		//console.log(data.list.html());
            var htmll="";
      		html+='<ul class="babyconlist">'; 
      		$.each(o.list,function(i,o){
      			htmll+='<li class="">'
      			               +'<div class="mask"></div>'
                                +'<a class="img_view" href="/product.html?id=p_3530045&amp;mid=m_490000" target="_blank">'
                                    +'<div class="picDiv">'
                                    +'<img data-original=" '+o.imgsrc+' " original="../images/home2.jpg" alt="【全国配送】美的（Midea）RT2149电磁炉（赠送炒锅和汤锅）" style="display: inline;">'
                                        
                                    +'</div>'
                                +'</a>'
                                +'<div class="bottom">'
                                    +'<a href="/product.html?id=p_3530045&amp;mid=m_490000" target="_blank" class="name" title="【全国配送】美的（Midea）RT2149电磁炉（赠送炒锅和汤锅）">'+o.title+'</a>'
                                   +'<span class="sellPoint" title="美的电磁炉，品质保证，增炒锅及汤锅">'+o.desc+'</span>'
                                    +'<p class="textPrimary price" pid="p_3530045">¥<strong>'+o.price+'</strong>.00</p>'
                                +'</div>'
                                +'<div class="same">'
                                  +'<a class="samea" href="#">'+o.a1+'</a>'
                                  +'<a  class="samea" href="#">'+o.a2+'</a>'
                                +'</div>'
                                +'</li>';
      		             });
      		html+=htmll+'</ul>';
      			
      		
      	});
      	$(".babycon").html(html);
      	$("body img").lazyload({effect:"fadeIn"});
      	 $(".babycon ul").eq(0).addClass("active");
      	$("#babytab>a").mouseenter(
  	   function(){
  		var $index=$(this).index();
  		$("#babytab>a").removeClass("active");
  	   $(this).addClass("active");
  	   $(".babycon>.babyconlist").removeClass("active");
  	   $(".babycon>.babyconlist").eq($index).addClass("active");
  	 }
     );  
  $(".babyconlist>li").mouseenter(
    function(){
      $(this).children(".same").stop().animate(
        {height:99},500
       );
    }
  );
  $(".babyconlist>li").mouseleave(
    function(){
      $(this).children(".same").stop().animate(
        {height:0},1000
       );
    }
  );
   });
 
  
  
  
  
  //.like1 .list ul li
  $(".like1 .list ul li").hover(
  	function(){
  	 $(this).animate(
  	{top:-3},100
      );
  	},function(){
  		$(this).animate(
  	{top:0},100
      );
  	}
  );
  //顶部,底部出现
  var curr;
   $(window).scroll(function(){
   	    var winH = $(window).height();    //窗口高度
    	var iTop = $(window).scrollTop();
         	if($(window).scrollTop()>$(window).height()){
         		
         		$(".onscrolltop").slideDown(400);
         		$(".onscrollbot").fadeIn(200);
         		$(".floatEntry").fadeIn(200);
         		$(".loucon").each(function(i,o){
    				 //curr=$(this).index();
    				// console.log($(".loucon"));
    			if(winH+iTop>$(o).offset().top&&iTop<$(o).offset().top+$(o).height()){
    				console.log(i);
    				$(".nav_lift  li").removeClass("active");
    				$(".nav_lift  li").eq(i).addClass("active");
    				//console.log($(".nav_lift  li"));
    			  }
    		})
         	}else{
         		
         		$(".onscrolltop").slideUp(200);
         		$(".onscrollbot").fadeOut(200);
         		$(".floatEntry").fadeOut(200);
         	}
         });
      $(".nav_lift  li").eq(0).click(function(){
          $("html,body").animate({scrollTop:$(".loucon").eq(0).offset().top},1000);
      });
   	  $(".nav_lift  li").eq(1).click(function(){
       	  $("html,body").animate({scrollTop:$(".loucon").eq(1).offset().top},1000);
      });
      $(".nav_lift  li").eq(2).click(function(){
       	  $("html,body").animate({scrollTop:$(".loucon").eq(2).offset().top},1000);
      }); 
      $(".nav_lift  li").eq(3).click(function(){
       	  $("html,body").animate({scrollTop:$(".loucon").eq(3).offset().top},1000);
      });
      $(".nav_lift  li").eq(4).click(function(){
       	  $("html,body").animate({scrollTop:$(".loucon").eq(4).offset().top},1000);
      });
     
   //回到顶部
   $(".onscrollbot>ul>li").eq(3).click(
   	function(){
   		$("html,body").animate({
         		scrollTop:0
         },600);
   	}
   );
   //倒计时
    var date = new Date();
    var date1 = new Date("2016-9-28 0:00:00:00");
    var date2=new Date("2016-9-26 0:00:00:00")
		//document.write(date1+"<br/>");
	var timetotal = date1.getTime()-date.getTime();
	var timetotal2 = date2.getTime()-date.getTime();
		//document.write(timetotal+"<br/>");
    var timer;
//	var day = parseInt(timetotal/(24*60*60*1000) );
	var hourother =timetotal %(24*60*60*1000);
	var hour = parseInt(timetotal/(60*60*1000) );
	var minuteother = hourother%(60*60*1000);
	var minute = parseInt(minuteother/(60*1000) );
	var secondother = minuteother%(60*1000);
 	var second = parseInt(secondother/1000);
	var milli = secondother%1000;
   //console.log((date));
  var timer2;


		var day2 = parseInt(timetotal2/(24*60*60*1000) );
		var hourother2 = timetotal2%(24*60*60*1000);
		var hour2 = parseInt(hourother2/(60*60*1000) );
		var minuteother2 = hourother2%(60*60*1000);
		var minute2 = parseInt(minuteother2/(60*1000) );
		var secondother2 = minuteother2%(60*1000);
	 	var second2 = parseInt(secondother2/1000);
	 	
		var milli2= secondother2%1000;
   //console.log((date));
      timer = setInterval(function(){		        
			   second--;
			   if(second<0){
			      second=59;
				  minute--;
				  if(minute<0){
				     minute=59;
					 hour--;
					 
					   
				  }			   
			 }
	         $(".overtime>.hour").html(hour);
            $(".overtime>.minute").html(minute);
            $(".overtime>.second").html(second);
		},1000);
		 timer2 = setInterval(function(){		        
			   second2--;
			   if(second2<=0){
			      second2=59;
				  minute2--;
				  if(minute2<=0){
				     minute2=59;
					 hour2--;
					 if(hour2<=0){
					   hour2=23;
					   day2--;
					   }	   
			 }
				  }
	         $("#new .day1").html(day2);
            $("#new .minute1").html(minute2);
            $("#new .hour1").html(hour2);
		},1000);
	
		
});
