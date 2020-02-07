let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Setting = new Schema({
    account_id: {
        type: String,
        index: true
    },
    asset_id: {
        type: String,
        index: true
    }
},{timestamps: true})

let Settings = mongoose.model('settings', Setting)

module.exports = {
    Settings
}
