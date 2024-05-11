import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { Message } from "../components/Message";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Index = () => {
    const [posts, setPosts] = useState([]);
    const [postCreated, setPostCreated] = useState(false);
    const location = useLocation();
    const user = location.state?.user;

    // ユーザーがログインしていない場合は/loginにリダイレクトする
    if (!user) {
        return <Navigate to="/login" />;
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("/api/posts");
                setPosts(response.data.posts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };
        fetchPosts();
    }, [postCreated]);

    //投稿削除
    const handleDeletePost = async (postId: number) => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            setPostCreated(!postCreated);
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    // いいねの処理
    const handleLikePost = async (postId: number) => {
        try {
            await axios.post(`/api/likes`, {
                user_id: user.uid,
                post_id: postId,
            });
            setPostCreated(!postCreated);
        } catch (error) {
            console.error("Failed to like post:", error);
        }
    };

    return (
        <div className="flex bg-gray-900 text-white">
            <p>{user.name}</p>
            <div className="w-1/4 h-screen">
                <SideNav user={user} />
            </div>
            <div className="w-3/4">
                <p className="text-2xl font-bold p-2">ホーム</p>
                <div>
                    {posts.map((post) => (
                        <Message
                            key={post.id}
                            post={post}
                            user={user}
                            onDeletePost={handleDeletePost}
                            onLikePost={handleLikePost}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};