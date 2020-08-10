!function(){

var json = document.querySelector("#js-initial-watch-data").getAttribute("data-api-data");
json = JSON.parse(json);

オトシゴロ.ダウンロード(json.smileInfo.url, json.originalTitle + '.mp4');


}();
