!function(){


var ID = document.URL.match(/(\d+)/i);
if(!ID || !player_config){ return; }

var apiurl = player_config + "?vkey=" + ID[1];


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var 動画URL = xhr.responseXML.querySelector("video src").textContent;

    オトシゴロ.ダウンロード(動画URL);
});


}();
