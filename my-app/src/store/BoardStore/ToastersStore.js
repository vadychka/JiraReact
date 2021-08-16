import {makeAutoObservable} from 'mobx';

class ToastersStore {
   toasters = []
   constructor() {
     makeAutoObservable();
   }
}

export default new ToastersStore();
