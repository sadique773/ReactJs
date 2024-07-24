# Hooks in React 
Hooks allow function components to have access to state and other React features
# useState Hooks
The React useState Hook allows us to track state in a function component.

```js
import React from 'react';
import {useState} from "react";

export function App(props) {

  const [Name,setName] = useState("Sadique")
  return (
    <>
    <h1> Hello bro color is {Name}</h1>
    <button
    onClick ={()=>setName("Hussain")}
    >Change to Hussain</button>
    </>
    
  );
}
```


# Virtual Dom and Fiber


A programming concept that stores a copy of the original DOM in memory and syncs it with the real DOM. This process is called reconciliation. When changes are made, React creates a new VDOM and compares it to the previous one using a Diffing Algorithm. React then updates the browser DOM with the minimum number of changes possible without re-rendering the entire DOM. This helps React re-render only the parts of the DOM tree that need to be updated. However, VDOM can cause performance issues in complex applications because the entire component tree is recalculated when there is a change.

# React Fiber

A reconciliation engine introduced in React 16 that enables incremental rendering of VDOM. React Fiber breaks down rendering work into small units called fibers, which helps with smooth state transitions and batching state changes.

# Twailwind CSS in React   

Install Tailwind CSS
Terminal\
`npm install -D tailwindcss postcss autoprefixer`\
`npx tailwindcss init -p`


Add code in file - tailwind.config.js

```js /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


Add in index.css

`@tailwind base;`\
`@tailwind components;`\
`@tailwind utilities;`

# 
