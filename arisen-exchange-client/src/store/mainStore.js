import { observable,computed,action } from "mobx";

class Mainstore {
    @observable email = '';
}

const store = new Mainstore;
export default store;