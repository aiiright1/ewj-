$(function(){
	var $regExpManger = {
 	$user:/^([\u4e00-\u9fa5]|[0-9a-z_-])+$/,
	$phone:/^[1-3]\d{10}$/,
	$pwd:/[a-zA-Z]+/,
	
}
	
 function checkusername(){
 	var $uv = $(".username").val();
 	//console.log($uv);
 	//console.log(1);
 	if($uv==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#userspan").html("用户名不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($regExpManger.$user.test($uv)) {
				 $("#userspan").html("用户名格式正确").css({"color":"red"});
				return true;
			} else {
				 $("#userspan").html("格式不正确").css({"color":"red"});
				$("#box1").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $(".username").blur(checkusername);
 
 function checkpwd(){
 	var $uv = $(".userpassword").val();
 	//console.log($uv);
 	//console.log(1);
 	if($uv==""){
 		   //$("#username").parent().next().addClass("tip");
           $("#pwdspan").html("用户名不能为空").css({"color":"red"});
		  return false;	
 	}else{
 		  if($regExpManger.$pwd.test($uv)) {
				 $("#pwdspan").html("密码正确").css({"color":"red"});
				 $("#box2").css({"border":"1px solid #fff"})
				return true;
			} else {
				 $("#pwdspan").html("密码错误").css({"color":"red"});
				$("#box2").css({"border":"1px solid red"})
				return false;
			}
 	}
}
 $(".userpassword").blur(checkpwd);
 
 $("#flushCode").click(
 	function(){
 		var arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var html = ""
		for(var i = 0;i<5;i++){	
			var $s = arr[parseInt(Math.random()*arr.length)];
			html += $s;	
		}
		$("#qiehuan").html(html);
		$("#hide").val(html);
		console.log($("#hide").val())
 	}
 );
 
 function checkyzm() {	
	var $verV = $(".aptcha").val();
	var $hideV=$("#hide").val();
		if($verV == "") {
			 $("#yzmspan").html("验证码不能为空").css({"color":"red"});
			
			return false;
		} else {
			if($verV == $hideV) {
				 $("#yzmspan").html("验证码正确").css({"color":"red"});
				 $("#box3").css({"border":"1px solid #fff"})
				return true;
			} else {
				$("#yzmspan").html("验证码不正确，请重新输入").css({"color":"red"});
				$("#box3").css({"border":"1px solid red"})
				return false;
			}
		}
}
$(".aptcha").blur(checkyzm);

$(".SignInBtn").click(function() {
	
		
		if(checkusername()&&checkpwd()&&checkyzm()){
			//alert("用户名不存在,可以注册");
				$.ajax({
					type:"POST",
					dataType:"jsonp",
					url:"http://10.9.158.170:8080/API/user/login.aspx",
					data:{username:$("#userName").val(),password:$("#pwd").val()},
					success:function(data){
						console.log(data);
						if(data.result == "ok"){
							location.href="index.html";

						}else{
							alert("登录失败！");

						}
					}
				});
			
			
			
		}else{
			alert("出错了，请重新登录！")
		}
	
})
 
});
