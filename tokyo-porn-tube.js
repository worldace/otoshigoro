!function($){

var ID = document.URL.match(/(\d+)/i);
if(!ID){ return false; }
if(!player_config){ return false; }

$.ajax({
    url: player_config + "?vkey=" + ID[1],
    dataType: "xml",
    success: function(xml){
        var video_url = $(xml).find("video").find("src").text();
        if(video_url){
            $("<iframe></iframe>", {src:video_url, width:1, height:1}).appendTo("body");
        }
    }
});


}($.noConflict(true));
