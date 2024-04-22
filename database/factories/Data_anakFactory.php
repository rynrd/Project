<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Data_anak>
 */
class Data_anakFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tahun = $this->faker->numberBetween(1, 5); // Usia antara 1-5 tahun
        $bulan = $this->faker->numberBetween(0, 11); // Bulan antara 0-11 (0 berarti tidak ada bulan)

        // Format usia dalam "n tahun n bulan"
        $usia = ($tahun > 1 ? $tahun . ' tahun ' : ($tahun == 1 ? '1 tahun ' : '')) . ($bulan > 0 ? $bulan . ' bulan' : '');

        return [
            'image_path' => $this->faker->imageUrl(),
            'nama_anak' => $this->faker->name,
            'nik' => $this->faker->numerify('############'), // Menghasilkan nomor acak 12 digit
            'tgl_lahir' => $this->faker->dateTimeBetween('-5 years', 'now')->format('Y-m-d'), // Batasan tanggal lahir antara 5 tahun yang lalu hingga sekarang
            'usia' => $usia,
            'jk' => $this->faker->randomElement(['Laki-laki', 'Perempuan']),
            'nama_ibu' => $this->faker->name('female'), // Nama ibu dengan jenis kelamin perempuan
        ];
    }
}
