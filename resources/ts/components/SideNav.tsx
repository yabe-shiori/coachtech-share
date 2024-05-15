import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

interface Props {
    user: { uid: string };
    handleCreatePost: () => void;
}

type FormData = {
    postContent: string;
};

export const SideNav: React.FC<Props> = ({ user, handleCreatePost }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [errorMessage, setErrorMessage] = useState<string>("");
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const { postContent } = data;

        if (!postContent.trim()) {
            setErrorMessage("投稿内容は必須です。");
            return;
        }

        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ body: postContent, user_id: user.uid })
            });

            if (!response.ok) {
                throw new Error("Failed to post");
            }

            reset();
            handleCreatePost();

            setErrorMessage("");
        } catch (error) {
            console.error("Post error:", error);
            setErrorMessage("投稿に失敗しました。");
        }
    };

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            navigate("/login");
            console.log("ログアウトしました");
        } catch (error) {
            console.error("ログアウトエラー:", error);
        }
    };

    return (
        <div className="bg-gray-900 text-white pt-5 px-3">
            <div>
                <img src="/icons/logo.png" alt="Logo" className="w-24" />
            </div>
            <div className="flex items-center mt-4">
                <Link to={`/`} state={{ user: user }} className="flex items-center cursor-pointer">
                    <img src="/icons/home.png" className="w-6 mr-4" />
                    ホーム
                </Link>
            </div>
            <div className="flex items-center mt-4">
                <img src="/icons/logout.png" className="w-6 mr-4 cursor-pointer" onClick={handleLogout} />
                <button onClick={handleLogout}>ログアウト</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <p>シェア</p>
                <textarea
                    className="w-full h-28 my-2 p-2 rounded-xl bg-gray-900 text-white outline-none border border-white"
                    {...register("postContent", { required: true, maxLength: 120 })}
                ></textarea>
                {errors.postContent && errors.postContent.type === "required" && (
                    <p className="text-red-500">投稿内容は必須です。</p>
                )}
                {errors.postContent && errors.postContent.type === "maxLength" && (
                    <p className="text-red-500">投稿内容は120文字以内で入力してください。</p>
                )}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div className="text-right">
                    <PrimaryButton type="submit">
                        シェアする
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};