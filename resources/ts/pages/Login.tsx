import React from "react";
import { Guest } from "../layouts/GuestLayout";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";

export const Login = () => {
    return (
        <Guest>
            <h2 className="text-center font-bold text-lg">ログイン</h2>
            <form className="mt-4">
                <div>
                    <TextInput id="email" type="text" className="mt-1 block w-full" placeholder="メールアドレス"/>
                </div>
                <div className="mt-4">
                    <TextInput id="password" type="password" name="password" className="mt-1 block w-full" placeholder="パスワード" />
                </div>
                <div className="mx-auto my-4">
                    <PrimaryButton>
                        ログイン
                    </PrimaryButton>
                </div>
            </form>
        </Guest>
    );
};
