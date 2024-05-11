export const Message = ({ post, user }) => {
    const { body } = post;

    return (
        <div className="bg-gray-900 p-5 border border-white cursor-pointer break-words mx-4">
            <div className="flex">
                <p className="text-white font-bold text-lg mr-2">
                    {user.name}
                </p>
                <img
                    src="/icons/heart.png"
                    className="w-8 h-8 cursor-pointer mx-2.5"
                />
                <p className="text-white mr-2"> いいねの数</p> {/* いいねの数を表示 */}
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
            <p className="text-white">{body}</p> {/* 投稿の本文を表示 */}
        </div>
    );
};