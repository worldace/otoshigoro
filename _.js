var オトシゴロ = {


ホームURL: "https://ss1.xrea.com/musou.s38.xrea.com/d/",


ルーター: function(host){

    var nocache = '?' + Date.now();

    if(host.indexOf("nicovideo.jp") >= 0) return [オトシゴロ.ホームURL+"nicovideo.js"+nocache];
    if(host.indexOf("video.fc2.com") >= 0) return [オトシゴロ.ホームURL+"lib/md5.js", オトシゴロ.ホームURL+"fc2.js"+nocache];
    if(host.indexOf("youtube.com") >= 0) return [オトシゴロ.ホームURL+"lib/ecl.js", オトシゴロ.ホームURL+"youtube.js"+nocache];
    if(host.indexOf("xvideos.com") >= 0) return [オトシゴロ.ホームURL+"xvideos.js"+nocache];
    if(host.indexOf("tokyo-porn-tube.com") >= 0) return [オトシゴロ.ホームURL+"tokyo-porn-tube.js"+nocache];
    if(host.indexOf("tokyo-tube.com") >= 0) return [オトシゴロ.ホームURL+"tokyo-tube.js"+nocache];
    if(host.indexOf("himado.in") >= 0) return [オトシゴロ.ホームURL+"himado.js"+nocache];
    if(host.indexOf("nosub.tv") >= 0) return [オトシゴロ.ホームURL+"nosub.js"+nocache];
    if(host.indexOf("anitube.se") >= 0) return [オトシゴロ.ホームURL+"anitube.js"+nocache];

    return [];
},


ローダー: function(files){

    if(files.length == 0){ return; }

    var file   = files.shift();
    var script = document.createElement('script');
    document.body.appendChild(script);
    script.addEventListener('load', function(){ オトシゴロ.ローダー(files); });
    script.setAttribute("class", "otoshigoro");
    script.charset = "UTF-8";
    script.src     = file;
},


ダウンロード: function(url, filename){

    if(!url){ return; }

    var ua  = window.navigator.userAgent.toLowerCase();
    var dl;

    if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
        dl = document.createElement('iframe');
        dl.setAttribute("class", "otoshigoro");
        dl.width  = 0;
        dl.height = 0;
        document.body.appendChild(dl);
        dl.src = url;
    }
    else if (ua.indexOf('firefox') != -1){
        dl = document.createElement('a');
        dl.setAttribute("class", "otoshigoro");
        dl.href = url;
        dl.download = filename;
        dl.target = "_blank";
        document.body.appendChild(dl);
        dl.click();
    }
    else{
        dl = document.createElement('a');
        dl.setAttribute("class", "otoshigoro");
        dl.href = url;
        dl.download = filename;
        document.body.appendChild(dl);
        dl.click();
    }
    
    console.log(url);
},


クエリ分解: function(str){

    if(!str){ return; }

    var result = {};
    var query  = str.split('&');

    for(var i = 0; i < query.length; i++){
        var key   = decodeURIComponent(query[i].split('=')[0]);
        var value = decodeURIComponent(query[i].split('=')[1]);
        result[key] = value;
    }
    return result;
},


APIアクセス: function(apiurl, callback){

    var xhr = new XMLHttpRequest();

    //クロスドメイン対策(ニコニコ動画用)
    if(apiurl.indexOf("http") == 0 || apiurl.indexOf("//") == 0){
        if(apiurl.split("/")[2] != document.domain){
            xhr.withCredentials = true;
        }
    }

    xhr.open("GET", apiurl);
    xhr.addEventListener("load", function(){
        if(xhr.status == 200) { callback(xhr); }
    });
    xhr.send();
}


};


オトシゴロ.ローダー(オトシゴロ.ルーター(document.domain));