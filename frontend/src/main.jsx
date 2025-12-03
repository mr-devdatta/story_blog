import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import MainPage from "./pages/MainPage";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="my-border bg-gray-100 p-1">
            <MainPage />
        </div>
    </StrictMode>
);
