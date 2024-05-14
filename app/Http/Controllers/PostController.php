<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;


class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with(['user', 'likes'])->orderBy('created_at', 'desc')->get();
        return response()->json(['posts' => $posts], 200);
    }

    public function store(Request $request)
    {
        $postData = $request->only('body', 'user_id');

        $post = Post::create($postData);

        return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
    }

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
