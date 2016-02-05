!function(){

var home    = "https://ss1.xrea.com/musou.s38.xrea.com/d/";
var jquery  = "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
var domain  = document.domain;
var nocache = '?' + (new Date).getTime();
var files   = [];



if(/\.nicovideo\.jp/i.test(domain)){
	files = [jquery, home+"nicovideo.js"+nocache];
}
else if(/video\.fc2\.com/i.test(domain)){
	files = [jquery, home+"lib/md5.js", home+"fc2.js"+nocache];
}
else if(/\.youtube\.com/i.test(domain)){
	files = [jquery, home+"lib/ecl.js", home+"youtube.js"+nocache];
}
else if(/\.xvideos\.com/i.test(domain)){
	files = [jquery, home+"xvideos.js"+nocache];
}
else if(/\.tokyo-porn-tube\.com/i.test(domain)){
	files = [jquery, home+"tokyo-porn-tube.js"+nocache];
}
else if(/\.tokyo-tube\.com/i.test(domain)){
	files = [jquery, home+"tokyo-tube.js"+nocache];
}
else if(/himado\.in/i.test(domain)){
	files = [jquery, home+"himado.js"+nocache];
}
else if(/nosub\.tv/i.test(domain)){
	files = [jquery, home+"nosub.js"+nocache];
}
else if(/anitube\.se/i.test(domain)){
	files = [jquery, home+"anitube.js"+nocache];
}

else{
	return false;
}

LoadScript(files);


function LoadScript(files){
	if(files.length == 0){ return; }

    var file   = files.shift();
	var script = document.createElement('script');
	document.body.appendChild(script);

	script.charset = "UTF-8";
	script.onload  = function(){ LoadScript(files); }
	script.src     = file;
}



function getHome(){
	var elements   = document.getElementsByTagName("script");
	var otoshigoro = elements[elements.length-1];
	var home       = otoshigoro.src.replace(/_\.js\?\d+$/, "");

	otoshigoro.id = "otoshigoro";
	otoshigoro.setAttribute("data-home", home);

	return home;
}

}();


function SplitQueryString(query){
    if(!query){ return false; }

    var result = {};
    var parameters = query.split('&');

    for(var i = 0; i < parameters.length; i++){
        var element = parameters[i].split('=');
        var name    = decodeURIComponent(element[0]);
        var value   = decodeURIComponent(element[1]);

        result[name] = value;
    }
    return result;
}


function DownloadVideo(url, filename){

    var ua  = window.navigator.userAgent.toLowerCase();
    var dl;

    if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
        dl = document.createElement('iframe');
        dl.width  = 1;
        dl.height = 1;
        document.body.appendChild(dl);
        dl.src = url;
    }
    else{
        dl = document.createElement('a');
        dl.href = url;
        dl.download = filename;
        document.body.appendChild(dl);
        dl.click();
    }

}

