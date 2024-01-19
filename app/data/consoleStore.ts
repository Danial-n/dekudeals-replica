import { makeObservable, observable, action, runInAction } from 'mobx';

class consoleStore {
  isNintendo: boolean = false;
  isPlay: boolean = false;
  isXbox: boolean = false;

  constructor() {
    makeObservable(this, {
      isNintendo: observable,
      isPlay: observable,
      isXbox: observable,
    });
  }

  handleNintendo = async () => {
    runInAction(() => (this.isNintendo = !this.isNintendo));
  };

  handlePlay = async () => {
    runInAction(() => (this.isPlay = !this.isPlay));
  };

  handleXbox = async () => {
    runInAction(() => (this.isXbox = !this.isXbox));
  };
}

export default new consoleStore();
