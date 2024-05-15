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
            'name' => 'ふりかけ🍙',
            'email' => 'hurikake@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_2',
            'name' => 'クマ次郎🐻',
            'email' => 'kuma@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_3',
            'name' => 'kinako🐰',
            'email' => 'kinako@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_4',
            'name' => 'お餅🍡',
            'email' => 'omoti@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'id' => 'firebase_uid_5',
            'name' => 'キツネ@Hokkaido🦊',
            'email' => 'kitsuneko@example.com',
            'password' => Hash::make('password'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}

