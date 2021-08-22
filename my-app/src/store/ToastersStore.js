const {makeAutoObservable} = require('mobx');


class ToastersStore {
   toasters = []
   constructor() {
     makeAutoObservable(this);
   }
   addToaster(error) {
     this.toasters.push(error);
   }
}

export default new ToastersStore();
