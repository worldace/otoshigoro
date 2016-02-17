!function(){


var ID = document.URL.match(/\/content\/(\w+)/i);
if(!ID){ return false; }

var apiurl = "/ginfo.php?otag=1&mimi=" + CryptoJS.MD5(ID[1]+"_"+"gGddgPfeaf_gzyr") + "&v=" + ID[1] + "&upid=" + ID[1];


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var query = オトシゴロ.クエリ分解(xhr.responseText);
    if(query.filepath){
        var video_url = query.filepath + '?mid=' + query.mid;

        オトシゴロ.ダウンロード(video_url);
    }
});



}();

