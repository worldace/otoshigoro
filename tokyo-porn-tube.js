!function(){


var ID = document.URL.match(/(\d+)/i);
if(!ID || !player_config){ return false; }

var apiurl = player_config + "?vkey=" + ID[1];

var xhr = new XMLHttpRequest();
xhr.open("GET", apiurl);
xhr.addEventListener("load", function(){
    var xml = xhr.responseXML;
    var video_url = xml.getElementsByTagName("video")[0].getElementsByTagName("src")[0].firstChild.nodeValue;
    //<xml><video><src>動画URL</src></video></xml> DOM操作はワケワカラン

    if(video_url){
        オトシゴロ.ダウンロード(video_url);
    }
});
xhr.send();


}();
