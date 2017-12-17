

let newStyle = document.createElement('style');

let font = "data/tommys.woff";

let url = chrome.extension.getURL(font);

let color = function(){
	return Math.floor(Math.random()*16777215).toString(16);
}

newStyle.appendChild(document.createTextNode(`
@font-face{
	font-family: "my_font";
	src: local("f"), url("${url}") format("woff") ;
}

p{
	font-family:"my_font";
	color: #${color()};
	font-size:50px !important;
}
`));

document.head.appendChild(newStyle);
