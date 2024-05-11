import React from "react";

interface Post {
    id: number;
    body: string;
}

interface User {
    name: string;
}

interface MessageProps {
    post: Post;
    user: User;
    onDeletePost: (postId: number) => void;
    onLikePost: (postId: number) => void; // ここにいいねの処理を受け取る関数の型を追加
}

export const Message: React.FC<MessageProps> = ({ post, user, onDeletePost, onLikePost }) => {
    const { id, body } = post;

    const handleLikeClick = () => {
        // いいねの処理を呼び出す
        onLikePost(id);
    };

    const handleDeleteClick = () => {
        onDeletePost(id);
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
                    onClick={handleLikeClick} // いいねのクリックイベントハンドラを追加
                />
                <p className="text-white mr-2"> いいねの数</p>
                <img
                    src="/icons/cross.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                    onClick={handleDeleteClick}
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
