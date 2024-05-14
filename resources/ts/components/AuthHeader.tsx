import React from "react";
import { Link } from "react-router-dom";

export const AuthHeader = () => {
    return (
        <div className="bg-gray-800">
            <nav className="flex justify-between py-4 pl-4 pr-8">
                <div>
                    <img src="/icons/logo.png" alt="Logo" className="w-36" />
                </div>
                <div className="flex items-center">
                    <Link to="/register" className="text-white text-lg mr-6">新規登録</Link>
                    <Link to="/login" className="text-white text-lg">ログイン</Link>
                </div>
            </nav>
        </div>
    );
};