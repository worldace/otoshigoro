!function($){


var ID = document.URL.match(/\/video(\d+)\//i);
if(!ID){ return false; }

var flashvars = $("#flash-player-embed").attr("flashvars");
if(flashvars) {
    var query = SplitQueryString(flashvars);
    if(query.flv_url) {
        var video_url = query.flv_url;
        $("<iframe></iframe>", {src:video_url, width:1, height:1}).appendTo("body");
    }
}


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
