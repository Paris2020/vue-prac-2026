# Vue Practice 2026

A Vue.js practice repository created to refresh and strengthen my understanding of **Vue.js, Vue Router, and Vuex**.

The project focuses on revisiting the fundamentals of building Single Page Applications (SPAs) with Vue, including component-based development, routing, state management, and reusable application logic.

---

## 📚 About This Project

`vue-prac-2026` is a personal learning project used to practise Vue.js concepts and reinforce frontend development skills.

The repository contains practical exercises covering:

* Vue components
* Component communication
* Vue Router
* Vuex state management
* Getters, mutations, and actions
* Modular Vuex stores
* Computed properties
* Reactive data
* Event handling
* Forms and user interaction
* Reusable components
* Single Page Application structure
* Vue CLI development workflow

This repository is primarily intended for **learning, experimentation, and revision**.

---

## 🛠️ Technologies Used

| Technology     | Version / Purpose        |
| -------------- | ------------------------ |
| **Vue.js**     | 2.7.16                   |
| **Vue Router** | 3.6.5                    |
| **Vuex**       | 3.6.2                    |
| **Vue CLI**    | 4.x                      |
| **JavaScript** | ES6+                     |
| **Babel**      | JavaScript transpilation |
| **ESLint**     | Code quality and linting |
| **npm**        | Package management       |

The project uses the Vue 2 ecosystem rather than Vue 3. Vue 2 reached end-of-life on December 31, 2023, so this repository is intentionally maintained as a **Vue 2 learning/practice project** rather than a recommendation for new production applications.

---

## 📁 Project Structure

The main application code is contained within the `src` directory.

```text
vue-prac-2026/
│
├── public/
│   └── ...
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── store/
│   │   └── modules/
│   ├── views/
│   ├── App.vue
│   └── main.js
│
├── .gitignore
├── babel.config.js
├── HOW-TO-USE.pdf
├── package.json
├── package-lock.json
├── vue.config.js
└── README.md
```

> The exact contents of `src` may change as additional Vue exercises are added to the project.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Paris2020/vue-prac-2026.git
```

### 2. Navigate into the project

```bash
cd vue-prac-2026
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run serve
```

The Vue development server will provide a local URL where the application can be viewed in the browser.

---

## 📜 Available Scripts

### Development

Start the development server:

```bash
npm run serve
```

### Production Build

Create a production-ready build:

```bash
npm run build
```

### Lint

Run ESLint against the project:

```bash
npm run lint
```

These scripts are defined in the project's `package.json`.

---

## 🧩 Vue Concepts Practised

### Components

The project uses Vue Single File Components (`.vue`) to separate application functionality into reusable components.

A typical component contains:

```vue
<template>
  <!-- HTML -->
</template>

<script>
export default {
  // Component logic
}
</script>

<style>
/* Component styling */
</style>
```

---

### Props

Props are used to pass data from a parent component to a child component.

```vue
<product-card
  :product="product"
/>
```

The child component can then receive the data:

```js
props: {
  product: {
    type: Object,
    required: true
  }
}
```

---

### Events

Child components can communicate with parent components using custom events.

```js
this.$emit('add-to-cart', product)
```

---

## 🧭 Vue Router

Vue Router is used to manage navigation between different views in the Single Page Application.

Example:

```js
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/cart',
    component: Cart
  }
]
```

Navigation can then be handled using:

```vue
<router-link to="/products">
  Products
</router-link>
```

And routed components are displayed using:

```vue
<router-view />
```

This project uses **Vue Router 3.6.5**, which is compatible with the Vue 2 setup used in the repository.

---

## 🗃️ Vuex State Management

The project also provides practice with **Vuex**, which is used to manage shared application state.

The Vuex store can contain:

* State
* Getters
* Mutations
* Actions
* Modules

A simplified store structure looks like:

```text
store/
├── index.js
└── modules/
    ├── products.js
    └── carts.js
```

### State

Stores application data:

```js
state: {
  products: []
}
```

### Getters

Used to retrieve or calculate state:

```js
getters: {
  getProducts(state) {
    return state.products
  }
}
```

### Mutations

Used to synchronously modify state:

```js
mutations: {
  setProducts(state, products) {
    state.products = products
  }
}
```

### Actions

Used for asynchronous operations and committing mutations:

```js
actions: {
  async fetchProducts({ commit }) {
    // Fetch data
    commit('setProducts', products)
  }
}
```

---

## 🧱 Vuex Modules

One of the goals of this project is to practise organising Vuex state into separate modules.

For example:

```text
store/
└── modules/
    ├── products.js
    └── carts.js
```

This allows different areas of application state to remain separated and easier to maintain.

For example:

```js
modules: {
  prods: productsModule,
  cart: cartModule
}
```

This approach is useful when an application grows and a single Vuex store becomes difficult to manage.

---

## 🎯 Learning Objectives

The main objectives of this repository are to:

1. Refresh Vue.js fundamentals.
2. Practise building Vue components.
3. Understand parent-child component communication.
4. Refresh Vue Router concepts.
5. Practise creating and managing routes.
6. Understand Vuex state management.
7. Practise Vuex modules.
8. Understand the relationship between state, getters, mutations, and actions.
9. Build a better understanding of SPA architecture.
10. Strengthen practical frontend development skills.

---

## 🔄 Development Workflow

The typical development workflow for this project is:

```text
Write Code
    ↓
Run Development Server
    ↓
Test Application
    ↓
Identify Issues
    ↓
Debug
    ↓
Refactor
    ↓
Commit Changes
    ↓
Push to GitHub
```

Git is used to track changes throughout the learning process.

---

## 🧪 Learning Through Debugging

An important part of this repository is using real development errors as learning opportunities.

Examples of issues that may be encountered while working with this project include:

* Vue version compatibility
* Vue Router version differences
* Vuex version differences
* Component registration
* Incorrect imports
* Store configuration
* Module namespacing
* Router configuration
* ESLint configuration
* Dependency compatibility

Rather than simply fixing an error, the goal is to understand **why the error occurred and how the different parts of the Vue ecosystem work together**.

---

## 📖 Additional Documentation

The repository includes a `HOW-TO-USE.pdf` file containing additional instructions for working with the project.

---

## 🔮 Future Improvements

Possible future additions to this practice repository include:

* [ ] Add more Vue components
* [ ] Add more Vue Router examples
* [ ] Expand Vuex modules
* [ ] Add API integration
* [ ] Add loading and error states
* [ ] Add form validation
* [ ] Add reusable UI components
* [ ] Add authentication practice
* [ ] Add unit testing
* [ ] Explore Vue 3 and the Composition API
* [ ] Compare Vuex with Pinia

---

## 📌 Project Status

**Status:** Active Learning / Practice Project

This repository will continue to evolve as new Vue.js concepts and exercises are explored.

---

## 👨‍💻 Author

**Nelly Moseki**

GitHub: [@Paris2020](https://github.com/Paris2020)

---

## 📄 License

This project is intended primarily for educational and personal learning purposes.
