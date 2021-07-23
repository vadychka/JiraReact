const {makeAutoObservable} = require('mobx');


class UsersStore {
   users=[]

   constructor() {
     makeAutoObservable(this);
   }

   createUser(data) {
     this.users.push(data);
   }
}


export default new (UsersStore);
