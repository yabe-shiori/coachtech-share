import React from "react";

export const Message = () => {
    return (
        <div className="bg-gray-900 p-5 border border-white cursor-pointer break-words mx-4">
            <div className="flex">
                <p className="text-white font-bold text-lg mr-2">
                    ユーザーの名前
                </p>
                <img
                    src="/icons/heart.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                />
                <p className="text-white mr-2">いいねの数</p>
                <img
                    src="/icons/cross.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                />
                <a href="">
                    <img
                        src="/icons/detail.png"
                        alt="Detail"
                        className="w-8 h-8 cursor-pointer ml-12"
                    />
                </a>
            </div>
            <p className="text-white">投稿の本文です</p>
        </div>
    );
};
