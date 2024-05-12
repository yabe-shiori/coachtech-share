<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

use Inertia\Inertia;

class PostController extends Controller
{
    //投稿一覧表示
    public function index()
    {
        $posts = Post::with(['user', 'likes'])->get();
        return response()->json(['posts' => $posts], 200);
    }


    //投稿作成
    public function store(Request $request)
    {
        $postData = $request->only('body', 'user_id');

        $post = Post::create($postData);

        return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
    }

    //投稿の詳細表示
    public function show($id)
    {
        $post = Post::with(['user', 'likes', 'comments', 'comments.user'])->find($id);

        if (!$post) {
            return response()->json([
                'error' => '投稿が見つかりませんでした。'
            ], 404);
        } else {
            return response()->json([
                'post' => $post
            ]);
        }
    }


    //投稿削除
    public function destroy($id)
    {
        try {
            $post = Post::findOrFail($id);
            $post->delete();

            return response()->json(['message' => 'Post deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete post'], 500);
        }
    }
}
