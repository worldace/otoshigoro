!function($){

var m = document.body.innerHTML.match(/\/lianyue\/\?\/url\/([^\&]+)/i);
var video_url = "http://www.nosub.tv/wp-content/plugins/mukiopress/lianyue/?/url/" + RegExp.$1;

DownloadVideo(video_url);


}($.noConflict(true));
