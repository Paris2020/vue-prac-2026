export default {
  namespaced: true, // otherwise it would be globally available.
  state() {
    return {
      products: [
        {
          id: "p1",
          image:
            "https://img.magnific.com/free-vector/books-stack-realistic_1284-4735.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          image:
            "https://img.magnific.com/free-photo/full-shot-smiley-woman-pouring-water_23-2149517910.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://img.magnific.com/premium-psd/kraft-paper-food-box-mockup-branding-packaging-design_1514366-543.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
    };
  },
  // Because we shouldn't directly access state, we should use getters
  getters: {
    products(state) {
      return state.products;
    },
  },
};
