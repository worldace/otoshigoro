!function($){

if(movie_url){
    var video_url = decodeURIComponent(movie_url);
    $("<iframe></iframe>", {src:video_url, width:1, height:1}).appendTo("body");
}



}($.noConflict(true));
