window.onload=function(){
  alert("I Love Flutter");
	var body = document.body;//document.getElementsByName("body");
	// var body = document.getElementById("top");
	var main = document.getElementsByClassName("l-side-margins")[0];
	// var footer = ;
	main.removeChild(main.getElementsByClassName("content-footer")[0]);
	console.log(main);
	console.log(body);

	var del = docl=document.getElementsByClassName("element-rich-link")[0];
	del.parentNode.removeChild(del);

	// body.parentNode.removeNode(body);

	// li = document.createElement('li');  
	// li.className = "xxx";
	// // li.appendChild(main[0])

	// console.log(li);
	// console.log(main[0]);
	// body.innerHTML  = "";
	console.log(body);
	console.log(body.childNodes.length);
	// body.appendChild(main[0])
	// body.insertNode(main[0])
	
	// body.appendChild(main[0]);
	//body.replaceChild (main); //= main.toString();
	
	// console.log(body.childNodes[1]);
	// console.log(body.childNodes[3]);
	// console.log(body.childNodes[5]);

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

	// body.childNodes.map(function(item, key){
	// 	if(item != main) {
	// 		body.removeChild(item);
	// 	}
	// })	

	// body.removeChild(body.childNodes[1]);
	// body.removeChild(body.childNodes[3]);
	// body.removeChild(body.childNodes[5]);

	console.log(body);
	console.log(body.childNodes.length);
}