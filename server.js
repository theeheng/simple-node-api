// server.js
const express        = require('express');
const bodyParser     = require('body-parser');


let expressapp = express();
expressapp.use(bodyParser.json({type: 'application/json'}));


require('./app/routes')(expressapp, {});

if (module === require.main) {
  // [START server]
  // Start the server
  let server = expressapp.listen(process.env.PORT || 8080, function () {
    let port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = expressapp;

/*
app.listen(port, () => {
  console.log('We are live on ' + port);
});
*/