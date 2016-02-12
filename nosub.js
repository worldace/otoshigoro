$(function($){

var video_url = SplitQueryString(VideoList[getVideoIndex()].flashvars).file;

if(video_url){
    DownloadVideo(video_url);
}


}($.noConflict(true)));
