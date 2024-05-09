<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $commentData = $request->only('comment', 'user_id', 'post_id');

        $comment = Comment::create($commentData);

        return response()->json(['comment' => $comment], 201);
    }
}
