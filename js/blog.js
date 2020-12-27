window.onload=function(){
	var routeView=null;  //路由视图
	window.addEventListener('hashchange',function(){  //监听路由变化
		var routeView=document.getElementById("center");
		switch(location.hash){  //判断路由
			case '#/page1':
				add(0);
				break;
			case '#/page2':
				add(1);
				break;
			default:
				return;
		}
	})
}
	
var url="json/blog.json";
var request=new XMLHttpRequest();
request.open("get",url);
request.send(null);
request.onload=function(){
	if(request.status==200){
		var data=JSON.parse(request.responseText);  //request.responseText
		for(var i=0;i<data.length;i++){
			var res=template("blog_template",data[i]);
			document.getElementById("center").innerHTML+=res;
		}
	}
}
	
url="json/view.json";
var request1=new XMLHttpRequest();
request1.open("get",url);
request1.send(null);
request1.onload=function(){
	if(request1.status==200){
		data=JSON.parse(request1.responseText);  //request.responseText
		/* console.log(data); */
		for(var i=0;i<data.length;i++){
			var res=template("view_template",data[i]);
			/* console.log(res); */
			document.getElementById("right").innerHTML+=res;
			// center.innerHTML+=res;
		}
	}
}

function add(i){  //获取详情页内容
	var url="json/detail.json";
	var request=new XMLHttpRequest();
	request.open("get",url);
	request.send(null);
	request.onload=function(){
		
		console.log("12");
		if(request.status==200){
			var data=JSON.parse(request.responseText);
			var res=template("detail_template",data[i]);
			document.getElementById('center').innerHTML=res;
		}
	}
}

function getCookie(name){
	var cookieArr=document.cookie.split(";");
	if(!cookieArr.length){
		return '';
	}
	for(var i=0;i<cookieArr.length;i++){
		var key=$.trim(cookieArr[i]).split('=')[0];
		var value=$.trim(cookieArr[i]).split('=')[1];
		if(key==value){
			return value;
		}
	}
}

function showInfo(){
	var myframe=window.parent.document.getElementById("myframe");  //window.parent获取当前（iframe子页面）父元素的页面
	console.log(myframe);
	myframe.setAttribute("src","myinformation.html");
}
