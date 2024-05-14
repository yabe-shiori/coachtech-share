<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 1,
            'comment' => 'これはテストコメントです',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 1,
            'comment' => 'これはテストコメントです',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 2,
            'comment' => 'これはテストコメントです',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 2,
            'comment' => 'これはテストコメントです',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 3,
            'comment' => 'これはテストコメントです',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 3,
            'comment' => 'これはテストコメントです',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}

