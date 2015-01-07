var mongoose = require('mongoose');

/* create the carrier Schema for api access */
var CarrierSchema = new mongoose.Schema({
    carrier_name: String,
    support_email: String,
    support_num: String,
    carrier_street: String,
    carrier_city: String,
    carrier_state: String,
    carrier_postal: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now},
    
});
module.exports = mongoose.model('Carrier', CarrierSchema);