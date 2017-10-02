window.onload=function(){
	var body = document.body;//document.getElementsByName("body");
	// var body = document.getElementById("top");
	var main = document.getElementsByClassName("l-side-margins")[0];
	// var footer = ;
	main.removeChild(main.getElementsByClassName("content-footer")[0]);
	console.log(main);
	console.log(body);

	var del = document.getElementsByClassName("element-rich-link")[0];
	del.parentNode.removeChild(del);

	setTimeout(function(){
			del = document.getElementsByClassName("js-ad-slot");

			console.log(del);

			for (var i =  0; i < del.length; i ++) {
				// body.childNodes[i]
				// console.log(body.childNodes.length);
				// console.log(i);

				while (del[i]) {
					// statement
					// console.log(body.childNodes[i]);
					del[i].parentNode.removeChild(del[i]);
				}
				
			}

			del = document.getElementsByClassName("element")[0];
			if(del)
				del.parentNode.removeChild(del);
	}, 5000)

	console.log(body);
	console.log(body.childNodes.length);

	for (var i =  0; i < body.childNodes.length; i ++) {
		// body.childNodes[i]
		console.log(body.childNodes.length);
		console.log(i);

		while (body.childNodes[i] && body.childNodes[i] != main) {
			// statement
			console.log(body.childNodes[i]);
			body.removeChild(body.childNodes[i]);
		}
	}

	console.log(body);
	console.log(body.childNodes.length);

	
	var content = document.getElementsByClassName("content__main-column")[0];

	console.log(content);

	var page = parseInt(body.scrollHeight/window.screen.availHeight);

	for (var i = 0; i < page; i++) {

		(function(i) {
			var div = document.createElement("div");
			var button = document.createElement("button");
			var t=document.createTextNode(i);
			button.appendChild(t);

			div.appendChild(button);

			button.style.position = 'fixed';
			button.style.opacity = '0.6';
			// button.style.float = 'right';
			button.style.right = '0'
			button.style.bottom = 50 * (page - i) + 'px';
			button.style.zIndex = "1000";
			button.onclick = function() {
				// scroll(0,body.scrollHeight)
				
				scroll(0,i * window.screen.availHeight);
			}

			console.log(body.scrollHeight);

			body.appendChild(button);
		})(i);
	}



	console.log(body);

	body.onmouseup = function(e){
		console.log(e);
		txt = window.getSelection();
		console.log(txt.toString());

		var xmlhttp;
		if (window.XMLHttpRequest)
		{
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}
		else
		{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				// document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
				
				var res = JSON.parse(xmlhttp.responseText);
				console.log(res);
			}
		}
		xmlhttp.open("GET","https://api.shanbay.com/bdc/search/?word=" + txt, true);
		xmlhttp.send();
	}
}