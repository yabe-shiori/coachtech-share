import React from "react";

export const Message = ({ post, user, onDeletePost }) => {
    const { id, body } = post; // 追加: postからidを取得

    const handleDeleteClick = () => {
        onDeletePost(id); // 削除ボタンがクリックされたらonDeletePostを呼び出す
    };

    return (
        <div className="bg-gray-900 p-5 border border-white cursor-pointer break-words mx-4">
            <div className="flex">
                <p className="text-white font-bold text-lg mr-2">
                    {user.name}
                </p>
                <img
                    src="/icons/heart.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                />
                <p className="text-white mr-2"> いいねの数</p>
                <img
                    src="/icons/cross.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                    onClick={handleDeleteClick} // 追加: 削除ボタンがクリックされたらhandleDeleteClickを呼び出す
                />
                <a href="">
                    <img
                        src="/icons/detail.png"
                        alt="Detail"
                        className="w-8 h-8 cursor-pointer ml-12"
                    />
                </a>
            </div>
            <p className="text-white">{body}</p>
        </div>
    );
};