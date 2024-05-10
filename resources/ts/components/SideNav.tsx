import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export const SideNav = (props) => {
    const { user } = props; // propsからuser情報を取得

    const [postContent, setPostContent] = useState(""); // 投稿内容を保持するstate

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        // 投稿内容が空の場合は何もしない
        if (!postContent.trim()) {
            return;
        }

        try {
            // バックエンドのAPIエンドポイントに投稿データを送信する
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ body: postContent, user_id: user.uid }) // ユーザーのuidを含めて投稿データを送信
            });

            if (!response.ok) {
                throw new Error("投稿に失敗しました");
            }

            // 投稿成功時の処理（例: 投稿内容をクリアする）
            setPostContent("");
        } catch (error) {
            console.error("投稿エラー:", error);
            // エラー処理を行う
        }
    };

    return (
        <div className="bg-gray-900 text-white p-5">
            <div>
                <img src="/icons/logo.png" alt="ロゴ" className="w-20" />
            </div>
            <div className="flex items-center mt-4">
                <img src="/icons/home.png" className="w-6 mr-2" />
                <a>
                    ホーム
                </a>
            </div>
            <div className="flex items-center mt-4">
                <img src="/icons/logout.png" className="w-6 mr-2" />
                <a>
                    ログアウト
                </a>
            </div>
            <form onSubmit={handlePostSubmit} className="mt-4">
                <p>シェア</p>
                <textarea 
                    className="w-full h-36 my-2 p-2 rounded bg-gray-800 text-white outline-none"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="投稿内容を入力してください"
                ></textarea>
                <div className="text-right">
                    <PrimaryButton type="submit">
                        シェアする
                    </PrimaryButton>
                </div>
               
            </form>
        </div>
    );
};
