import React from 'react'
import "./index.css";
import ReactDOM from "react-dom/client";
import Todo from './components/Todo'

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
       <Todo/>
    </div>
);