module.exports = app => {
  const drawings = require('../controllers/drawings.contorller.js');

  app.get('/drawings', drawings.findAll);

  app.get('/drawings/drawingId', drawings.findOne);

  app.put('/drawings/drawingId', drawings.update);

}