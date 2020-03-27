
import Axios from 'axios';

class ApiAgent {

    // checkUser = async (user) => {
    //     let value;
    //     value = await Axios.post('https://api.arisen.network/newuser/check-user',
    //         {
    //             sender_username: user
    //         })
    //     if (value) {
    //         return value;
    //     } else {
    //         return 0;
    //     }
    // }

    saveNewUser = async (user,senderUsername) => {
        let value = await Axios.post('https://api.arisen.network/new_user/user',
            {
                user: user.user,
                sender_username: senderUsername,
                ownerPubKey: user.ownerPubKey,
                activePubKey: user.activePubKey,
                ownerprivateKey: user.ownerprivateKey,
                activeprivateKey: user.activeprivateKey
            })
        if (value) {
            return value;
        } else {
            return 0;
        }
    }

    RSN_BTS_TRANSFER = async (data) => {
        console.log('data value', data);
        let value = await Axios.post('https://api.arisen.network/rsn-bts/transfer',
            {
                user: data.user,
                send: data.send,
                recieve: data.recieve,
                sender_username: data.sender_username,
                reciever_username: data.reciever_username,
                amount: data.amount,
            })
        if (value) {
            return value;
        } else {
            return 0;
        }
    }
}

export default new ApiAgent();