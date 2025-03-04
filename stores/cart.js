import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addCartItems(cartItem) {
      this.cartItems.push(cartItem);
    },
  },
})