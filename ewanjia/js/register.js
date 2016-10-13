$(function(){

    
	
   

 var $regExpManger = {
 	$user:/^([\u4e00-\u9fa5]|[0-9a-z_-])+$/,
	$phone:/^[1-3]\d{10}$/,
	$pwd:/[a-zA-Z]+/,
	$email:/^[0-9a-z_]{2,20}@[0-9a-z]{1,20}\.[a-z]{2,3}$/
}
 var isUser = false;
var getUsername = function(){
	$.ajax({
		type:"POST",
		dataType:"jsonp",
		url:"http://10.9.158.170:8080/API/user/check.aspx",
		data:{username:$("#userName").val()},
		success:function(data){
			console.log(data);
			if(data.result == "ok"){
				isUser = true;
			}
		}
	});
}
 function checkusername(){
 	var $uv = $("#userName").val();
 	console.log(1);
 	if($uv==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#userspan").html("用户名不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($regExpManger.$user.test($uv)) {
				 $("#userspan").html("用户名可注册").css({"color":"red"});
				 $("#box1").css({"border":"1px solid #ccc"});
				  getUsername();
				return true;
			} else {
				 $("#userspan").html("格式不正确").css({"color":"red"});
				$("#box1").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $("#userName").blur(checkusername);
 
 
 function checkpwd(){
 	var $uv = $("#pwd").val();
 	//console.log(1);
 	if($uv==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#pwdspan").html("密码不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($regExpManger.$pwd.test($uv)) {
				 $("#pwdspan").html("密码可注册").css({"color":"red"});
				  $("#box2").css({"border":"1px solid #ccc"})
				return true;
			} else {
				 $("#pwdspan").html("格式不正确,必须以字母开头").css({"color":"red"});
				$("#box2").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $("#pwd").blur(checkpwd);
 
 function checkque(){
 	var $uv = $("#pwd").val();
 	var $qw=$("#pwd2").val();
 	//console.log(1);
 	if($qw==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#quespan").html("确认密码不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($uv==$qw) {
				 $("#quespan").html("确认密码正确").css({"color":"red"});
				 $("#box3").css({"border":"1px solid #ccc"})
				return true;
			} else {
				 $("#quespan").html("两次密码不一致，请重新输入").css({"color":"red"});
				$("#box3").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $("#pwd2").blur(checkque);
 
 function emial(){
 	var $uv = $("#email").val();
 	
 	//console.log(1);
 	if($uv==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#emailspan").html("邮箱不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($regExpManger.$email.test($uv)) {
				 $("#emailspan").html("邮箱正确").css({"color":"red"});
				 $("#box4").css({"border":"1px solid #ccc"})
				return true;
			} else {
				 $("#emailspan").html("格式不正确，请重新输入").css({"color":"red"});
				$("#box4").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $("#email").blur(emial);
 
 function phone(){
 	var $uv = $("#phone").val();
 	
 	//console.log(1);
 	if($uv==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#phonespan").html("电话不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($regExpManger.$phone.test($uv)) {
				 $("#phonespan").html("电话号正确").css({"color":"red"});
				 $("#box5").css({"border":"1px solid #ccc"})
				return true;
			} else {
				 $("#phonespan").html("格式不正确，请重新输入").css({"color":"red"});
				$("#box5").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $("#phone").blur(phone);
 
 
 $("#qiehuan").click(function(){
		var arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var html = ""
		for(var i = 0;i<5;i++){	
			var $s = arr[parseInt(Math.random()*arr.length)];
			html += $s;	
		}
		$("#qiehuan").html(html);
		$("#hide").val(html);
		
	}) ;
	
	function checkyzm() {	
	var $verV = $("#yzm").val();
	var $hideV=$("#hide").val();
		if($verV == "") {
			 $("#yamspan").html("验证码不能为空").css({"color":"red"});
			
			return false;
		} else {
			if($verV == $hideV) {
				 $("#yamspan").html("验证码正确").css({"color":"red"});
				 $("#box6").css({"border":"1px solid #ccc"})
				return true;
			} else {
				$("#yamspan").html("验证码不正确，请重新输入").css({"color":"red"});
				$("#box6").css({"border":"1px solid red"})
				return false;
			}
		}
}
$("#yzm").blur(checkyzm);	

$("#btn").click(function() {
	if($("#ck").prop("checked")){
		
		if(checkusername()&&checkpwd()&&checkque()&&emial()&&phone()&&checkyzm()){
			
			if(isUser){
				//alert("用户名不存在,可以注册");
				$.ajax({
					type:"POST",
					dataType:"jsonp",
					url:"http://10.9.158.170:8080/API/user/add.aspx",
					data:{username:$("#userName").val(),password:$("#pwd").val()},
					success:function(data){
						console.log(data);
						if(data.result == "ok"){
							location.href="login.html"

						}else{
							alert("注册失败！");

						}
					}
				});

			}
			
			
		}
	}else{
		alert("请先同意协议");
	}
})
});
