import React from "react";
import { Navigate } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { Message } from "../components/Message";
import { useLocation } from "react-router-dom";

export const Index = () => {
    const location = useLocation();
    const user = location.state?.user;

    // ユーザーがログインしていない場合は/loginにリダイレクトする
    // if (!user) {
    //     return <Navigate to="/login" />;
    // }

    return (
        <div className="flex bg-gray-900 text-white">
            <p>{user.name}</p>
            <div className="w-1/5 h-screen">
                <SideNav user={user} />
            </div>
            <div className="w-4/5">
                <p className="text-2xl font-bold p-2">ホーム</p>
                <div>
                    <Message />
                </div>
            </div>
        </div>
    );
};