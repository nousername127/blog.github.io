window.onload=function(){
	var data=getCookie("username");
	var text=document.createTextNode(data);
	var info_username=document.getElementById("info_username");
	info_username.appendChild(text);
	
	data=getCookie("mail");
	text=document.createTextNode(data);
	var info_mail=document.getElementById("info_mail");
	info_mail.appendChild(text);
	
	data=getCookie("gender");
	console.log("性别是"+data);
	text=document.createTextNode(data);
	var info_mail=document.getElementById("info_gender");
	info_mail.appendChild(text);
	
	data=getCookie("address");
	text=document.createTextNode(data);
	var info_mail=document.getElementById("info_address");
	info_mail.appendChild(text);
}

function edit(obj){   //设置可输入框
		var div=obj.parentNode.parentNode;
		var span=div.children[1];
		var data=span.innerHTML;
		var input=document.createElement("input");
		input.setAttribute("type","text");
		input.setAttribute("style","width:30%");
		input.setAttribute("value",data);
		input.setAttribute("onblur","edit1(this)");
		span.replaceWith(input);
		var span_edit=div.children[2];
		console.log(span_edit);
		span_edit.setAttribute("style","visibility:hidden");
}
function edit1(obj){    //还原
	if(check(obj)==false)
		return false;
	var div=obj.parentNode;
	var data=obj.value;
	var span=document.createElement("span");
	var text=document.createTextNode(data);
	span.appendChild(text);
	obj.replaceWith(span);
	var span_edit=div.children[2];
	span_edit.removeAttribute("style");
}

function check(obj){  //判断是否合法
	var row=obj.parentNode;
	var type=row.children[0].innerHTML;
	var data=obj.value;
	if(type.indexOf("用户名")!=-1){
		if(data.length<3|data.length>8){
			alert("用户名错误！");
			return false;
		}
		else{
			document.cookie="username="+data;
			return true;
		}
	}
	if(type.indexOf("邮箱")!=-1){
		if(data.indexOf('@')==-1){
			alert("邮箱名错误！");
			return false;
		}
		else{
			document.cookie="mail="+data;
			return true;
		}
	}
	if(type.indexOf("性别")!=-1){
		if(data!='男'&&data!='女'){
			alert("性别错误！");
			return false;
		}
		else{
			document.cookie="gender="+data;
			return true;
		}
	}
	else{
		document.cookie="address="+data;
		return true;
	}
}
function getCookie(name){
	var list=document.cookie.split(";");
	for(var i=0;i<list.length;i++){
		console.log(list[i]);
	}
	if(list[0].indexOf(name)!=-1)  //分隔符为 ；
		return list[0].substring(name.length+1,list[0].length);
	for(var i=1;i<list.length;i++){
		if(list[i].indexOf(name)!=-1)
			return list[i].substring(name.length+2,list[i].length);
	}
	return "";
}
