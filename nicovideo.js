!function(){


var 動画ID = document.URL.match(/watch\/(\w*\d+)/i)[1];
if(!動画ID){ return; }

var apiurl = "http://flapi.nicovideo.jp/api/getflv/" + 動画ID;


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var 動画URL = オトシゴロ.クエリ分解(xhr.responseText).url;
    var 動画ファイル名 = document.querySelector("title").textContent + ".mp4"; //適当

    オトシゴロ.ダウンロード(動画URL, 動画ファイル名);
});


}();
