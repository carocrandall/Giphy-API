var apiBase = "http://api.giphy.com/v1/gifs/";
var apiKey = "&api_key= ";


var apiTranslate = "translate?"
var apiSearch = "search?";
var apiTrending ="trending?"


var searchAdd = "&q=";
var translateAdd = "&s=";

var input;
var inputTranslate;



function setup() {
  var button = select('#submit');
  button.mousePressed(getInput);
  input = select('#searchterm');
  
  var buttonTrend = select('#submitTrend');
  buttonTrend.mousePressed(getInputTrend);
  
  
  
  
}


function getInput () {
  var url = apiBase + apiSearch + apiKey + searchAdd  + input.value();
  loadJSON(url, gotData);
}

function getInputTrend () {
  var url = apiBase + apiTrending + apiKey;
  loadJSON(url, gotDataTrend);
}



function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.fixed_height.url);
  }
}


function gotDataTrend(giphyTrend) {
  for (var i = 0; i < giphyTrend.data.length; i++) {
    createImg(giphyTrend.data[i].images.fixed_height.url);
  }
}




