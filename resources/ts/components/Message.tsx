
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    likes: { user_id: number }[];
    onDeletePost: (postId: number) => void;
    onLikePost: (postId: number) => void;
}

export const Message: React.FC<MessageProps> = ({ post, user, onDeletePost, onLikePost }) => {
    const { id, body, user_id } = post;
    const [userName, setUserName] = useState('Unknown User');

    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const response = await axios.get(`/api/users/${user_id}`);
                setUserName(response.data.name);
            } catch (error) {
                console.error('Failed to fetch user name:', error);
            }
        };
        fetchUserName();
    }, [user_id]);

    const handleLikeClick = () => {
        onLikePost(id);
    };

    const handleDeleteClick = () => {
        onDeletePost(id);
    };

    return (
        <div className="bg-gray-900 p-5 border border-white cursor-pointer break-words mx-4">
            <div className="flex">
                <p className="text-white font-bold text-lg mr-2">
                    {userName}
                </p>
                <img
                    src="/icons/heart.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                    onClick={handleLikeClick}
                />
                <p className="text-white mr-2"> {post.likes.length}</p>
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
