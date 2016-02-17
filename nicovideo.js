!function(){


var ID = document.URL.match(/watch\/(\w*\d+)/i);
if(!ID){ return false; }

var apiurl = "http://flapi.nicovideo.jp/api/getflv/" + ID[1];

var xhr = new XMLHttpRequest();
xhr.open("GET", apiurl);
xhr.withCredentials = true;
xhr.addEventListener("load", function(){
    var query = オトシゴロ.クエリ分解(xhr.responseText);
    if(query.url){
       var video_url  = query.url;
       var video_file = "";

        オトシゴロ.ダウンロード(video_url, video_file);
    }
});
xhr.send();


}();
