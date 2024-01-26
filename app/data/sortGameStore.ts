import { makeObservable, observable, action, runInAction } from 'mobx';

class sortGameStore {
  selectedSort: string = 'Name';

  constructor() {
    makeObservable(this, {
      selectedSort: observable,
      setSelectedSort: action,
    });
  }

  setSelectedSort(word: string) {
    this.selectedSort = word;
  }
}

export default new sortGameStore();
