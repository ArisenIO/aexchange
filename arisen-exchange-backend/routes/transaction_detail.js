let express = require('express');
let axios = require('axios');
let { Transaction } = require('../models/Transaction_Detail')
let { Settings  } = require('../models/Setting')

let router = express.Router();


router.post('/transaction_detail',async (req, res) => {
        try {
            let {transaction_id} = req.body;
            
            if(transaction_id == undefined || !transaction_id)
                return res.send('Transaction_id is undefined')

            let Setting = await Settings.findOne({})
            let find_trx = await Transaction.findOne({transaction_id: transaction_id})

            let url = `https://explorer.bitshares-kibana.info/es/trx?trx=${transaction_id}&size=10`

            await axios.get(url)
                            .then(transaction_data => {
                                if(transaction_data.data[1].operation_history.op_object.amount_.asset_id !== Setting.asset_id && transaction_data.data[1].account_history.account !== Setting.account_id) {
                                    return res.status(200).send({
                                        message: 'Asset id missmatch or please send RSN on Bitshare'
                                    })
                                }
                            
                                if(find_trx == null) {
                                    let newTransaction = new Transaction({
                                        to_rsn: transaction_data.data[1].account_history.account,
                                        from_account: transaction_data.data[0].account_history.account,
                                        rsn_asset_id: transaction_data.data[1].operation_history.op_object.amount_.asset_id,
                                        issue_from_account: transaction_data.data[0].account_history.account,
                                        tranfer_amount: transaction_data.data[0].operation_history.op_object.amount_.amount,
                                        transaction_id: transaction_data.data[0].block_data.trx_id,
                                        block_number: transaction_data.data[0].block_data.block_num,
                                    })
                                    newTransaction.save()
                                        .then(saved => {
                                            console.log("trx", transaction_data.data[0].operation_history, "SECONf",transaction_data.data[1].operation_history)
                                            res.status(200).send({
                                                message: 'Transaction Sucessfully saved'
                                            })
                                        })
                                        .catch(e => {
                                            console.log('ERROR TRANSACTION', e)
                                            res.status(401).send({
                                                message: 'Something went worng'
                                            })
                                        })
    
                                } else {
                                    res.status(200).send({
                                        message: 'User already claimed with this transaction id'
                                    })
                                }
                            })
                            .catch(e => console.log(e))
                            
        } catch (e) {
            console.log('ERROR IN TRANSACTION', e)
        }
})

module.exports = router