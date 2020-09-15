import {observable, action, computed} from 'mobx';

export default class DataStore {
  @observable phoneNumber = '';

  constructor() {}

  @action
  clear() {
    this.updatePhoneNumber('');
  }

  @action
  updatePhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  @computed
  get isPhoneEmpty() {
    return !this.phoneNumber;
  }
}
