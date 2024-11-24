<!-- @format -->

# Atomic Blog

## Overview

This repository documents advanced React concepts I am learning from my favorite teacher, Jonas Schmedtmann. Below are notes and examples from the WorldWise project.

## Table of Contents

1. [Context API](#context-api)

---

## Context API

The Context API is a system to pass data throughout the app **without manually passing props** down the component tree. It allows us to **broadcast global state** to the entire application. We can create as many contexts as we need and place them wherever we want in the component tree. Usually, the provider is initialized at the top level of the app.

### Key Concepts

1. **Provider**  
   The Provider component makes the context value available to all its child components. It serves as the starting point for sharing data.

2. **Value**  
   The `value` is the data we want to make available to consumers. It typically includes state and functions. Whenever the context's `value` is updated, all subscribed consumers will automatically re-render to reflect the new data.

3. **Consumers**  
   Consumers are components that access and read the provided context value. They can subscribe to the context to dynamically react to changes.

---
