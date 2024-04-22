<?php

namespace Database\Seeders;

use App\Models\Data_anak;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'User',
            'email' => 'user@example.com',
            'password' => bcrypt('user1234'), // Menggunakan bcrypt untuk meng-hash password
        ]);

        Data_anak::factory()
        ->count(30)
        ->hasStatistiks(30)
        ->create();

    }
}
