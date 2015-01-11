var mongoose =require('mongoose');
/* create circuit schema*/

var CircuitSchema = new mongoose.Schema( {
    
    circuit_id: String,
    circuit_loc: String,
    carrier: [ { type: Schema.Types.ObjectId, ref : 'CarrierSchema' }
                                        ]
    });
module.exports = mongoose.model('Circuit', CircuitSchema);
                                        