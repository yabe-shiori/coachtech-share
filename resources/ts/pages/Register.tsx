import { Guest } from "../layouts/GuestLayout";
import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

interface FormData {
    name: string;
    email: string;
    password: string;
}

export const Register = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const user = userCredential.user;

            const uid = user.uid;

            const db = getFirestore();
            await addDoc(collection(db, "users"), {
                email: user.email,
                uid: user.uid,
                name: data.name,
            });

            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: data.name, email: data.email, password: data.password, uid: uid }),
            });

            if (response.ok) {

                navigate("/", { state: { user: { uid: user.uid, name: data.name, email: data.email } } });
            } else {
                console.error("ユーザー登録が失敗しました");
            }
        } catch (error: any) {
            console.error("エラーが発生しました", error);

            if (error.code === "auth/email-already-in-use") {
                alert("このメールアドレスは既に使用されています。別のメールアドレスをお試しください。");
            } else if (error.code === "auth/invalid-email") {
                alert("有効なメールアドレスを入力してください。");
            } else {
                alert("ユーザー登録中にエラーが発生しました。もう一度お試しください。");
            }
        }
    };

    return (
        <Guest>
            <h2 className="text-lg text-center font-bold">新規登録</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextInput
                        type="text"
                        {...register("name", {
                            required: "ユーザーネームは必須です。",
                            maxLength: {
                                value: 20,
                                message: "ユーザーネームは20文字以内で入力してください。",
                            },
                        })}
                        className={`mt-2 block w-full ${errors.name ? "border-red-500" : ""}`}
                        placeholder="ユーザーネーム"
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                    )}
                </div>
                <div className="mt-4">
                    <TextInput
                        type="email"
                        {...register("email", {
                            required: "メールアドレスは必須です。",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "有効なメールアドレスを入力してください。",
                            }
                        })}
                        className={`mt-1 block w-full ${errors.email ? "border-red-500" : ""}`}
                        placeholder="メールアドレス"
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                    )}
                </div>
                <div className="mt-4">
                    <TextInput
                        type="password"
                        {...register("password", {
                            required: "パスワードは必須です。",
                            minLength: {
                                value: 6,
                                message:
                                    "パスワードは6文字以上で入力してください。",
                            },
                        })}
                        className={`mt-1 block w-full ${errors.password ? "border-red-500" : ""}`}
                        placeholder="パスワード"
                    />
                    {errors.password && (
                        <p className="text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="mx-auto my-4">
                    <PrimaryButton type="submit">新規登録</PrimaryButton>
                </div>
            </form>
        </Guest>
    );
};
