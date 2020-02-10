import React, {Component } from 'react';
import axios from 'axios';

class Home extends Component {
        componentWillMount() {
            let transaction_id = 'c3bc196c582e881951bea3a99e2c52dff016782b'
            // axios.get(`https://explorer.bitshares-kibana.info/es/trx?trx=${transaction_id}&size=10`)
            //         .then(res => {
            //             let transaction_detail = res.data
            //             console.log('API REPONSE', res.data)

            axios.post('http://localhost:3001/detail_save/transaction_detail', {transaction_id})
            .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                 console.log(error);
              });
            
                        // axios.post('http://localhost:3001/detail_save/transaction_detail',{
                        //    data: transaction_id,
                           
                        // })
                        // .then((response) => {
                        //     console.log(response);
                        //   })
                        //   .catch((error) => {
                        //      console.log(error);
                        //   });
                            
                    // })
                    // .catch(err => console.error(err));
        }
        render() {
            return(
                <div>
                    Transfer
                    <div>
                        <input
                            type='bts-token'
                            placeholder='0'
                            
                        />

                    </div>  
                    <div>
                        <input
                            type='arisen-token'
                            placeholder='0'
                            
                        />
                        
                    </div>  
                </div>
            )
        }
}
export default Home