import { makeObservable, observable, action, runInAction } from 'mobx';

class filterGameStore {
  selectedFilter: string = 'Name';

  constructor() {
    makeObservable(this, {
      selectedFilter: observable,
      setSelectedFilter: action,
    });
  }

  setSelectedFilter(word: string) {
    this.selectedFilter = word;
  }
}

export default new filterGameStore();
