import React, { useState } from "react";
import { Guest } from "../layouts/GuestLayout";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface LoginFormValues {
    email: string;
    password: string;
}

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;
            console.log("ログインに成功しました", user);

            navigate("/", { state: { user: { uid: user.uid, name: user.displayName } } });
        } catch (error: any) {
            console.error("ログインエラー:", error.message);
            // ログインエラーの場合の処理
        }
    };

    return (
        <Guest>
            <h2 className="text-center font-bold text-lg">ログイン</h2>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextInput
                        type="email"
                        {...register("email", { required: true })}
                        className={`mt-1 block w-full ${errors.email ? "border-red-500" : ""}`}
                        placeholder="メールアドレス"
                    />
                    {errors.email && (
                        <p className="text-red-500">メールアドレスを入力してください。</p>
                    )}
                </div>
                <div className="mt-4">
                    <TextInput
                        type="password"
                        {...register("password", { required: true })}
                        className={`mt-1 block w-full ${errors.password ? "border-red-500" : ""}`}
                        placeholder="パスワード"
                    />
                    {errors.password && (
                        <p className="text-red-500">パスワードを入力してください。</p>
                    )}
                </div>
                <div className="mx-auto my-4">
                    <PrimaryButton type="submit">ログイン</PrimaryButton>
                </div>
            </form>
        </Guest>
    );
};
