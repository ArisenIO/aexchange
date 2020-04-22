import { observable, action } from "mobx";
// import Axios from "axios";
import apiAgent from "../component/apiAgent/apiAgent";

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

    @action nextStep = async(next) => {
        this.firstStep = next;

        const data = {
            user:this.newUserForArisen,
            send: this.send,
            recieve: this.recieve,
            sender_username: this.sender_username,
            reciever_username: this.reciever_username,
            amount: this.value
        }

        try {
            let value = await apiAgent.RSI_BTS_TRANSFER(data)
            console.log('RIX transfer', value)
        } catch (e) {
            console.log(e);
        }
    }

    @action newUser = (user) => {
        this.newUserForArisen = user.user;
        this.ownerprivateKey = user.ownerprivateKey;
        this.activeprivateKey = user.activeprivateKey;
        this.ownerPubKey = user.ownerPubKey;
        this.activePubKey = user.activePubKey;

        this.saveNewUser(user);
    }

    @action checkUser = async (user) => {
        try {
            console.log('username',user);
            let value = await apiAgent.checkUser(user);
            console.log('value of bla bla', value);
        } catch (e) {
            console.log(e)
        }
    }

    @action saveNewUser = async (user) => {
        try {
            let value = await apiAgent.saveNewUser(user,this.sender_username)
            console.log('new user response', value)
            if (value.data) {
                this.newUserForArisen = value.data.arisen_account;
                this.nextStep(true);
            }
        } catch (e) {
            console.log(e);
        }
        
    }

}

const store = new Mainstore();

export default store;