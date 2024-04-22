<?php

namespace App\Http\Controllers;

use App\Models\Data_anak;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // Mengambil semua data anak
        $data_anak = Data_anak::all();

        // Menghitung total data anak
        $totalDataAnak = $data_anak->count();

        // Menghitung jumlah data anak laki-laki
        $persentasiLakiLaki = Data_anak::where('jk', 'Laki-laki')->count();

        // Menghitung jumlah data anak perempuan
        $persentasiPerempuan = Data_anak::where('jk', 'Perempuan')->count();

        return inertia("Dashboard", compact('totalDataAnak', 'persentasiLakiLaki', 'persentasiPerempuan'));
    }
}
