!function($){

var video_url = jwPlayer.config.sources[1].file || jwPlayer.config.sources[0].file;

if(video_url){
    DownloadVideo(video_url);
}

}($.noConflict(true));