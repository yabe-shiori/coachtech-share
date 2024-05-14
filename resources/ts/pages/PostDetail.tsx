import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { SideNav } from "../components/SideNav";
import { Message } from "../components/Message";
import { CommentForm } from "../components/CommentForm";
import { Post } from "../pages/Index";
import { Comment } from "../components/CommentForm";

export const PostDetail = () => {
    const [post, setPost] = useState<Post | null>(null);
    const [postCreated, setPostCreated] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const location = useLocation();
    const navigate = useNavigate();

    const user = location.state ? location.state.user : null;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postId = location.pathname.split("/")[2];
                const response = await axios.get(`/api/posts/${postId}`);
                setPost(response.data.post);
                setComments(response.data.post.comments);
            } catch (error) {
                console.error("Failed to fetch post:", error);
            }
        };
        fetchPost();
    }, [location, postCreated]);

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
            if (!post) {
                console.error("Post is null");
                return;
            }

            const existingLike = post.likes.find((like) => like.user_id === user.uid);
            if (!existingLike) {
                await axios.post("/api/likes", {
                    user_id: user.uid,
                    post_id: postId,
                });
            } else {
                await axios.delete(`/api/likes/${existingLike.id}`);
            }

            setPostCreated(!postCreated);
        } catch (error) {
            console.error("Failed to like post:", error);
        }
    };

    const addComment = async (commentData: any) => {
        try {
            const commentWithUserId = { ...commentData, user_id: user.uid, post_id: post?.id };
            const response = await axios.post("/api/comments", commentWithUserId);
            setComments([...comments, response.data.comment]);
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    const handleCreatePost = () => {
        setPostCreated(!postCreated);
    };

    return (
        <div className="flex bg-gray-900 text-white">
            <div className="w-1/4 h-screen">
                <SideNav user={user} handleCreatePost={handleCreatePost} />
            </div>
            <div className="w-3/4 h-screen">
                {post ? (
                    <>
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
                        <CommentForm addComment={addComment} user={user} comments={comments} post={post} />
                    </>
                ) : (
                    <p className="text-center text-xl mt-6">投稿がありません</p>
                )}
            </div>
        </div>
    );
};
