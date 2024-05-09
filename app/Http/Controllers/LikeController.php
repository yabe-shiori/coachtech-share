<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;


class LikeController extends Controller
{
    //いいね追加
    public function store(Request $request)
    {
        $requestData = Like::create($request->only('user_id', 'post_id'));
        return response()->json(['like' => $requestData], 201);
    }

    //いいね削除
    public function destroy(Like $like)
    {
        $like->delete();
        return response()->json(['message' => 'Like deleted successfully'], 200);
    }
}
