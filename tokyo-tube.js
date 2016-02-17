!function(){


var ID = document.URL.match(/(\d+)/i);
if(!ID || !player_config){ return false; }

var apiurl = player_config + "?vkey=" + ID[1];


オトシゴロ.APIアクセス(apiurl, function(xhr){
    var video_url = xhr.responseXML.querySelector("video src").textContent;

    if(video_url){
        オトシゴロ.ダウンロード(video_url);
    }
});


}();
