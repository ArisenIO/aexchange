let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Transaction_Detail =  new Schema({

    to_rsn: {
        type: String,
    },
    from_account: {
        type: String,
        index: true
    },
    rsn_asset_id: {
        type: String,
    },
    issue_from_account: {
        type: String,
    },
    tranfer_amount: {
        type: String
    },
    transaction_id: {
        type: String
    },
    block_number: {
        type: String
    }

},{timestamps: true})

let Transaction = mongoose.model('transactions', Transaction_Detail)

module.exports = {
    Transaction
}