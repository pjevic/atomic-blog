<!-- @format -->

# Atomic Blog

## Overview

This repository documents advanced React concepts I am learning from my favorite teacher, Jonas Schmedtmann. Below are notes and examples from the Atomic Blog.

## Table of Contents

- [Atomic Blog](#atomic-blog)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Context API: Simplifying State Management](#context-api-simplifying-state-management)
    - [Core Concepts](#core-concepts)
  - [Implementing Context API](#implementing-context-api)
  - [Implementing Context API](#implementing-context-api-1)
    - [1. **Create a context**](#1-create-a-context)
    - [2. **Provide value** to child components](#2-provide-value-to-child-components)

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

## Implementing Context API

### 1. **Create a context**

Define a new context using the `createContext` function:

```jsx
import { createContext } from "react";

const PostContext = createContext();
```

### 2. **Provide value** to child components

Wrap the relevant part of your app with the `PostContext.Provider`, passing in the shared `value`:

```jsx
return (
  <PostContext.Provider
    value={{
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      onAddPost: handleAddPost,
    }}
  >
    <Header posts={searchedPosts} onClearPosts={handleClearPosts} />
    <Main posts={searchedPosts} onAddPost={handleAddPost} />
    <Footer />
  </PostContext.Provider>
);
```
