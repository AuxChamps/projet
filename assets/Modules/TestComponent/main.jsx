import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export function test() {
    const root = document.getElementById("test");
    if (root) {
        ReactDOM.createRoot(root).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
    }
}
