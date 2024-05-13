import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import axios from "axios";
import { useForm } from "react-hook-form";

export const CommentForm = ({ addComment, user, comments }) => {
    const { register, handleSubmit: handleSubmitForm, reset, formState: { errors } } = useForm();

    const [userNames, setUserNames] = useState({});

    useEffect(() => {
        const fetchUserNames = async () => {
            try {
                const userIds = comments.map((comment) => comment.user_id);
                const response = await axios.get("/api/getUserNames", { params: { userIds } });
                setUserNames(response.data.userNames);
            } catch (error) {
                console.error("Failed to fetch user names:", error);
            }
        };
        fetchUserNames();
    }, [comments]);

    const handleSubmit = async (data) => {
        try {
            await addComment({ comment: data.comment, user: user });
            reset();
        } catch (error) {
            console.error("Failed to submit comment:", error);
        }
    };

    return (
        <div>
            <div className="max-h-48 overflow-y-auto w-11/12">
                {comments.map((comment, index) => (
                    <div key={index} className="border border-white p-2 mb-2 break-words">
                        <p className="text-base font-bold m-0">
                            {userNames[comment.user_id] || "Unknown User"}
                        </p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>

            <div className="m-4">
                <form onSubmit={handleSubmitForm(handleSubmit)}>
                    <textarea
                        className="bg-gray-900 text-white w-11/12 rounded-xl border border-white px-2"
                        {...register("comment", {
                            required: "コメントは必須です",
                            maxLength: {
                                value: 120,
                                message: "コメントは120文字以下で入力してください"
                            }
                        })}
                    />
                    {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
                    <div className="text-right">
                        <PrimaryButton type="submit">コメント</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
};