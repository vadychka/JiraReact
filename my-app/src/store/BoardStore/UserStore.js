import {addUser, getUser} from '../../api/users';

const {makeAutoObservable} = require('mobx');


class UserStore {
   user={}
   textError = ''

   constructor() {
     makeAutoObservable(this);
   }

   async logIn(data) {
     try {
       await getUser(data.name, data.password);
     } catch (e) {
       this.textError = 'invalid input';
     }
   }

   async createUser(data) {
     await addUser(data);
   }
}


export default new (UserStore);
