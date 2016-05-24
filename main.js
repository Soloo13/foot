// http://api.football-data.org/v1/soccerseasons HTTP GET AJAX

var url = "http://localhost:1337/";

var options = {
  type: "GET",
  url: url,
  crossDomain : true,
};

$.ajax(options).done(function(dataText) {

  var seasons = JSON.parse(dataText);

  setTimeout(function(){
    document.querySelector('vaadin-grid').items = seasons;
  }, 2000);
});


