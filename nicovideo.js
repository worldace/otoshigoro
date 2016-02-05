!function($){


var ID = document.URL.match(/watch\/(\w*\d+)/i);
if(!ID){ return false; }

$.ajax({
    url: "http://flapi.nicovideo.jp/api/getflv/" + ID[1],
    xhrFields: {withCredentials: true},
    success: function(data){
        var query = SplitQueryString(data);
        if(!query.url){ return false; }

        var video_url   = query.url;
        var video_title = $("title").text(); //面倒なので
        var video_type  = 'mp4'; //面倒なので

        var download = "";
        var useragent = window.navigator.userAgent.toLowerCase();
        if (useragent.indexOf('msie') != -1 || useragent.indexOf('trident') != -1) {
            download = $("<iframe></iframe>", {src:video_url, width:1, height:1});
            download.appendTo("body");
        }
        else if (useragent.indexOf('firefox') != -1) {
            download = $("<a></a>", {href:video_url, download:video_title+'.'+video_type, target:"_blank"});
            download.appendTo("body");
            download[0].click();
        }
        else{
            download = $("<a></a>", {href:video_url, download:video_title+'.'+video_type});
            download.appendTo("body");
            download[0].click();
        }
    }
});


function SplitQueryString(query){
    if(!query){ return false; }

    var result = {};
    var parameters = query.split('&');

    for(var i = 0; i < parameters.length; i++){
        var element = parameters[i].split('=');
        var name    = decodeURIComponent(element[0]);
        var value   = decodeURIComponent(element[1]);

        result[name] = value;
    }
    return result;
}


}($.noConflict(true));
