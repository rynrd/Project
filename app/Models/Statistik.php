<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistik extends Model
{
    use HasFactory;

    // Hubungan dengan DataAnak
    public function data_anak()
    {
        return $this->belongsTo(Data_anak::class);
    }
}
