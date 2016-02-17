!function(){


var ID = document.URL.match(/(\d+)/i);
if(!ID || !player_config){ return false; }

var apiurl = player_config + "?vkey=" + ID[1];

var xhr = new XMLHttpRequest();
xhr.open("GET", apiurl);
xhr.addEventListener("load", function(){
    var video_url = xhr.responseXML.querySelector("video src").textContent;
    //<xml><video><src>動画URL</src></video></xml>

    if(video_url){
        オトシゴロ.ダウンロード(video_url);
    }
});
xhr.send();


}();
