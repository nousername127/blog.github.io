function check(){
	var name,psw;
	name=document.getElementById("name").value;
	psw=document.getElementById("psw").value;
	if(name=="admin"&&psw=="123"){
		alert("登录成功！");
		var exp=new Date();
		exp.setTime(exp.getTime()+5*3600*1000);  //设置到期时间5小时
		document.cookie="login=1;expires="+exp.toGMTString();
		backToPage();
	}
	else{
		alert("用户名或密码出错！");
		return false;
	}
}
function backToPage(){
	parent.location.href="loader.html";
}