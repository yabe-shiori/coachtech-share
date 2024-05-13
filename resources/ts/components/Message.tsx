
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    onLike: (postId: number) => void;
}

export const Message: React.FC<MessageProps> = ({ post, user, onDeletePost, onLike, showDetailButton }) => {
    const { id, body, user_id } = post;
    const [userName, setUserName] = useState('Unknown User');

    console.log(user)

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

    const handleLike = () => {
        onLike(id);
    };

    const handleDeleteClick = () => {
        onDeletePost(id);
    };

    return (
        <div className="bg-gray-900 p-5 border border-white cursor-pointer break-words w-11/12">
            <div className="flex">
                <p className="text-white font-bold text-lg mr-4">
                    {userName}
                </p>
                <img
                    src="/icons/heart.png"
                    className="w-8 h-8 cursor-pointer"
                    onClick={handleLike}
                />
                <p className="text-white mx-3"> {post.likes.length}</p>
                <img
                    src="/icons/cross.png"
                    className="w-8 h-8 cursor-pointer mr-12"
                    onClick={handleDeleteClick}
                />
                <Link
                    to={`/posts/${id}`}
                    state={{ user: user }}
                    className={showDetailButton ? "" : "hidden"}
                >
                    <img
                        src="/icons/detail.png"
                        alt="Detail"
                        className="w-8 h-8 cursor-pointer"
                    />
                </Link>
            </div>
            <p className="text-white">{body}</p>
        </div>
    );
};
