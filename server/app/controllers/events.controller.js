const Evnets = require("../models/events.models");

exports.findAll = (req,res) => {
  Evnets.getAll(async (err, data) => {
    if (err) {
      res.status(500).send({
        message:
        error.message ||  "Some error occurred while retrieving contacts."
      });
    }
    else {
      const total = await data.length;
      res.header('Access-Control-Expose-Headers', 'X-Total-Count');
      res.set('X-Total-Count', total);
      res.send(data);
    }
  });
}

exports.findList = ( req, res ) => { 
  Evnets.getList(async ( err, data) => {
    if (err) {
      res.status(500).send({
        message:
        error.message ||  "Some error occurred while retrieving contacts."
      });
    }
    else {
      const total = await data.length;
      res.header('Access-Control-Expose-Headers', 'X-Total-Count');
      res.set('X-Total-Count', total);
      res.send(data);
    }
  })
}

exports.findOne = (req,res) => {
  console.log(req.params.eventsId)
}