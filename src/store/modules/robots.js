import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    async getParts({ commit }) {
      const result = await axios.get('/api/parts');
      commit('updateParts', result.data);
    },
    async addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      try {
        await axios.post('/api/cart', cart);
        return commit('addRobotToCart', robot);
      } catch (error) {
        console.log(error);
      }
      throw new Error();
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
};
