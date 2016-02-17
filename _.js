var オトシゴロ = {


ホームURL: "https://ss1.xrea.com/musou.s38.xrea.com/d/",


ルーター: function(host){

    var files   = [];
    var nocache = '?' + Date.now();

    if(/nicovideo\.jp/i.test(host)){
    	files = [this.ホームURL+"nicovideo.js"+nocache];
    }
    else if(/video\.fc2\.com/i.test(host)){
    	files = [this.ホームURL+"lib/md5.js", this.ホームURL+"fc2.js"+nocache];
    }
    else if(/youtube\.com/i.test(host)){
    	files = [this.ホームURL+"lib/ecl.js", this.ホームURL+"youtube.js"+nocache];
    }
    else if(/xvideos\.com/i.test(host)){
    	files = [this.ホームURL+"xvideos.js"+nocache];
    }
    else if(/tokyo-porn-tube\.com/i.test(host)){
    	files = [this.ホームURL+"tokyo-porn-tube.js"+nocache];
    }
    else if(/tokyo-tube\.com/i.test(host)){
    	files = [this.ホームURL+"tokyo-tube.js"+nocache];
    }
    else if(/himado\.in/i.test(host)){
    	files = [this.ホームURL+"himado.js"+nocache];
    }
    else if(/nosub\.tv/i.test(host)){
    	files = [this.ホームURL+"nosub.js"+nocache];
    }
    else if(/anitube\.se/i.test(host)){
    	files = [this.ホームURL+"anitube.js"+nocache];
    }

    return files;
},


ローダー: function(files){

	if(files.length == 0){ return; }
    
    var that   = this;
    var file   = files.shift();
	var script = document.createElement('script');
	document.body.appendChild(script);

	script.charset = "UTF-8";
	script.onload  = function(){ that.ローダー(files); };
	script.src     = file;
},


ダウンロード: function(url, filename){

    var ua  = window.navigator.userAgent.toLowerCase();
    var dl;

    if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
        dl = document.createElement('iframe');
        dl.width  = 1;
        dl.height = 1;
        document.body.appendChild(dl);
        dl.src = url;
    }
    else if (ua.indexOf('firefox') != -1){
        dl = document.createElement('a');
        dl.href = url;
        dl.download = filename;
        dl.target = "_blank";
        document.body.appendChild(dl);
        dl.click();
    }
    else{
        dl = document.createElement('a');
        dl.href = url;
        dl.download = filename;
        document.body.appendChild(dl);
        dl.click();
    }
    
    //console.log(url);
},


クエリ分解: function(str){

    if(!str){ return false; }

    var result = {};
    var parameters = str.split('&');

    for(var i = 0; i < parameters.length; i++){
        var element = parameters[i].split('=');
        var name    = decodeURIComponent(element[0]);
        var value   = decodeURIComponent(element[1]);

        result[name] = value;
    }
    return result;
}


};


オトシゴロ.ローダー(オトシゴロ.ルーター(document.domain));