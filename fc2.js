!function(){


var 動画ID = document.URL.match(/\/content\/(\w+)/i)[1];
if(!動画ID){ return; }

var apiurl = "/ginfo.php?otag=1&mimi=" + CryptoJS.MD5(動画ID+"_gGddgPfeaf_gzyr") + "&v=" + 動画ID + "&upid=" + 動画ID;


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var query = オトシゴロ.クエリ分解(xhr.responseText);

    if(!query.filepath){ return; }
    var 動画URL = query.filepath + '?mid=' + query.mid;
 
    オトシゴロ.ダウンロード(動画URL);
});



}();

