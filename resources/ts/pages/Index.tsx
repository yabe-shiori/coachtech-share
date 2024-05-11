import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { Message } from "../components/Message";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface Post {
    id: number;
}

export const Index = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [postCreated, setPostCreated] = useState<boolean>(false);
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
                const fetchedPosts: Post[] = response.data.posts || [];
                setPosts(fetchedPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };
        fetchPosts();
    }, [postCreated]);

    // 投稿削除
    const handleDeletePost = async (postId: number) => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            setPostCreated(prev => !prev);
        } catch (error) {
            console.error("Failed to delete post:", error);
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};