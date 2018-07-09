// note_routes.js
const data =  require('./albums.json');
const _ = require('lodash');

module.exports = function(app, db) {
  app.get('/albums', (req, res) => {
    // You'll create your note here.
    res.send(data)
  });

  app.get('/search', (req, res) => {
    // You'll create your note here.

    if(req.query['name'])
    {
		var filtered = _.filter(data, function(album){
    return album.title.indexOf(req.query['name'])>-1;
    });
		res.send(filtered)
	}
    else
    {
    	res.send(data)
	}
  });
};