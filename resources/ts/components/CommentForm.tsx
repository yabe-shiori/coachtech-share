import React from "react";
import PrimaryButton from "./PrimaryButton";

export const CommentForm = () => {
    return <div>
        <div className="max-h-40 overflow-y-auto w-11/12"
        >
            {/* 保存されたコメントを表示 */}
            <div className="border border-white p-2 mb-2 break-words">
                <p className="text-2xl font-bold m-0">コメントしたユーザー名
                </p>
                <p>ここにコメント内容が入ります</p>
            </div>
        </div>
        {/* コメント入力フォーム */}
        <div className="m-4">
            <form >
                <textarea className="bg-gray-900 text-white w-11/12 rounded-xl border border-white"
                />
                <div className="text-right">
                    <PrimaryButton type="submit">コメント</PrimaryButton>
                </div>
            </form>
        </div>
    </div>
};
