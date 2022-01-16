const sql = require('./db.js')

//constructor
const Events = (events) => {
  this.id = events.event_id,
  this.machin = events.machine_id,
  this.draw_id = events.draw_id,
  this.draw_id_origin = events.draw_id_origin,
  this.event_code = events.event_code,
  this.result = envents.draw_result,
  this.date = events.event_date
}

Events.getAll = result => {
  sql.query('SELECT * FROM thunder_lottery.lottery_drawings_test;', (err,res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null,res);
  })
}

Events.getList = result => {
  sql.query('')
}