import React from "react"
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom"
import App from "./App"

const app = document.getElementById('root');

// create a root
const root = createRoot(app);

//render app to root
root.render(<App />);