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
        
        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_4',
            'body' =>
            '久しぶりにランニングを再開しました🏃‍♂️ 気持ちの良い風と自然の中でリフレッシュ！健康第一💪 #ランニング #健康 #リフレッシュ',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_5',
            'body' =>
            '自宅で手作りピザに挑戦🍕 チーズたっぷりで大成功！家族も大喜びでした。次はどんな具材にしようかな？ #手作りピザ #料理 #家族',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_1',
            'body' =>
            '今日は図書館で一日中読書📚 静かな環境で集中できました。新しい知識をたくさん得られて満足！ #読書 #図書館 #学び',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_2',
            'body' =>
            '新しいギターを購入しました🎸 音色が素晴らしくて、毎日弾くのが楽しみです。早く上手くなりたい！ #ギター #音楽 #趣味',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_3',
            'body' =>
            '今日は公園でピクニックをしました🌳 自然の中で過ごす時間はとてもリラックスできます。お弁当も美味しかったです🍱 #ピクニック #公園 #リラックス',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_4',
            'body' =>
            '新しいカフェを発見しました！店内の雰囲気も良くて、抹茶ラテがとても美味しかったです🍵 また行きたい！ #カフェ巡り #抹茶ラテ #おしゃれ',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 'firebase_uid_5',
            'body' =>
            '今日は友達とハイキングに行きました⛰️ 山の頂上からの景色が最高で、リフレッシュできました。 #ハイキング #自然 #リフレッシュ',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
