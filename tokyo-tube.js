!function(){


var 動画ID = document.URL.match(/(\d+)/i)[1];
if(!動画ID || !player_config){ return; }

var apiurl = player_config + "?vkey=" + 動画ID;


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var 動画URL = xhr.responseXML.querySelector("video src").textContent;

    オトシゴロ.ダウンロード(動画URL);
});


}();
