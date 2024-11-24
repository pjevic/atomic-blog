<!-- @format -->

# Atomic Blog

This repository documents advanced React concepts I am learning from my favorite teacher, Jonas Schmedtmann. Below are notes and examples from the Atomic Blog.

- [Atomic Blog](#atomic-blog)
  - [Context API: Simplifying State Management](#context-api-simplifying-state-management)
    - [Core Concepts](#core-concepts)
  - [Implementing Context API](#implementing-context-api)
    - [1. **Create a context**](#1-create-a-context)
    - [2. **Provide a value to** to child components](#2-provide-a-value-to-to-child-components)
    - [3. **Consuming the context value**](#3-consuming-the-context-value)
  - [Advanced Context API Pattern](#advanced-context-api-pattern)
    - [Custom Provider and Custom Hook](#custom-provider-and-custom-hook)
    - [Implementation](#implementation)
      - [**1. Define a Custom Provider**](#1-define-a-custom-provider)
      - [**2. Create a Custom Hook**](#2-create-a-custom-hook)
    - [Usage of the Custom Provider and Hook](#usage-of-the-custom-provider-and-hook)
      - [**Consume the Context with the Custom Hook**](#consume-the-context-with-the-custom-hook)

---

## Context API: Simplifying State Management

The Context API provides a streamlined way to share data across your React application **without manually drilling props** through multiple component layers. It enables **global state management** by broadcasting shared data to any component that needs it. You can create and manage multiple contexts, integrating them flexibly within your component hierarchy. Typically, the provider is placed at the top level of the app for easy access.

### Core Concepts

1. **Provider**  
   The `Provider` component wraps parts of your app to supply shared data (context) to its child components. It acts as the source of truth for the context's state.

2. **Value**  
   The `value` is the data you want to share, often a combination of state and utility functions. When the `value` updates, all subscribing components (consumers) automatically re-render to reflect the changes.

3. **Consumers**  
   `Consumers` are components that utilize the provided context to access and use the shared data. By subscribing to the context, they dynamically respond to updates in the `value`.

---

## Implementing Context API

### 1. **Create a context**

Define a new context using the `createContext` function:

```jsx
import { createContext } from "react";

export const PostContext = createContext();
```

### 2. **Provide a value to** to child components

Wrap the relevant part of your app with the `PostContext.Provider`, passing in the shared `value`. This makes the `value` accessible to any child component that consumes the context:

```jsx
import { PostContext } from "./PostContext";

function App() {
  const handleClearPosts = () => {
    console.log("Posts cleared!");
  };

  return (
    <PostContext.Provider
      value={{
        onClearPosts: handleClearPosts,
      }}
    >
      <Header />
    </PostContext.Provider>
  );
}
```

### 3. **Consuming the context value**

Use the `useContext` hook to access the provided context in a child component, like `Header`. Import the `PostContext` and use it as follows:

```jsx
import { useContext } from "react";
import { PostContext } from "../../App";

export default function Header() {
  const { onClearPosts } = useContext(PostContext);

  return (
    <header>
      <button onClick={onClearPosts}>Clear posts</button>
    </header>
  );
}
```

---

## Advanced Context API Pattern

### Custom Provider and Custom Hook

This advanced pattern simplifies the use of the Context API by creating a **Custom Provider** and a **Custom Hook**. It abstracts the context logic, making it reusable and easier to consume throughout the app.

---

### Implementation

#### **1. Define a Custom Provider**

The `PostProvider` wraps the component tree and provides shared context values. This allows all child components to access the `onClearPosts` function:

```jsx
import { useState, createContext, useContext } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
  function handleClearPosts() {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        onClearPosts: handleClearPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
```

#### **2. Create a Custom Hook**

The `usePosts` hook simplifies the consumption of the `PostContext` by eliminating the need to use `useContext` directly in each component. Instead, components can import and use this hook for better readability and reuse:

```jsx
function usePosts() {
  const context = useContext(PostContext);
  return context;
}

export { PostProvider, usePosts };
```

### Usage of the Custom Provider and Hook

#### **Consume the Context with the Custom Hook**

Use the `usePosts` hook in child components to access the context values:

```jsx
import { usePosts } from "../../PostContext";

export default function Header() {
  const { onClearPosts } = usePosts();

  return (
    <header>
      <button onClick={onClearPosts}>Clear posts</button>
    </header>
  );
}
```
