$(function(){
	
	     //全选
    var check= function(){
	var flag = true;
	for(var i = 0;i<$("input:checkbox:not(.allchecked)").length;i++){
		if(!$("input:checkbox:not(.allchecked)").eq(i).prop("checked")){
			$(".allchecked").prop("checked",false);
			flag = false;
			break;
		}
	}
	if(flag){
		$(".allchecked").prop("checked",true);
	}
	var $all = 0;
	for(var i = 0;i<$("input:checkbox:not(.allchecked)").length;i++){
		if($("input:checkbox:not(.allchecked)").eq(i).prop("checked")){
			$all += parseInt($("input:checkbox:not(.allchecked)").eq(i).parent().parent().parent().children(".ld7").children().eq(0).children("strong").html());
		}
	}
	
	$(".total-price b").html($all);
}
  //console.log($("input:checkbox:not(.allchecked)").eq(0).parent().parent().parent().children(".ld7").children().eq(0).children("strong").html()) ;   
    
	//读取cookie中的数据并解析成HTML渲染到页面上
           var getShopcart=function(){
        	 var $shopcart = $.cookie("shopcart");
                if($shopcart != undefined){
                	//console.log(1);
                    var json = strOper.get($shopcart);
                    var html = "";
                    $.each(json,function(i,o){
                        html += '<li>'+
							    '<div class="ld1">'+
							    '<div class="checkbox enableSelect">'+
							    '<input type="checkbox" class="cked"/>'+
							     '<i></i>'+
							     '</div>'+
							    '<div class="img_view">'+
							    '<img src=" '+o.img+' " style="width:90px;height:90px;">'+
							    '</div>'+
							    '</div>'+
							    '<div class="ld2">'+
							    '<a>'+o.name+'</a>'+
								'</div>'+
								'<div class="ld3">'+
								'<span>1</span>'+
								'</div>'+
								'<div class="ld4" >¥<strong>'+o.price+'</strong></div>'+
								'<div class="ld6">'+
								'<span class="midde">'+
								'<a class="less" data-pid="'+o.id+'"></a>'+
								'<input class="quantity_txt" value="'+o.count+'"/>'+
								'<a class="add" data-pid="'+o.id+'"></a>'+
								'<br>'+
								'<span class="canDelivery">'+
							
								'</span>'+
								'</span>'+
								'</div>'+
								'<div class="ld7">'+
								'<span class="font18">¥<strong>'+o.price*o.count+'</strong></span>'+
								'</div>'+
								'<div class="ld8">'+
								'<span class="midde">'+
								'<a class="delete" pid=" '+o.id+'" del="del" data-pid="'+o.id+'">删除</a>'+
								'<a style="display: none;">修改优惠</a>'+
								'</span>'+
								'</div>'+
								'<div class="clear"></div>'+
								'<div class="giftWrap">'+
								'<div class="giftDiv" style="display: none;"></div>'+
								
								'<div class="freePresents" ></div>'+
								'<div class="lowPricePresent" ></div>'+
								
								'<div class="orderInclusiveRules"></div>'+
								'</div>'+
								
								'<div class="clear"></div>'+
								'</li>';
							
                    });
                    
                }
                
               // console.log(html);
        	//$(".l1").html("<li>111</li>");
        	$("#th1").html(html);
        	$("input:checkbox:not(:first)").click(function(){
			check();
		      });
        	
        }
      getShopcart();
//   
   
      
      
      
      
 //对产品数量加减的函数
            var counter1 = function(element,type){
                var count = type === true ? 1 : -1;
                var $p = type === true ? $(element).prev() : $(element).next();
//              
                if($p.val() == "1" && type === false){
                    count = 0;
                   
                }else{
                	var $shopcart = $.cookie("shopcart");
                    var id = $(element).data("pid");
                    var result = strOper.counter($shopcart,id,type);
                    $.cookie("shopcart",result);
                    
                }
                 
                    
               
                $p.val(parseInt($p.val()) + count);
                var $d = parseInt($p.parent().parent().prev().children("strong").html());
                
               
	           var $x=(parseInt($p.val()))*$d
	          
              $p.parent().parent().parent().children(".ld7").children().eq(0).children("strong").html($x);
            
            }
            var flag=true;
            var pr;
            var co;
            var $c
            
            $("#th1").click(function(e){
            	
            	
                if($(e.target).attr("del") == "del"){
                	 //console.log(1);
        
                    var $shopcart = $.cookie("shopcart");
                    var id = $(e.target).data("pid");
                    //console.log(id);
                    var result = strOper.del($shopcart,id);
                    $.cookie("shopcart",result);
                   
                    getShopcart();
                    $(".allchecked").prop("checked",false);
				     //$(".sumprice>.f20").html("0");
				    $(".total-price>b").html("0");
                }
                 if($(e.target).attr("class") == "less"){
                    //减少
                    counter1(e.target,false);
                    var $check = $(e.target).parent().parent().prev().prev().prev().prev().children().eq(0).children(".cked");
                    //console.log($check);
		            $check.prop("checked",true);
                    //getShopcart();
                    check();
                  
                   
                   
                }
                if($(e.target).attr("class") == "add"){
                    //增加
                    counter1(e.target,true);
                    var $check1 = $(e.target).parent().parent().prev().prev().prev().prev().children().eq(0).children(".cked");
                    $check1.prop("checked",true);
                    // getShopcart();
                     check();
                     
                }
               
               
                 
            });
     
        $(".allchecked").click(function(){
	 if($(this).prop("checked")){
		$("input:checkbox").prop("checked",true);
	}else{
		$("input:checkbox").prop("checked",false);
	 }
	   check();
        });


});