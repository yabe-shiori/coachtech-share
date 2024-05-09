<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function register(Request $request)
    {
        // リクエストからユーザー情報を取得
        $userData = $request->only(['name', 'email', 'password']);

        // ユーザーをデータベースに保存
        $user = User::create([
            'name' => $userData['name'],
            'email' => $userData['email'],
            'password' => bcrypt($userData['password']), // パスワードはハッシュ化して保存
        ]);

        // 保存したユーザーを返す（任意）
        return response()->json(['user' => $user], 201);
    }
}
