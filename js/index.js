window.onload=function(){
	unlogin();
	var cookieArr=document.cookie.split(";");
	if(document.cookie.indexOf("login=1")!=-1){
		login();
	}
}

function dengchu(){
	// var child=$("#myframe")[0].contentWindow;
	document.cookie="login=0";
	unlogin();
}

function login(){
	document.cookie="login=1";
	$("#myframe").contents().find("#plz_login").hide();
	$("#myframe").contents().find("#avatar").show();
	$("#myframe").contents().find("#username").show();
	$("#myframe").contents().find("#infocolumn").show();
	$("#sign").hide();
	$("#logout").show();
}

function toLogin(){
	var myframe=window.document.getElementById("myframe");
	myframe.setAttribute("src","login.html");
}

function showTag(){
	var myframe=window.document.getElementById("myframe");
	myframe.setAttribute("src","tag.html");
}

function showInfo(){
	var myframe=window.parent.document.getElementById("myframe");  //window.parent获取当前（iframe子页面）父元素的页面
	console.log(myframe);
	myframe.setAttribute("src","myinformation.html");
}

function showNew(){
	var myframe=window.document.getElementById("myframe");
	myframe.setAttribute("src","new.html");
}

function logout(){
	document.cookie="login=0";
	unlogin();
}
		
function unlogin(){
	$("#myframe").contents().find("#plz_login").show();
	$("#myframe").contents().find("#avatar").hide();
	$("#myframe").contents().find("#username").hide();
	$("#myframe").contents().find("#infocolumn").hide();
	$("#logout").hide();
	$("#sign").show();
}