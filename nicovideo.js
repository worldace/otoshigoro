!function(){


var ID = document.URL.match(/watch\/(\w*\d+)/i);
if(!ID){ return false; }

var apiurl = "http://flapi.nicovideo.jp/api/getflv/" + ID[1];


オトシゴロ.APIアクセス(apiurl, function(data){
    var query = オトシゴロ.クエリ分解(data);
    if(query.url){
       var video_url  = query.url;
       var video_file = "";

        オトシゴロ.ダウンロード(video_url, video_file);
    }
});


}();
