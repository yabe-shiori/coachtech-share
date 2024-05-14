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

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 4,
            'comment' => 'ランニングって気持ちいいですよね！私も最近始めたばかりです。リフレッシュ効果が抜群で、心身ともにスッキリします。一緒に走る友達もいると楽しいですよね！💪🏼',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 4,
            'comment' => 'ランニングはストレス発散にも最適ですよね！私もよくやります。自然の中で走ると、普段の生活の疲れが吹き飛びます。健康的な趣味を持つっていいですね！',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 4,
            'comment' => '素敵な投稿ですね！ランニングは心地よい風を感じながら、ストレスを解消できるので、私もよく行きます。これからも健康第一で頑張ってください！',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 5,
            'comment' => '手作りピザ、美味しそうですね！チーズたっぷりのピザって最高ですよね。家族で楽しい時間を過ごせて、本当に素敵です。',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 6,
            'comment' => '図書館で一日中読書、羨ましいです！静かな環境で集中できるのは本当に素晴らしいですね。新しい知識を得ることで、心が豊かになりますし、何か新しい発見があるかもしれませんね！📚✨',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_4',
            'post_id' => 6,
            'comment' => '読書日和ですね！私も最近本を読む時間を増やしたいです。図書館は落ち着いた雰囲気で、集中して読書できますよね。どんな本を読んだのか、教えていただけると嬉しいです！',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_5',
            'post_id' => 7,
            'comment' => '新しいギター、おめでとうございます！！',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 7,
            'comment' => 'ギター、素敵ですね！音色が素晴らしいと、弾くのがますます楽しくなりますよね。私も趣味でギターを弾くのが好きです。',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_1',
            'post_id' => 8,
            'comment' => '公園でのピクニック、楽しそうですね！自然の中で食べるお弁当は格別ですよね。',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 8,
            'comment' => '素敵な投稿ですね！公園でのピクニックって、心が穏やかになりますよね。お弁当を持ってくるだけで、特別な時間が過ごせます。リフレッシュした気持ちで、また新しい一週間が始まりますね！次回も楽しい時間を過ごせますように。😊✨',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 9,
            'comment' => '新しいカフェを見つけると、嬉しいですよね！抹茶ラテ、美味しいですよね。店内の雰囲気も良くて、きっとリラックスできる場所なんでしょうね。私も抹茶ラテが大好きで、ぜひそのカフェに行ってみたいです！☕️😊',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_2',
            'post_id' => 10,
            'comment' => '新しいカフェを見つけると、嬉しいですよね！抹茶ラテ、美味しいですよね。店内の雰囲気も良くて、きっとリラックスできる場所なんでしょうね。私も抹茶ラテが大好きで、ぜひそのカフェに行ってみたいです！☕️😊',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_4',
            'post_id' => 10,
            'comment' => '自然の中で心が洗われる感じ、本当に良いですよね。これからも素敵なアウトドアライフを楽しんでください！',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('comments')->insert([
            'user_id' => 'firebase_uid_3',
            'post_id' => 10,
            'comment' => '山の頂上からの景色は感動的ですし、友達と一緒に行くとより楽しいですよね。私も自然の中で過ごす時間が大好きです。次回も楽しいハイキングができますように！🌿',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
