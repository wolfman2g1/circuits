//var mongoose = require('mongoose');
//import the new library
var Sequelize = require('sequelize');
/* create the carrier Schema for api access */
/*var CarrierSchema = new mongoose.Schema({
    carrier_name: String,
    support_email: { type : String, required : true, match: /\S+@\S+\.\S+/ },
    support_num: String,
    carrier_street: String,
    carrier_city: String,
    carrier_state: String,
    carrier_postal: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now},
    
});
//TODO clean up old mongoose coode
*/
// create the new carrier model

var Carrier = new sequelize.define("Carrier", {
    carrier_name: Sequelize.STRING,
    support_email: Sequelize.STRING,
    support_nam: Sequelize.STRING,
    Carrier_street: Sequelize.STRING,
    carrier_city: Sequelize.STRING,
    carrier_state: Sequelize.STRING,
    carrier_postal: Sequelize.STRING
});
module.exports = mongoose.model('Carrier', CarrierSchema);