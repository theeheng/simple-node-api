// routes/index.js
const albumRoutes = require('./album_routes');
module.exports = function(app, db) {
  albumRoutes(app, db);
  // Other route groups could go here, in the future
};