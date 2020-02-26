import { observable,computed,action } from "mobx";

class Mainstore {
    @observable sender_username = '';
    @observable reciever_username = '';
    @observable send = '';
    @observable recieve = '';
    @observable value = '';
    @observable firstStep = false;

    @action getFormValue = (a,b,c,d,e,f) => {
        this.sender_username = a;
        this.reciever_username = b;
        this.send = c;
        this.recieve = d;
        this.value = e;
        this.firstStep = f;
    }

    // @computed get usingValues() {
    //     //apicall
    // }
}

const store = new Mainstore();
export default store;