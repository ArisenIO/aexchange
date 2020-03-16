import { observable, action } from "mobx";
import Axios from "axios";

class Mainstore {
    @observable sender_username = '';
    @observable reciever_username = '';
    @observable send = '';
    @observable recieve = '';
    @observable value = '';
    @observable firstStep = false;
    @observable newUserForArisen = '';
    @observable ownerprivateKey = '';
    @observable activeprivateKey = '';
    @observable ownerPubKey = '';
    @observable activePubKey = '';
    @observable newOrNot = false;

    @action getFormValue = (a, b, c, d, e) => {
        this.sender_username = a;
        this.reciever_username = b;
        this.send = c;
        this.recieve = d;
        this.value = e;
    }

    @action nextStep = (next) => {
        this.firstStep = next;
    }

    @action newUser = (user) => {
        this.newUserForArisen = user.user;
        this.ownerprivateKey = user.ownerprivateKey;
        this.activeprivateKey = user.activeprivateKey;
        this.ownerPubKey = user.ownerPubKey;
        this.activePubKey = user.activePubKey;
        if (this.newOrNot) {
            this.saveNewUser(user);
        }
    }

    @action checkUser = async (user) => {
        await Axios({
            url: 'https://api.arisen.network/newuser/check-user',
            data: {
                sender_username: user
            },
            method: 'post'
        })
            .then((res) => {
                console.log('cjeck user', res);
                res.data && !res.data.success && (this.newOrNot = true);
            });
    }

    @action saveNewUser = async (user) => {
        await Axios({
            url: 'https://api.arisen.network/new_user/user',
            data: {
                user: this.newUserForArisen,
                sender_username: this.sender_username,
                ownerPubKey: user.ownerPubKey,
                activePubKey: user.activePubKey,
                ownerprivateKey: user.ownerprivateKey,
                activeprivateKey: user.activeprivateKey
            },
            method: 'post'
        })
            .then((res) => console.log('new user data', res));
    }

}

const store = new Mainstore();
export default store;