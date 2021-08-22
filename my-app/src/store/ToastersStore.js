const {makeAutoObservable} = require('mobx');


class ToastersStore {
   toasters = []
   constructor() {
     makeAutoObservable(this);
   }
   addToaster(error) {
     if(this.toasters.length > 9){
       this.toasters.length = 0
     }
     this.toasters.push(error);
   }
}

export default new ToastersStore();
