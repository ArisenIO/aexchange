require('dotenv').config()
require('./models/index')
let color = require('colors')
let express = require('express');
let server = express();
let helmet = require('helmet');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
let cors = require('cors')
let config = require('./config')
let apiroute = require('./routes/testapi');
let transaction_detail = require('./routes/transaction_detail');

/** MIDDELWARE*/
server.use(bodyParser.json({}))
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors());
server.use(helmet())
server.use(morgan('combined'))

/**API ROUTE */
server.use('/', apiroute)
server.use('/detail_save', transaction_detail)

/**PORT RUNNING */
let port = config.PORT || 5000;
server.listen(port, ()=> {
    console.log('Server is running on port'.green, port);
});