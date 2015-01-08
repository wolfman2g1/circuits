var mongoose = require('mongoose');

/* create circuit shema */

var CircuitSchema = new mongoose.Schema({
    circuit_id: { type: String, required: true},
    circuit_loc: { type: String, required: true},
    circuit_port: String,
    circuit_car_port: String,
    created_at: {type: Date },
    updated_at: { type: Date},
});

/* get the updated at time to work */

CircuitSchema.pre('save', fucntion(next){
      now = new Date();
      this.updated_at = now ;
if (!this.created_at) {
    this.created_at = now;
}
next();
});
module.exports = mongoose.model ('Circuit', CircuitSchema);
