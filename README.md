# Vue Practice 2026 – Find a Coach

A Vue.js learning project focused on building a dynamic, component-based web application. The featured application, **Find a Coach**, connects users with coaches specialising in Frontend Development, Backend Development and Career Development.

The project provides practical experience with Vue.js, component communication, routing, state management and interactive user interfaces.

---

## 🖥️ Application Preview

![Find a Coach Homepage](./screenshots/homepage-preview.png)

_Find a Coach – redesigned homepage concept featuring a modern purple and lavender colour scheme._

---

## 📖 About the Project

Find a Coach is a web application that allows users to discover coaches based on their professional skills and areas of expertise.

The application is designed to provide a simple and accessible experience for users looking for professional guidance and coaching.

It also allows individuals to register as coaches and make their expertise available to others.

The project is part of my ongoing journey to strengthen my frontend development skills and gain practical experience working with Vue.js.

---

## ✨ Application Features

### 1. Find a Coach

Users can browse available coaches and explore their areas of expertise.

The application provides filtering options based on three coaching categories:

- Frontend Development
- Backend Development
- Career Development

### 2. Coach Profiles

Each coach is presented with relevant information, including:

- Coach name
- Hourly rate
- Areas of expertise
- Contact option
- Coach details option

### 3. Filter Coaches

Users can select their preferred coaching categories to find coaches matching their interests.

### 4. Register as a Coach

Individuals can register as coaches and make their professional expertise available to users.

### 5. Contact Coaches

Users can initiate contact with coaches through the available contact functionality.

### 6. Requests

The application includes a Requests section for accessing coaching requests.

### 7. Responsive User Interface

The application focuses on a clean, user-friendly interface with clearly organised navigation, buttons, filters and coach profile cards.

---

## 🛠️ Technologies Used

The project uses the Vue 2 ecosystem and supporting frontend development tools.

| Technology        | Purpose                               |
| ----------------- | ------------------------------------- |
| Vue.js 2.7        | Frontend framework                    |
| JavaScript (ES6+) | Application functionality             |
| HTML5             | Application structure                 |
| CSS3              | Styling and layouts                   |
| Vue Router 3      | Client-side navigation                |
| Vuex 3            | Centralised state management          |
| Vue CLI 4         | Project development and build tooling |
| Babel             | JavaScript transpilation              |
| ESLint            | Code quality and consistency          |
| npm               | Package management                    |

**Note:** This project uses Vue 2.7.16, Vue Router 3.6.5 and Vuex 3.6.2. These versions are compatible with the Vue 2 ecosystem.

---

## 📁 Project Structure

The project follows a component-based architecture to encourage code reusability, maintainability and separation of concerns.

```text
vue-prac-2026/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── router/
│   │
│   ├── store/
│   │
│   ├── App.vue
│   └── main.js
│
├── screenshots/
│   └── homepage-preview.png
│
├── .gitignore
├── babel.config.js
├── package.json
├── package-lock.json
├── README.md
└── HOW-TO-USE.pdf
```

_Note: The directory structure is an illustrative guide. Update it to reflect the actual folders and files in the repository._

---

## 🚀 Getting Started

Follow the instructions below to clone and run the project locally.

### Prerequisites

Before installing the project, ensure that you have the following:

- Node.js
- npm (Node Package Manager)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Paris2020/vue-prac-2026.git
```

### 2. Navigate to the project directory

```bash
cd vue-prac-2026
```

### 3. Install dependencies

```bash
npm install
```

This command installs the dependencies defined in `package.json`.

### 4. Run the development server

```bash
npm run serve
```

Once the development server starts, open the local URL provided in your terminal.

The default Vue CLI development URL is:

```text
http://localhost:8080
```

---

## 📜 Available Scripts

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `npm run serve` | Starts the local development server                |
| `npm run build` | Compiles and builds the application for production |
| `npm run lint`  | Checks the codebase for linting issues             |

### Building for Production

To create a production-ready build, execute:

```bash
npm run build
```

The generated production files will be available in the `dist` directory.

---

## 🧩 Vue.js Concepts Practised

This project provides practical exposure to important Vue.js concepts.

### 1. Components

Vue components allow developers to divide an application into smaller, reusable and independent pieces.

Example:

```vue
<template>
  <div>
    <h2>Find Your Coach</h2>
  </div>
</template>

<script>
export default {
  name: "FindCoach",
};
</script>
```

### 2. Props

Props allow parent components to pass data to child components.

Example:

```vue
<coach-item :title="coach.name" :type="coach.areas" />
```

The child component receives the information through its props.

```javascript
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: Array,
      required: true,
    },
  },
};
```

### 3. Computed Properties

Computed properties allow developers to derive values from existing reactive data.

Example:

```javascript
computed: {
  text() {
    return this.title
      ? this.title.toUpperCase()
      : "";
  }
}
```

Vue automatically updates computed properties when their dependencies change.

### 4. Custom Events

Custom events allow child components to communicate with their parent components.

Example:

```javascript
this.$emit("select-coach", this.id);
```

This allows components to communicate without directly modifying the parent's data.

### 5. Conditional Rendering

Vue provides directives such as `v-if`, `v-else` and `v-show` to conditionally display elements.

Example:

```vue
<p v-if="coaches.length">
  Available coaches
</p>

<p v-else>
  No coaches found.
</p>
```

### 6. List Rendering

The `v-for` directive allows developers to render lists of data dynamically.

Example:

```vue
<div v-for="coach in coaches" :key="coach.id">
  {{ coach.name }}
</div>
```

---

## 🧭 Vue Router

Vue Router is responsible for managing navigation between different views within a Vue Single Page Application (SPA).

It allows users to navigate between application sections without requiring a full page reload.

Example:

```javascript
const routes = [
  {
    path: "/coaches",
    component: CoachesList,
  },
  {
    path: "/requests",
    component: Requests,
  },
];
```

Navigation can be implemented using `router-link`:

```vue
<router-link to="/coaches">
  All Coaches
</router-link>

<router-link to="/requests">
  Requests
</router-link>
```

The `router-view` component renders the currently selected route.

```vue
<router-view />
```

---

## 🗃️ Vuex State Management

Vuex provides a centralised store for managing shared application data.

It is particularly useful when multiple components need access to the same information.

Vuex consists of four main concepts:

**State**

Stores application data.

```javascript
state: {
  coaches: [];
}
```

**Getters**

Retrieve or calculate values from the store.

```javascript
getters: {
  getCoaches(state) {
    return state.coaches;
  }
}
```

**Mutations**

Synchronously update the application state.

```javascript
mutations: {
  setCoaches(state, coaches) {
    state.coaches = coaches;
  }
}
```

**Actions**

Handle operations such as asynchronous API requests.

```javascript
actions: {
  async loadCoaches({ commit }) {
    // Fetch coach information
    // Commit the retrieved data
  }
}
```

---

## 🎨 Design and User Experience

The Find a Coach application uses a clean and professional visual direction.

The redesigned interface explores:

- Deep purple as the primary brand colour.
- Violet and lavender as accent colours.
- White backgrounds for readability.
- Modern sans-serif typography.
- Rounded cards and buttons.
- Consistent spacing and alignment.
- Clear visual hierarchy.
- Improved presentation of coach profiles.

The design aims to create an intuitive experience while keeping the application easy to navigate.

---

## 🎯 Learning Objectives

The main learning objectives of this project include:

1. Strengthening Vue.js fundamentals.
2. Understanding component-based architecture.
3. Practising parent-child communication.
4. Working with props and custom events.
5. Implementing dynamic rendering using Vue directives.
6. Managing navigation with Vue Router.
7. Understanding state management with Vuex.
8. Organising application logic into reusable components.
9. Developing interactive user interfaces.
10. Improving debugging and problem-solving skills.
11. Applying frontend development principles to a practical application.

---

## 🔮 Future Improvements

Potential enhancements for the application include:

- Improved mobile responsiveness.
- Advanced coach filtering and searching.
- Coach profile image uploads.
- Form validation.
- User authentication and authorisation.
- Improved coach registration workflow.
- Enhanced coaching request management.
- API integration.
- Loading indicators and error handling.
- Unit testing.
- Exploring Vue 3 and the Composition API.

---

## 📌 Project Status

**Status:** Learning and Development

This project is part of my ongoing frontend development practice. Features and improvements will be introduced as I continue exploring Vue.js and modern frontend development techniques.

---

## 👩‍💻 Author

**Nelly Moseki**

Frontend Developer | Software Development

GitHub: [@Paris2020](https://github.com/Paris2020)

---

## 📄 License

This project is intended for educational and personal development purposes.
