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

module.exports = mongoose.model ('Circuit', CircuitSchema);
