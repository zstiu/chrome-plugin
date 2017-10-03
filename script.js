window.onload=function(){
	var body = document.body;//document.getElementsByName("body");
	// var body = document.getElementById("top");
	var main = document.getElementsByClassName("l-side-margins")[0];
	// var footer = ;
	main.removeChild(main.getElementsByClassName("content-footer")[0]);

	var del = document.getElementsByClassName("element-rich-link")[0];
	del.parentNode.removeChild(del);

	setTimeout(function(){
			del = document.getElementsByClassName("js-ad-slot");

			for (var i =  0; i < del.length; i ++) {
				while (del[i]) {
					del[i].parentNode.removeChild(del[i]);
				}
				
			}

			del = document.getElementsByClassName("element")[0];
			if(del)
				del.parentNode.removeChild(del);
	}, 2000)


	for (var i =  0; i < body.childNodes.length; i ++) {
		// body.childNodes[i]

		while (body.childNodes[i] && body.childNodes[i] != main) {
			// statement
			body.removeChild(body.childNodes[i]);
		}
	}

	
	var content = document.getElementsByClassName("content__main-column")[0];

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

			body.appendChild(button);
		})(i);
	}


	var _div;

	body.onmousedown = function(e){
		if(_div){
			body.removeChild(_div);
			_div = undefined;
		}
	}

	body.onmouseup = function(e){
		txt = window.getSelection();

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

				if(!res.status_code){
					_div = document.createElement("div");
					_div.innerHTML = res.data.cn_definition.defn;
					_div.style.position = 'absolute';
					_div.style.top = e.pageY + 'px';
					_div.style.left = e.pageX + 'px';
					_div.style.backgroundColor = 'pink';
					_div.style.opacity = '0.8';
					_div.style.border = '2px';
					_div.style.borderRadius = '1px';

					_div.style.zIndex = "1000";

					_div.onmousedown = function(e){
						if(e && e.stopPropagation){
						  //W3C取消冒泡事件
						  e.stopPropagation();
						  }else{
						  //IE取消冒泡事件
						  window.event.cancelBubble = true;
						  }
					}

					_div.onmouseup = function(e){
						if(e && e.stopPropagation){
						  //W3C取消冒泡事件
						  e.stopPropagation();
						  }else{
						  //IE取消冒泡事件
						  window.event.cancelBubble = true;
						  }
					}

					var laba = document.createElement("button");
					var img = document.createElement("img");
					img.src = "https://cdn-img.easyicon.net/png/12013/1201363.gif";
					img.style.width = img.style.height = "20px";
					laba.style.padding = '0';
					laba.style.width = laba.style.height = "24px";
					laba.appendChild(img);
					_div.appendChild(laba);

					laba.onclick = function(){
						var au = document.createElement("audio");
						au.preload="auto";
						au.src = "https" + res.data.audio.substring(4)
						au.play();
					}

					body.appendChild(_div);
				}

				

			}
		}
		xmlhttp.open("GET","https://api.shanbay.com/bdc/search/?word=" + txt, true);
		xmlhttp.send();
	}
}