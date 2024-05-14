<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_1',
            'body' =>
            '今日は友達とカフェでまったり。美味しいコーヒーと楽しいおしゃべりで最高の休日を過ごしました☕️ #カフェ #コーヒー #休日',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_2',
            'body' =>
            '新しいレストランで美味しいランチを食べました🍜 シェフのこだわりが感じられる料理に感動！また行きたいです😋 #ランチ #レストラン #美味しい',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_3',
            'body' =>
            '今日は友達と映画館で映画を観てきました🎬 感動的なストーリーに心が洗われました。感謝の気持ちでいっぱいです✨ #映画 #感動 #友達と',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
