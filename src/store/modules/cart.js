export default {
  // namespaced
  namespaced: true,
  state() {
    return {
      // because its a module entirely for the cart
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: {
    // Now we shouldn't directly commit mutations from inside components, so we add actions
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id,
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId,
      );

      const prodData = state.items[productInCartIndex];

      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters["prods/products"];
      const product = products.find((prod) => prod.id === prodId);

      context.commit("addProductToCart", product);
    },
    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
  getters: {
    // getters that allow us to get access to various infor about peices of infor about the cart
    products(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total;
    },
    quatity(state) {
      return state.qty;
    },
  },
};
