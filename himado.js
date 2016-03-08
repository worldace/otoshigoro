!function(){

var 動画URL = decodeURIComponent(movie_url);

if(動画URL.indexOf("youtube.com") >= 0 || 動画URL.indexOf("video.fc2.com") >= 0){
    return alert("元サイトからダウンロードしてください");
}

オトシゴロ.ダウンロード(動画URL);


}();
