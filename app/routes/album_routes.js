// note_routes.js
const data =  require('./albums.json');

module.exports = function(app, db) {
  app.get('/albums', (req, res) => {
    // You'll create your note here.
    res.send(data)
  });
};