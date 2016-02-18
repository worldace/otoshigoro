!function(){


var ID = document.URL.match(/\/content\/(\w+)/i);
if(!ID){ return; }

var apiurl = "/ginfo.php?otag=1&mimi=" + CryptoJS.MD5(ID[1]+"_gGddgPfeaf_gzyr") + "&v=" + ID[1] + "&upid=" + ID[1];


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var query = オトシゴロ.クエリ分解(xhr.responseText);

    if(!query.filepath){ return; }
    var 動画URL = query.filepath + '?mid=' + query.mid;
 
    オトシゴロ.ダウンロード(動画URL);
});



}();

