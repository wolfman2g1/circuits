var mongoose =require('mongoose');
var carrier = require('carrier');
/* create circuit schema*/

var CircuitSchema = new mongoose.Schema( {

    circuit_id : { type : String, required : true},
    circuit_loc: { type : String, required : true},
    carrier_block :{ type : String, required : true},
    assigned_range: { type : String, required : true},
    carrier: [ { type: Schema.Types.ObjectId, ref : 'CarrierSchema' }
                                        ]
    });

/* start validation of data */




module.exports = mongoose.model('Circuit', CircuitSchema);
