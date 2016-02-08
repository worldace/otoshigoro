$(function($){


var ID = document.URL.match(/watch\/(\w*\d+)/i);
if(!ID){ return false; }

$.ajax({
    url: "http://flapi.nicovideo.jp/api/getflv/" + ID[1],
    xhrFields: {withCredentials: true},
    success: function(data){
        var query = SplitQueryString(data);
        if(!query.url){ return false; }

        var video_url  = query.url;
        var video_file = $("title").text() + '.mp4'; //面倒なので

        DownloadVideo(video_url, video_file);
    }
});



}($.noConflict(true)));
