# 🚀 DevStack

> **Build your dream tech stack with DevStack.**

DevStack is a modern and interactive technology stack builder built with **React, TypeScript, and Tailwind CSS**. It allows users to explore different technologies, select the technologies they want to learn or use, and manage their personal stack in a simple and beautiful interface.

## ✨ Features

- 🧩 **Explore Technologies** — Browse different technologies with their category, difficulty level, rating, description, and logo.
- 🛠️ **Build Your Stack** — Add technologies to your personal stack and easily see what you have selected.
- 🔄 **Manage Your Stack** — Replace technologies from the same category, remove individual technologies, or clear the entire stack.
- 🔔 **Interactive Notifications** — Get instant feedback using React-Toastify when adding, replacing, or removing technologies.
- 📱 **Responsive Design** — Works smoothly across desktop, tablet, and mobile screen sizes.

## 🛠️ Technologies Used

| Technology         | Purpose                                             |
| ------------------ | --------------------------------------------------- |
| **React.js**       | Building the user interface and reusable components |
| **TypeScript**     | Type-safe and maintainable code                     |
| **Tailwind CSS**   | Styling and responsive design                       |
| **DaisyUI**        | UI components and utilities                         |
| **React-Toastify** | Toast notifications                                 |
| **JSON**           | Storing technology data                             |
| **Vite**           | Development server and build tool                   |

## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   ├── Technologies.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
├── types/
│   └── technology.ts
├── App.tsx
├── main.tsx
└── index.css

public/
└── data.json
```

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Go to the project directory

```bash
cd devstack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open the local development URL shown in your terminal.

## 🎯 Project Goal

The main goal of DevStack is to provide a simple way for developers and learners to **explore technologies and create their own personalized technology stack**.

It was also built to practice important React concepts such as:

- Components
- Props
- State management
- `useState`
- `useEffect`
- Conditional rendering
- List rendering with `.map()`
- TypeScript types
- Event handling

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript/TypeScript.

It makes React components easier to read and write because we can describe the UI directly inside our component code.

Example:

```tsx
function App() {
  return <h1>Hello DevStack!</h1>;
}
```

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. A child component should not directly change its props.

**State** is data managed inside a component. When state changes, React re-renders the component.

Simply:

```text
Props → Data coming from parent
State → Data managed by the component
```

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a React component store and update data.

In DevStack, I used `useState` to manage:

- The technology list
- The selected technology stack
- The selected category/filter

Example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);
```

When the stack changes, React updates the UI automatically.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders.

In this project, I used `useEffect` to load the technology data from the JSON file when the Technologies component starts.

Example:

```tsx
useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => setTechnologies(data));
}, []);
```

The empty dependency array `[]` means the effect runs when the component is mounted.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React understand which items were added, removed, or changed, so it can update the UI efficiently.

Example:

```tsx
{
  technologies.map((technology) => (
    <TechnologyCard key={technology.id} technology={technology} />
  ));
}
```

The `id` is unique, so it works well as the key.

---

## 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying something only when a certain condition is true.

In DevStack, I used it to show a message when the user has not selected any technology:

```tsx
{
  stack.length === 0 && <p>No technologies selected yet.</p>;
}
```

If the stack is empty, the message appears. Otherwise, it does not.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

For example:

```tsx
<TechnologyCard technology={technology} onAdd={handleAddToStack} />
```

Here, `technology` and `onAdd` are passed from the parent to the child.

The child can send information back by calling a **callback function** received through props.

For example:

```tsx
<button onClick={() => onAdd(technology)}>Add to Stack</button>
```

So the basic flow is:

```text
Parent
  ↓ props
Child
  ↓ callback function
Parent
```

---

## 📌 Conclusion

DevStack is a practical React project that helped me understand component-based development, state management, API/JSON data loading, conditional rendering, props, callbacks, and TypeScript.

> **Explore technologies. Build your stack. Level up your development journey. 🚀**

## 👨‍💻 Author

**Shamim Islam**

Built with ❤️ using React, TypeScript, and Tailwind CSS.
