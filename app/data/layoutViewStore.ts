import { makeObservable, observable, action, runInAction } from 'mobx';

class layoutViewStore {
  isLayout: boolean = true;

  constructor() {
    makeObservable(this, {
      isLayout: observable,
    });
  }

  handleLayout = async () => {
    runInAction(() => (this.isLayout = !this.isLayout));
  };
}

export default new layoutViewStore();
