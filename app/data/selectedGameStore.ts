import { makeObservable, observable, action } from 'mobx';

class selectedGameStore {
  selectedGame = {
    title: '',
    price: { dollar: '', yen: '' },
    images: '',
  };
  static loadWishlistFromLocal: any;

  constructor() {
    makeObservable(this, {
      selectedGame: observable,
      updateSelectedGame: action,
      // addToWishlist: action,
    });
  }

  updateSelectedGame(selectedGame: {
    title: string;
    price: { dollar: string; yen: string };
    images: string;
  }) {
    this.selectedGame = selectedGame;
  }

  // addToWishlist(selectedGame: {
  //   title: string;
  //   price: string;
  //   images: string;
  // }) {
  //   this.gameData.wishlist.push(selectedGame);
  //   this.saveWishlistToLocal();
  // }

  // saveWishlistToLocal() {
  //   localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  // }

  // loadWishlistFromLocal() {
  //   const wishlistString = localStorage.getItem('wishlist');
  //   if (wishlistString) {
  //     this.wishlist = JSON.parse(wishlistString);
  //   }
  // }

  // getWishlist() {
  //   return this.wishlist;
  // }

  // isWishlistEmpty() {
  //   const wishlistContent = this.getWishlist();
  //   return {
  //     isEmpty: wishlistContent.length === 0,
  //     content: wishlistContent,
  //   };
  // }
}

export default new selectedGameStore();
