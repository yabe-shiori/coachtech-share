import React, { useState } from "react";
import { Guest } from "../layouts/GuestLayout";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("ログインに成功しました", user);
            navigate("/", { state: { user: { name: user.email } } }); 
        } catch (error) {
            console.error("ログインエラー:", error.message);
            // ログインエラーの場合の処理
        }
    };

    return (
        <Guest>
            <h2 className="text-center font-bold text-lg">ログイン</h2>
            <form className="mt-4" onSubmit={handleLogin}>
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        className="mt-1 block w-full"
                        placeholder="パスワード"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mx-auto my-4">
                    <PrimaryButton type="submit">ログイン</PrimaryButton>
                </div>
            </form>
        </Guest>
    );
};
