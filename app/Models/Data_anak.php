<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data_anak extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_path', 'nama_anak', 'nik', 'tgl_lahir', 'usia', 'jk', 'nama_ibu',
    ];

    // Hubungan dengan Statistik
    public function statistiks()
    {
        return $this->hasMany(Statistik::class);
    }
}
