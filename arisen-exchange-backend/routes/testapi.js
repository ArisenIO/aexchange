let express = require('express');

let router = express.Router()


router.get('/test_api', (req, res) => {
    res.status(200).send({
        message: 'Sucessfully Add',
        data: 9+10
    })
})
module.exports = router