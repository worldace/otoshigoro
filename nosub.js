$(function($){

var video_url = オトシゴロ.クエリ分解(VideoList[getVideoIndex()].flashvars).file;

if(video_url){
    オトシゴロ.ダウンロード(video_url);
}


}($.noConflict(true)));
