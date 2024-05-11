<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
     public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
    
   public function register(Request $request)
   {
       $userData = $request->only(['name', 'email', 'password', 'uid']);
       $user = new User();
       $user->id = $userData['uid'];
       $user->name = $userData['name'];
       $user->email = $userData['email'];
       $user->password = bcrypt($userData['password']);
       $user->save();

       return response()->json(['user' => $user], 201);
   }
}
