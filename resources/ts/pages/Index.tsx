import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { Message } from "../components/Message";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export interface Post {
    id: number;
    body: string;
    user_id: string;
    likes: { user_id: number }[];
}

export const Index = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [postCreated, setPostCreated] = useState(false);
    const location = useLocation();
    const user = location.state?.user;
    const navigate = useNavigate();

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

    const handleDeletePost = async (postId: number) => {
        try {
            await axios.delete(`/api/posts/${postId}/delete`);
            setPostCreated(!postCreated);
            navigate("/", { state: { user: user } });
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    const handleLikePost = async (postId: number) => {
    try {
        const postIndex = posts.findIndex((post: any) => post.id === postId);
        const post = posts[postIndex];

        const existingLikeIndex = post.likes.findIndex(
            (like: any) => like.user_id === user.uid
        );

        if (existingLikeIndex !== -1) {
            await axios.delete(
                `/api/likes/${post.likes[existingLikeIndex].user_id}`
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

    return (
        <div className="flex bg-gray-900 text-white">
            <div className="w-1/4 h-screen">
                <SideNav user={user} handleCreatePost={() => setPostCreated(!postCreated)} />
            </div>
            <div className="w-3/4">
                <p className="text-2xl font-bold p-2">ホーム</p>
                <div>
                    {posts.map((post) => (
                        <Message
                            key={post.id}
                            post={post}
                            user={user}
                            likes={post.likes}
                            onDeletePost={handleDeletePost}
                            onLike={handleLikePost}
                            showDetailButton={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};