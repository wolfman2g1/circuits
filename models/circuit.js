var mongoose =require('mongoose');
/* create circuit schema*/

var CircuitSchema = new mongoose.Schema( {
    
    circuit_id: String,
    circuit_loc: String,
    carrier_block : String,
    assigned_range: String,
    carrier: [ { type: Schema.Types.ObjectId, ref : 'CarrierSchema' }
                                        ]
    });

/* start validation of data */
module.exports = mongoose.model('Circuit', CircuitSchema);
                                        