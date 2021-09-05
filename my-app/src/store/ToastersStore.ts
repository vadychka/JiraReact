const { makeAutoObservable } = require('mobx');

interface IErrorToaster {
  type: 'error'| 'message',
  message: string
}

class ToastersStore {
  toasters: IErrorToaster[] = []
  constructor() {
    makeAutoObservable(this);
  }
  addToaster(error: IErrorToaster) {
    if (this.toasters.length > 9) {
      this.toasters.length = 0
    }
    this.toasters.push(error);
  }
}

export default new ToastersStore();
