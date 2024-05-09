import React from "react";
import PrimaryButton from "./PrimaryButton";

export const SideNav = () => {
    return (
        <div className="bg-gray-900 text-white p-5">
            <div>
                <img src="/icons/logo.png" alt="ロゴ" className="w-20" />
            </div>
            <div className="flex items-center mt-4">
                <img src="/icons/home.png" className="w-6 mr-2" />
                <a>
                    ホーム
                </a>
            </div>
            <div className="flex items-center mt-4">
                <img src="/icons/logout.png" className="w-6 mr-2" />
                <a>
                    ログアウト
                </a>
            </div>
            <form className="mt-4">
                <p>シェア</p>
                <textarea className="w-full h-36 my-2 p-2 rounded bg-gray-800 text-white outline-none"></textarea>
                <div className="text-right">
                    <PrimaryButton type="submit">
                        シェアする
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};
