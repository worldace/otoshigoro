!function($){

var m = document.body.innerHTML.match(/\/lianyue\/\?\/url\/([^\&]+)/i);
var video_url = "http://www.nosub.tv/wp-content/plugins/mukiopress/lianyue/?/url/" + RegExp.$1;

$("<iframe></iframe>", {src:video_url, width:1, height:1}).appendTo("body");


}($.noConflict(true));
