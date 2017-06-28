var UI = require('ui');

var ws = new WebSocket('ws://ec2-52-214-173-48.eu-west-1.compute.amazonaws.com:8000');    // Replace with IP of computer running server

ws.onmessage = function (event) { 

    var card = new UI.Card();
    card.title('Data from server');
    card.body(event.data);
    card.show();
};


var main = new UI.Card({
  title: 'Connected',
  icon: 'images/menu_icon.png',
  subtitle: 'Waiting for data'
});
main.show();