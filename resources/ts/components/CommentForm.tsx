import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";

export const CommentForm = ({ addComment, user, comments }) => {
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addComment({ comment: comment, user: user });
            setComment("");
        } catch (error) {
            console.error("Failed to submit comment:", error);
        }
    };

    return (
        <div>
            <div className="max-h-40 overflow-y-auto w-11/12">
                {comments.map((comment, index) => (
                    <div key={index} className="border border-white p-2 mb-2 break-words">
                        <p className="text-2xl font-bold m-0">{comment.user_name}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>

            <div className="m-4">
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="bg-gray-900 text-white w-11/12 rounded-xl border border-white"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="text-right">
                        <PrimaryButton type="submit">コメント</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};