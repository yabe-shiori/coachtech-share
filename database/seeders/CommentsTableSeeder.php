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
            'comment' => 'まったりしたカフェタイム、最高ですね！☕️ ぜひまた一緒に行きましょう！ ',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 1,
            'comment' => 'コーヒーの香りと楽しい会話、心が満たされますね😊 今度は私も一緒に行きたいです！ ',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 2,
            'comment' => '美味しいランチ、羨ましいです！🍜',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 2,
            'comment' => '料理のクオリティが高いレストランって最高ですよね！😊',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 3,
            'comment' => '感動的な映画は心に残りますね🌟',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 3,
            'comment' => '映画って心に響きますよね😊 一緒に感動できる友達って最高です！',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}

