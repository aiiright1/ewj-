$(function(){
	
	var $shopcart = $.cookie("shopcart");
	if($shopcart){
		var $sum=strOper.sum($shopcart);
		$("#cartItemNumber").html($sum);
	   //$("#cartnumber").html($sum);
	}
	function getpid(){
	var h = location.href;
	var arr = h.split("?");
	var arr2;
	var biaoshi;
	//console.log(arr[1]);
	if(arr[1]==undefined){
		biaoshi='';
		return biaoshi;
	}else{
		arr2 = arr[1].split("=");
	   biaoshi= arr2[1];
	   
	    if(biaoshi=="#"){
	    	biaoshi='';
	    }
	  
	    return biaoshi;
	    
	} 
}
getpid();

   function getpicdata(){
   	$.get("../server/shop3.json",function(data){
		var html="";
			$.each(data,function(i,o){
				html+='<div class="tool"></div>'
	    	    	  +'<img class="midimg active" src=" '+o.imgsrc1+' " />'
	    	    		+'<img class="midimg " src="'+o.imgsrc2+' " />'
	    	    		+'<img class="midimg" src="'+o.imgsrc3+'" />'
	    	    		+'<img class="midimg" src="'+o.imgsrc4+'" />'
	    	    		+'<img class="midimg" src="'+o.imgsrc5+'" />'
	    	    		   +'<div class="jia"></div>';
			});
			$("#midbox").html(html);
	       
	       var html2="";
			$.each(data,function(i,o){
				html2+='<img  class=" bigimg" src="'+o.imgsrc1+'" />'
	    	    	   +'<img class=" bigimg" src="'+o.imgsrc2+'" />'
	    	    			+'<img class=" bigimg" src="'+o.imgsrc3+'" />'
	    	    			+'<img class=" bigimg" src="'+o.imgsrc4+'" />'
	    	    			+'<img class=" bigimg" src="'+o.imgsrc5+'" />';
			});
			$("#bigbox").html(html2);
	
	       $("#imageMenu .simg").eq(0).empty();
	       $("#imageMenu .simg").eq(0).html('<img src="'+data[0].imgsrc1+'"/>');
	       $("#imageMenu .simg").eq(1).empty();
	       $("#imageMenu .simg").eq(1).html('<img src="'+data[0].imgsrc2+'"/>');
	       $("#imageMenu .simg").eq(2).empty();
	       $("#imageMenu .simg").eq(2).html('<img src="'+data[0].imgsrc3+'"/>');
	       $("#imageMenu .simg").eq(3).empty();
	       $("#imageMenu .simg").eq(3).html('<img src="'+data[0].imgsrc4+'"/>');
	       $("#imageMenu .simg").eq(4).empty();
	       $("#imageMenu .simg").eq(4).html('<img src="'+data[0].imgsrc5+'"/>');
			       
	 	   //$("#bigbox img").eq(0).show();
	
	
	     fangda();
	
	
	
	
	});
	
  }	
//	$.get("../server/shop3.json",function(data){
//		var html="";
//			$.each(data,function(i,o){
//				html+='<img  class=" bigimg" src="'+o.imgsrc1+'" />'
//	    	    	   +'<img class=" bigimg" src="'+o.imgsrc2+'" />'
//	    	    			+'<img class=" bigimg" src="'+o.imgsrc3+'" />'
//	    	    			+'<img class=" bigimg" src="'+o.imgsrc4+'" />'
//	    	    			+'<img class=" bigimg" src="'+o.imgsrc5+'" />';
//			});
//			$("#bigbox").html(html);
//			
//	});
	
//	$.get("../server/shop3.json",function(data){
//		var html="";
//			$.each(data,function(i,o){
//				html+='<div class="scrollbutton smallImgUp disabled ico"> < </div>'
//	    	    			+'<div id="imageMenu">'
//	    	    				+'<ul>'
//	    	    				 +'<li class="simg active"><img src="'+o.imgsrc1+'"/></li>'
//	    	    				  +'<li class="simg"><img src="'+o.imgsrc2+'"/></li>'
//	    	    				    +'<li class="simg"><img src="'+o.imgsrc3+'"/></li>'
//	    	    				     +'<li class="simg"><img src="'+o.imgsrc4+'"/></li>'
//	    	    				      +'<li class="simg"><img src="'+o.imgsrc5+'"/></li>'
//	    	    				+'</ul>'
//	    	    			+'</div>'
//	    	    			 +'<div class="scrollbutton smallImgDown ico"> > </div>'
//			});
//			$("#smallbox").html(html);
     
//                 $("#imageMenu .simg").eq(0).empty();
//			       $("#imageMenu .simg").eq(0).html('<img src="'+imgsrc+'"/>');
//			       $("#imageMenu .simg").eq(1).empty();
//			       $("#imageMenu .simg").eq(1).html('<img src="'+data2[1].imgsrc+'"/>');
//			       $("#imageMenu .simg").eq(2).empty();
//			       $("#imageMenu .simg").eq(2).html('<img src="'+data2[2].imgsrc+'"/>');
//			       $("#imageMenu .simg").eq(3).empty();
//			       $("#imageMenu .simg").eq(3).html('<img src="'+data2[3].imgsrc+'"/>');
//			       $("#imageMenu .simg").eq(4).empty();
//			       $("#imageMenu .simg").eq(4).html('<img src="'+data2[4].imgsrc+'"/>');
//			       
//	 	   	  $("#bigbox img").eq(0).show();
//			
//			
//		});		
   	
 
	
			
	//放大效果
   function fangda(){
   	    var $current=0;
		$("#imageMenu>ul>.simg").mouseenter(
			function(){
				 //console.log(1);
			   // $("imageMenu>ul>.simg").removeClass("active");
			  var  $index=$(this).index();
			  //console.log($index);
			   $current=$(this).index(); 
			   $("#imageMenu .simg").removeClass("active");
				$(this).addClass("active");
				 $("#midbox .midimg").removeClass("active");
	  	        $("#midbox .midimg").eq($current).addClass("active");
	  	        
			}
			
		); 
		$("#midbox img").eq(0).show();
		$("#midbox").mouseenter(function(){
			var midleft=$(this).offset().left;
			var midtop=$(this).offset().top;
			var midW=$(this).width();
			var midH=$(this).height();
			
			 $("#midbox>.tool").show();
			 $("#bigbox").show();
			 $("#bigbox img").hide();
			 $("#bigbox img").eq($current).show();
			 
			// $("#bigbox img").eq($current).show();
			 $("#midbox").mousemove(
			 	function(e){
			 		var mtop = $(window).scrollTop();
			 		var toolW=$("#midbox>.tool").width();
			 		var toolH=$("#midbox>.tool").height();
			 		var x=e.clientX-midleft-toolW/2;
			 		var y=e.clientY-midtop-toolH/2+mtop;
			 		var toolx=Math.max(Math.min(x,midW-toolW),0);
			 		var tooly=Math.max(Math.min(y,midH-toolH),0);
			 		
			 		$("#midbox>.tool").css({
			 			"left":toolx,
			 			"top":tooly
			 		})
			 		$("#bigbox img").css({
			 			"left":-3*toolx,
			 			"top":-3*tooly
			 		})	
			 	});
       });

	$("#midbox").mouseleave(function(){
		 $("#midbox>.tool").hide();
		 $("#bigbox").hide();
	});
	//左键
	$("#smallbox .smallImgUp").click(function(){
		$("#imageMenu>ul").animate({left:0},600);
	});
	//右键
	$("#smallbox .smallImgDown").click(function(){
		$("#imageMenu>ul").animate({left:-95},600);
	});
  }
	//console.log(getpid());
	
	
	
	if(getpid()){
		$.get("../server/total.json",function(data2){
	 	//console.log(1);
	 	var biaoshi=getpid();
	 		//console.log(biaoshi);
	 	$.each(data2,function(i,o){
	 	   if(biaoshi!=undefined){
	 	      //console.log(data[i].a);
	 	   	  if(data2[i].a==biaoshi){
	 	   	  	//console.log(1);
	 	   	  	var imgsrc=data2[i].imgsrc;
	 	   	  	var html="";
	 	   	  	var html1="";
	 	   	  	var html2="";
	 	   	  	 html+='<div class="tool"></div>'
	    	    	  +'<img class="midimg active" src=" '+imgsrc+' " />'	
		    		    +'<img class="midimg " src="'+data2[i+1].imgsrc+' " />'
		    			+'<img class="midimg" src="'+data2[i+2].imgsrc+'" />'
		    			+'<img class="midimg" src="'+data2[i+3].imgsrc+'" />'
		    			+'<img class="midimg" src="'+data2[i+4].imgsrc+'" />'
		    		    +'<div class="jia"></div>';
			      $("#midbox").empty();
			      $("#midbox").html(html);
			         html1+='<img  class=" bigimg" src="'+imgsrc+'" />'
                         +'<img class=" bigimg" src="'+data2[i+1].imgsrc+'" />'
	    	    			+'<img class=" bigimg" src="'+data2[i+2].imgsrc+'" />'
	    	    			+'<img class=" bigimg" src="'+data2[i+3].imgsrc+'" />'
	    	    			+'<img class=" bigimg" src="'+data2[i+4].imgsrc+'" />';
	    	       $("#bigbox").empty();
			       $("#bigbox").html(html1);
			       $("#imageMenu .simg").eq(0).empty();
			       $("#imageMenu .simg").eq(0).html('<img src="'+imgsrc+'"/>');
			       $("#imageMenu .simg").eq(1).empty();
			       $("#imageMenu .simg").eq(1).html('<img src="'+data2[i+1].imgsrc+'"/>');
			       $("#imageMenu .simg").eq(2).empty();
			       $("#imageMenu .simg").eq(2).html('<img src="'+data2[i+2].imgsrc+'"/>');
			       $("#imageMenu .simg").eq(3).empty();
			       $("#imageMenu .simg").eq(3).html('<img src="'+data2[i+3].imgsrc+'"/>');
			       $("#imageMenu .simg").eq(4).empty();
			       $("#imageMenu .simg").eq(4).html('<img src="'+data2[i+4].imgsrc+'"/>');
			       
	 	   	 // $("#bigbox img").eq(0).show();
             // $("#midbox img").eq(0).show();	 	   	  
	 	   	  }
	 	   }
	 		
	 	})
	 });
        fangda();
	}else{
		
		getpicdata();
		fangda();
		
	}
	
	
	
	
	
	
	//加入购物车
	$.get("../server/shop2.json",function(data){
		var html="";
			$.each(data,function(i,o){
				html+='<span class="name" id="tx" style="">'+o.txt+'</span>'
		    	        +'<span class="name">'+o.title+'</span>'
		    	        	+'<span class="introduce"><div style="margin-right: 12px; float: left">'
		    	        	+'<img src="../images/cou1.jpg" style="width: 20px;height: 20px;"/>'
		    	        	+'</div>'
							+'<div style="height: 20px; line-height: 20px;">韩国|保税</div>'
							+'</span>'			
		    	            +'<span class="introduce"></span>'
		    	            +'<span class="introduce">'+o.titledes+'</span>'
		    	            +'<div id="loadDetailRight">'
		    	            	+'<div class="money">含税价<p class="textPrimary">¥<strong>'+o.price+'</strong>.00</p>'
		    	            	+'<div id="valoremBox" style="display: inline-block;position: relative;">'
								        +'<p class="valoremTax">'
								            +'<strong>价税说明</strong>'
								            +'<a class="vtArrow">▽</a>'
								        +'</p>'
								
								        +'<div class="valoremTaxBox" style="display: none">'
								            +'<p>o.shui<br>其中税额含国家规定的应缴增值税和消费税额</p>'
								        +'</div></div></div>'
		    	            	//+'<div class="dt_lins quantity"><span class="title">数量</span><a class="less" ></a>'
								    //+'<input class="quantity_txt" value="1" >'
								   // +'<a class="add"></a>'
								   // +'<span class="kucun">库存:'+o.kucun+'&nbsp;</span>'
								   // +'<span class="tips" id="error_tips"></span></div><div class="dt_lins region">'
									//+'<span class="title">送至</span>'
									//+'<div class="region_list">'
								        //+'<span class="title">'
								           // +'<span class="cnt">河南省-鹤壁市-山城区</span>'
								           // +'<span class="ico" style="padding: 4px 9px 2px 6px">❈</span>'
								       // +'</span>'
								        //+'<div class="region_pop" style="display: none;">'
								           // +'<ul class="region_pop_nav">'
								                
								               // +'<li data-index="0" data-value="c_region_1602" class="">'
								                  //  +'<span class="tt"><span class="fl">河南省</span><span class="ico"></span>'
								                   // +'</span>'
								                   // +'<div class="line"></div>'
								               // +'</li>'
								                
								              // + '<li data-index="1" data-value="c_region_11008" class="" style="display: list-item;">'
								                   // +'<span class="tt">'
								                       // +'<span class="fl">鹤壁市</span>'
								                       // +'<span class="ico"></span>'
								                   // +'</span>'
								                    //+'<div class="line"></div>'
								               // +'</li>'
								                
								                //+'<li data-index="2" data-value="c_region_11105" class="active" style="display: list-item;">'
								                    //+'<span class="tt">'
								                       // +'<span class="fl">山城区</span>'
								                       // +'<span class="ico"></span>'
								                    //+'</span>'
								                   // +'<div class="line"></div>'
								                //+'</li>'
								                
								                
//								                +'<li data-index="3" data-value="" style="display: none;">'
//								                    +'<span class="tt">'
//								                        +'<span class="fl"></span>'
//								                        +'<span class="ico"></span>'
//								                    +'</span>'
//								                    +'<div class="line"></div>'
//								                +'</li>'
								                
//								            +'</ul>'
//								
//								            +'<ul class="region_pop_nav_list">'
//								                +'<li class="stock_province_item" style="display: none;"> <a data-value="c_region_11001" haschildren="true" series="0">北京市</a><a data-value="c_region_11002" haschildren="true" series="0">辽宁省</a><a data-value="c_region_11003" haschildren="true" series="0">天津市</a><a data-value="c_region_11004" haschildren="true" series="0">河北省</a><a data-value="c_region_11005" haschildren="true" series="0">山西省</a><a class="another" data-value="c_region_11006" haschildren="true" series="0">内蒙古自治区</a><a data-value="c_region_11007" haschildren="true" series="0">山东省</a><a data-value="c_region_11008" haschildren="true" series="0">吉林省</a><a data-value="c_region_11009" haschildren="true" series="0">黑龙江省</a><a data-value="c_region_11010" haschildren="true" series="0">上海市</a><a data-value="c_region_11011" haschildren="true" series="0">江苏省</a><a data-value="c_region_11012" haschildren="true" series="0">浙江省</a><a data-value="c_region_11013" haschildren="true" series="0">安徽省</a><a data-value="c_region_11014" haschildren="true" series="0">福建省</a><a data-value="c_region_11015" haschildren="true" series="0">江西省</a><a data-value="c_region_11016" haschildren="true" series="0">广东省</a><a class="another" data-value="c_region_11017" haschildren="true" series="0">广西壮族自治区</a><a data-value="c_region_11018" haschildren="true" series="0">海南省</a><a data-value="c_region_11019" haschildren="true" series="0">重庆市</a><a data-value="c_region_11020" haschildren="true" series="0">河南省</a><a data-value="c_region_11021" haschildren="true" series="0">湖北省</a><a data-value="c_region_11022" haschildren="true" series="0">湖南省</a><a class="another" data-value="c_region_11023" haschildren="true" series="0">新疆维吾尔自治区</a><a data-value="c_region_11024" haschildren="true" series="0">四川省</a><a data-value="c_region_11025" haschildren="true" series="0">贵州省</a><a data-value="c_region_11026" haschildren="true" series="0">云南省</a><a data-value="c_region_11027" haschildren="true" series="0">西藏自治区</a><a data-value="c_region_11028" haschildren="true" series="0">陕西省</a><a data-value="c_region_11029" haschildren="true" series="0">甘肃省</a><a data-value="c_region_11030" haschildren="true" series="0">青海省</a><a class="another" data-value="c_region_11031" haschildren="true" series="0">宁夏回族自治区</a><a data-value="c_region_11032" haschildren="false" series="0">台湾省</a><a class="another" data-value="c_region_11033" haschildren="false" series="0">香港特别行政区</a><a class="another" data-value="c_region_11034" haschildren="false" series="0">澳门特别行政区</a></li>'
//								                +'<li class="stock_city_item" style="display: none;"> <a data-value="c_region_11229" haschildren="true" series="1">郑州市</a><a data-value="c_region_11230" haschildren="true" series="1">开封市</a><a data-value="c_region_11231" haschildren="true" series="1">洛阳市</a><a data-value="c_region_11232" haschildren="true" series="1">平顶山市</a><a data-value="c_region_11233" haschildren="true" series="1">安阳市</a><a data-value="c_region_11234" haschildren="true" series="1">鹤壁市</a><a data-value="c_region_11235" haschildren="true" series="1">新乡市</a><a data-value="c_region_11236" haschildren="true" series="1">焦作市</a><a data-value="c_region_11237" haschildren="true" series="1">濮阳市</a><a data-value="c_region_11238" haschildren="true" series="1">许昌市</a><a data-value="c_region_11239" haschildren="true" series="1">漯河市</a><a data-value="c_region_11240" haschildren="true" series="1">三门峡市</a><a data-value="c_region_11241" haschildren="true" series="1">南阳市</a><a data-value="c_region_11242" haschildren="true" series="1">商丘市</a><a data-value="c_region_11243" haschildren="true" series="1">信阳市</a><a data-value="c_region_11244" haschildren="true" series="1">周口市</a><a data-value="c_region_11245" haschildren="true" series="1">驻马店市</a></li>'
//								                +'<li class="stock_area_item" style="display: list-item;"> <a data-value="c_region_13261" haschildren="false" series="2">鹤山区</a><a data-value="c_region_13262" haschildren="false" series="2">山城区</a><a data-value="c_region_13263" haschildren="false" series="2">淇滨区</a><a data-value="c_region_13264" haschildren="false" series="2">浚县</a><a data-value="c_region_13265" haschildren="false" series="2">淇县</a></li>'
//								                +'<li class="stock_town_item" style="display: none;"> </li>'
//								            +'</ul>'
								       // +'</div>'
								   // +'</div>'
								    +'<input type="hidden" name="lastID" value="c_region_13262" id="lastID" class="lastID">'
								    +'<span style="display: inline;margin-left: 10px" class="hasProduct" id="sensorsIsHasProduct">有货</span>'
								    
								+'</div>'
								+'<div class="dt_lins buyOperate pr">'
    
								    +'<a class="btnAddToCart" href="javascript:;" id="ct1" pid="'+o.pid+'"><i class="ico"></i><span >加入购物车</span></a>'
								    +'<a class="but25 btnAddFavorite"><i></i><span>收藏</span></a>'
								    
								    
								    +'<div class="messagePanel successPanel recommend1 addToCart"></div>'
								  +'<div class="messagePanel successPanel recommend2 addToFavorite" style="width: 350px;"></div>'
								  +'</div>'
								  
		    	            +'</div>'
								  
		    	            +'<div class="dt_lins tips">'
								+'<span class="title" style="width: 90px;">【温馨提示】</span>'
								+'<span style="color:#6f6f6f;display: block;margin-left: 6px;padding-top: 2px;clear:left;">此商品暂不支持货到付款/积分/预付卡；根据监管要求，跨境商品需海关审核，将与ewj主站商品分单配送</span>'
						    +'</div>';
	    	       
				
			});
			$(".detail_right").html(html);
			//console.log($(".quantity_txt")).
			$(".add").click(function(){
				console.log($(".quantity_txt"))
			});
			
			$("#ct1").click(function(){
		      // console.log($(".less"));
	       
	        var id=$(this).attr("pid");
	        
	       var pname=$(this).parent().parent().prev().prev().prev().prev().prev().html();
	      $.get("../server/shop2.json",function(data){
		
	          $.each(data,function(i,o){
			   	 if(id==o.pid){
			   	 	var img=o.imgsrc;
			   	 	
			   	   var price=o.price;
			   	   //console.log(price);
		   	 	    var str=id+"#"+pname+"#"+img+"#"+price+"#"+"1";
			   	 	var $shopcart=$.cookie("shopcart");
				     if(!$shopcart){
		     	  		$.cookie("shopcart",str,{expires:7});
		     	  	}else{
		     	  		var result = strOper.add($shopcart,str);		              $.cookie("shopcart",result);
		      	  	}
			   	 	
			   	 }
		   	
		   
	       
	       });
	
	
   });
});
			
	});
	
	
	//console.log($("#ct1"));
	
	//套餐效果
	$("#m1").click(
		function(){
			$("#match .dv2").hide();
			$("#match .dv3").show();
			$("#match a").removeClass("active");
			$(this).addClass("active");
		}
	);
	$("#m2").click(
		function(){
			$("#match a").removeClass("active");
			$(this).addClass("active");
			$("#match .dv3").hide();
			$("#match .dv2").show();
		}
	);
	//分页样式
	    function getMsg(num){
            $.ajax({
                url:'../server/shop1.json',
                type:'GET',
                dataType:'json',
                success:function(data){
                    //1.计算分页数量
                    var showNum=num;
                    var dataL=data.length;
                    var pageNum=Math.ceil(dataL/showNum);
                    $('#fenye').pagination(pageNum,{
                        num_edge_entries: 1, //边缘页数
                        num_display_entries: 11, //主体页数
                        items_per_page: 1, //每页显示1项
                        prev_text: "上一页",
                        next_text: "下一页",
                        callback:function(index){
                            var html='<div class="item">'

                            //console.log(showNum*index+'~'+parseInt(showNum*index)+parseInt(showNum))
                            for(var i = showNum*index; i < showNum*index+showNum;i++){
                               // console.log(i)
                                if(i<dataL){
                                	   
											 html +='<div class="userInfo">'
											 html +='<div class="avatar">'
											 html +='<img src=" '+data[i].imgsrc+' " alt=""/>'
											 html +='</div>'
											 html +='<div class="name">'
											 html +='<a>'+data[i].name+'</a>'
											 html +='</div>'
											 html +='</div>'
											 html +='<div class="cont">'
											 html +='<div class="arrow"></div>'
											 html +='<div class="title">'
											 html +='<span class="star">'
											 html +='<em class="s-star s5"></em>'
											 html +='</span>'
											 html +='<span class="time">'
													'+data[i].time+'
											 html +='</span>'
											 html +='</div>'
											 html +='<div class="comm-txt">'+data[i].comm+'</div>'
											 html +='<div class="single">'
											 html +='<div class="smallImg">'
													
											 html +='</div>'
											 html +='<div class="bigImg bigImgCh" style="display: none">'
											 html +='<span class="arrow" style="left:35px;"></span>'
														
											 html +='<div class="over">'
														
											 html +='<a href="javascript:void(0)" class="prev" onclick="prevBigImg(this)"></a>'
											 html +='<a href="javascript:void(0)" class="next" onclick="nextBigImg(this)"></a>'
															
											 html +='<div class="stop" onclick="hideBigImg(this)">'
											 html +='<i class="ico-stop"></i>收起'
											 html +='</div>'
											 html +='<div class="img-view">'
											 html +='<img class="bigImages" src="#" alt="">'
											 html +='</div>'
															
											 html +='</div>'
														
											html +='</div>'
											html +='</div>'
													
											 html +='</div>'; 
                                }
                            }
                            html+='</div>';
                           // console.log(html);
                            $("#commentMain").html(html)
                        }
                    })
                    
                }
            })
        }
        getMsg(4);
     
	
	
	
	
	$(".detail_cont>.nav a").mouseenter(function(){
		$(".detail_cont>.nav a").removeClass("active");
		$(this).addClass("active");
		var $index=$(this).index();
		
		$(".detail_cont .tabItem:not(#comment)").hide();
		$(".detail_cont .tabItem").eq($index).show();
		//console.log($(".detail_cont .tabItem"));
	})
});
