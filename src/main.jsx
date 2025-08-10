import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//index.html과 App.jsx를 연결
createRoot(document.getElementById("root")).render(<App />);
