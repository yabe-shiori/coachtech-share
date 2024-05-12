import React from "react";
import '../css/app.css';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { AuthHeader } from "./components/AuthHeader";
import { Message } from "./components/Message";
import { SideNav } from "./components/SideNav";
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
                {/* <ul>
                    <li>
                        <Link to="/">Top</Link>
                    </li>
                    <li>
                        <Link to="/mypage">My</Link>
                    </li>
                    <li>
                        <Link to="/posts">Post</Link>
                    </li>
                </ul> */}
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
