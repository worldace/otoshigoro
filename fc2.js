$(function($){

var ID = document.URL.match(/\/content\/(\w+)/i);
if(!ID){ return false; }

$.ajax({
    url: "/ginfo.php?otag=1&mimi=" + CryptoJS.MD5(ID[1]+"_"+"gGddgPfeaf_gzyr") + "&v=" + ID[1] + "&upid=" + ID[1],
    success: function(data){
        var query = SplitQueryString(data);
        if(query.filepath){
            var video_url = query.filepath + '?mid=' + query.mid;
            DownloadVideo(video_url);
        }
    }
});


}($.noConflict(true)));
