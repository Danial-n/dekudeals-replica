import { makeObservable, observable, action, runInAction } from 'mobx';

class currencystore {
  selectedCurrency: string = 'dollar';

  constructor() {
    makeObservable(this, {
      selectedCurrency: observable,
      setSelectedCurrency: action,
    });
  }

  setSelectedCurrency(word: string) {
    if (word === 'JP') {
      word = 'yen';
    } else if (word === 'BN' || 'US') {
      word = 'dollar';
    }
    this.selectedCurrency = word;
  }
}

export default new currencystore();
