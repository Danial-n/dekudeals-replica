import { makeObservable, observable, action, runInAction } from 'mobx';
import Content from '../components/Content';

class sortGameStore {
  newGameData = null;

  constructor() {
    makeObservable(this, {
      newGameData: observable,
      setNewGameData: action,
    });
  }

  setNewGameData(data) {
    this.newGameData = data;
  }

  // Your existing handleSort method
  handleSort = (selectedWord) => {
    console.log(`Sorting by: ${selectedWord}`);

    if (selectedWord === 'Price') {
      this.newGameData = Content.priceGameData;
      console.log('Sorted data based on Price:', this.newGameData);

      // Update observable property with the sorted data
      runInAction(() => this.setNewGameData(this.newGameData));
    }
  };
}

export default new sortGameStore();
