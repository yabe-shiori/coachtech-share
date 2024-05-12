import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { Message } from "../components/Message";
import { CommentForm } from "../components/CommentForm";
import { auth } from "../firebase";

export const PostDetail = () => {
    const [post, setPost] = useState(null);
    const [postCreated, setPostCreated] = useState(false);
    const location = useLocation();

    // ユーザー情報をロケーションから取得
    const user = location.state ? location.state.user : null;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postId = location.pathname.split("/")[2];
                const response = await axios.get(`/api/posts/${postId}`);
                setPost(response.data.post);
            } catch (error) {
                console.error("Failed to fetch post:", error);
            }
        };
        fetchPost();
    }, [location, postCreated]);

    // 投稿削除
    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`/api/posts/${postId}/delete`);
            setPostCreated(!postCreated);
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    // 投稿に対するいいね処理
    const handleLikePost = async (postId) => {
        try {
            const existingLikeIndex = post.likes.findIndex(
                (like) => like.user_id === user.uid
            );

            if (existingLikeIndex !== -1) {
                await axios.delete(
                    `/api/likes/${post.likes[existingLikeIndex].id}`
                );
            } else {
                await axios.post("/api/likes", {
                    user_id: user.uid,
                    post_id: postId,
                });
            }

            setPostCreated(!postCreated);
        } catch (error) {
            console.error("Failed to like post:", error);
        }
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    console.log(user)
    return (
        <div className="flex bg-gray-900 text-white">
            <div className="w-1/4 h-screen">
                <SideNav user={user} />
            </div>
            <div className="w-3/4 h-screen">
                <p className="text-2xl font-bold p-2">コメント</p>
                <div className="mb-6">
                    <Message
                        key={post.id}
                        post={post}
                        user={user}
                        likes={post.likes}
                        onDeletePost={handleDeletePost}
                        onLike={handleLikePost}
                    />
                </div>
                <p className="text-center text-xl mb-2">コメント</p>
                <CommentForm />
            </div>
        </div>
    );
};
