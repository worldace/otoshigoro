$(function($){


var ID = document.URL.match(/\/video(\d+)\//i);
if(!ID){ return false; }

var flashvars = $("#flash-player-embed").attr("flashvars");
if(flashvars) {
    var query = オトシゴロ.クエリ分解(flashvars);
    if(query.flv_url) {
        var video_url = query.flv_url;
        オトシゴロ.ダウンロード(video_url);
    }
}


}($.noConflict(true)));
