import { observable,action } from "mobx";

class Mainstore {
    @observable sender_username = '';
    @observable reciever_username = '';
    @observable send = '';
    @observable recieve = '';
    @observable value = '';
    @observable firstStep = false;
    @observable exchangeID = '';

    @action getFormValue = (a,b,c,d,e) => {
        this.sender_username = a;
        this.reciever_username = b;
        this.send = c;
        this.recieve = d;
        this.value = e;
    }

    @action nextStep = (next) => {
        this.firstStep = next;
    }

    @action getExchangeId = (id) => {
        this.exchangeID = id;
    }

    // @computed get usingValues() {
    //     //apicall
    // }
}

const store = new Mainstore();
export default store;