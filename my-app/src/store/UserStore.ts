import { IUser, INewUser } from './../utils/interfaces';
import { LS_USER_CREDENTIAL } from 'utils/constants';

import { addUser, getUser } from '../api/users';
import ToastersStore from './ToastersStore';

const { makeAutoObservable } = require('mobx');


class UserStore {
  user: IUser[] | null = null
  isFetching = false


  constructor() {
    makeAutoObservable(this);

    this.loginFromLS()
  }

  loginFromLS() {
    const getItem = localStorage.getItem(LS_USER_CREDENTIAL)
    if (getItem) {
      const [name, password] = getItem.split(' ');
      this.logIn({ name, password });
    }

  }

  logOut() {
    this.user = null;
    localStorage.removeItem(LS_USER_CREDENTIAL);
  }
  setIsFetching(bool: boolean) {
    this.isFetching = bool
  }

  async logIn(data: IUser) {
    this.setIsFetching(true)
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
        message: 'Invalid input',
      });
    }
    this.setIsFetching(false)
  }

  async createUser(data: INewUser) {
    await addUser(data);
  }
}


export default new (UserStore)();
