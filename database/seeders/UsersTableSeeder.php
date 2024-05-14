<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'id' => 'firebase_uid_1',
            'name' => 'キラキラ星太郎✨',
            'email' => 'taro@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_2',
            'name' => 'ふわふわ🐻クマ次郎',
            'email' => 'jiro@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_3',
            'name' => 'にこにこ😊🐰ウサギ三郎',
            'email' => 'saburo@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_4',
            'name' => '光彦',
            'email' => 'hikaru@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_5',
            'name' => 'キツネ🦊',
            'email' => 'kitsuneko@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}

