
import axios from 'axios';

class ApiAgent {

    checkUser = async (user) => {
        return user;
        // let check = await axios({
        //     url: 'https://api.arisen.network/newuser/check-user',
        //     data: {
        //         user: user.user
        //     },
        //     method: 'post'
        // })
        // if (check) {
        //     return console.log('user data check user api', check)
        // }
    }

    newUser = async (user) => {
        let userData = await axios({
            url: 'https://api.arisen.network/new_user/user',
            data: {
                user: user.user,
                sender_username: user.sender_username,
                ownerPubKey: user.ownerPubKey,
                activePubKey: user.activePubKey,
                ownerprivateKey: user.ownerprivateKey,
                activeprivateKey: user.activeprivateKey
            },
            method: 'post'
        })
        if (userData) {
            return console.log('user save from new user', userData)
        }
    }
}

export default new ApiAgent();