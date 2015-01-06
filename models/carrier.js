var mongoose = require('mongoose');

/* create the carrier Schema for api access */
var CarrierSchema = new mongoose.Schema({
    carrier_name: String,
    support_email: String,
    support_num: String
});
module.exports = mongoose.model('Carrier', CarrierSchema);