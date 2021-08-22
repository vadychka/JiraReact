import {LS_USER_CREDENTIAL} from 'utils/constants';

import {addUser, getUser} from '../api/users';
import ToastersStore from './ToastersStore';

const {makeAutoObservable} = require('mobx');


class UserStore {
   user=null


   constructor() {
     makeAutoObservable(this);

     if (localStorage.getItem(LS_USER_CREDENTIAL)) {
       const [name, password] = localStorage.getItem(LS_USER_CREDENTIAL)
           .split(' ');
       this.logIn({name, password});
     }
   }
   logOut() {
     this.user = null;
     localStorage.removeItem(LS_USER_CREDENTIAL);
   }


   async logIn(data) {
     try {
       const user = await getUser(data.name, data.password);
       if (user) {
         this.user = user;
         localStorage.setItem(LS_USER_CREDENTIAL,
             `${user.name} ${user.password}`);
       }
     } catch (e) {
       ToastersStore.addToaster({
         type: 'error',
         massage: 'Invalid input',
       });
     }
   }

   async createUser(data) {
     await addUser(data);
   }
}


export default new (UserStore);
