module.exports = app => {
  const events = require('../controllers/events.controller');

  app.get('/events', events.findAll);
}