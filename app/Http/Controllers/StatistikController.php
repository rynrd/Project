<?php

namespace App\Http\Controllers;

use App\Models\Statistik;
use App\Http\Requests\StoreStatistikRequest;
use App\Http\Requests\UpdateStatistikRequest;
use App\Http\Resources\Data_anakResource;
use App\Http\Resources\StatistikResource;

class StatistikController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Statistik::query();
        $sortField = request("sort_field", 'id');
        $sortDirection = request("sort_direction", "desc");
        if (request("nama_anak")) {
            $query->where("nama_anak", "like", "%" . request("nama_anak") . "%");
        }
        if (request("nik")) {
            $query->where("nik", request("nik"));
        }
        if (request("jk")) {
            $query->where("jk", request("jk"));
        }
        $statistiks = $query->orderBy($sortField, $sortDirection)->paginate(10);
        return inertia("Statistik/Index", [
            'statistik' => StatistikResource::collection($statistiks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStatistikRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Statistik $statistik)
    {
        $query = $statistik->data_anak(); // Ubah menjadi metode yang sesuai
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        if (request("nama_anak")) {
            $query->where("nama_anak", "like", "%" . request("nama_anak") . "%");
        }
        if (request("nik")) {
            $query->where("nik", request("nik"));
        }
        if (request("jk")) {
            $query->where("jk", request("jk"));
        }
        $statistiks = $query->orderBy('id', 'desc')->paginate(10);
        $data_anak = $statistik->data_anak;
        return inertia("Statistik/Show", [
            'statistik' => new StatistikResource($statistik),
            'data_anak' => new Data_anakResource($data_anak),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Statistik $statistik)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStatistikRequest $request, Statistik $statistik)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Statistik $statistik)
    {
        //
    }
}
