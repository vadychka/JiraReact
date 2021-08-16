import {addUser, getUser} from '../../api/users';

const {makeAutoObservable} = require('mobx');


class UserStore {
   user={}
   textUnderForm = ''

   constructor() {
     makeAutoObservable(this);
   }

   answerLogin(data) {
     if (data.name) {
       this.user = data;
       return this.textUnderForm = 'welcome to the our site';
     } else if (data === 'login') {
       return this.textUnderForm = 'this name is not registration on the site';
     } else {
       return this.textUnderForm = 'password is not correct';
     }
   };
   async logIn(data) {
     const loginUser = await getUser(data.name, data.password);
     this.answerLogin(loginUser);
   }

   async createUser(data) {
     await addUser(data);
   }
}


export default new (UserStore);
