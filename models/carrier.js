var mongoose = require('mongoose');

/* create the carrier Schema for api access */
var CarrierSchema = new mongoose.Schema({
    carrier_name: { type:String, required: true},
    support_email: String,
    support_num: String,
    carrier_street: String,
    carrier_city: String,
    carrier_state: String,
    carrier_postal: String,
    created_at: {type: Date },
    updated_at: { type: Date},
});

CarrierSchema.pre('save', fucntion(next){
      now = new Date();
      this.updated_at = now ;
if (!this.created_at) {
    this.created_at = now;
}
next();
});
module.exports = mongoose.model('Carrier', CarrierSchema);
