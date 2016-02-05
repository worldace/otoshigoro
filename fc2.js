!function($){

var ID = document.URL.match(/\/content\/(\w+)/i);
if(!ID){ return false; }

$.ajax({
    url: "/ginfo.php?otag=1&mimi=" + CryptoJS.MD5(ID[1]+"_"+"gGddgPfeaf_gzyr") + "&v=" + ID[1] + "&upid=" + ID[1],
    success: function(data){
        var query = SplitQueryString(data);
        if(query.filepath){
            var video_url = query.filepath + '?mid=' + query.mid;
            $("<iframe></iframe>", {src:video_url, width:1, height:1}).appendTo("body");
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
