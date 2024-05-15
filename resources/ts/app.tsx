import '../css/app.css';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Index } from "./pages/Index";
import { PostDetail } from "./pages/PostDetail";


const App = () => {
    const title: string = "Hello TypeScript React";
    return (
        <div id="main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
