<?php

namespace App\Http\Controllers;

use App\Models\Data_anak;
use App\Http\Requests\StoreData_anakRequest;
use App\Http\Requests\UpdateData_anakRequest;
use App\Http\Resources\Data_anakResource;
use App\Http\Resources\StatistikResource;

class Data_anakController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Data_anak::query();
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
        $data_anaks = $query->orderBy($sortField, $sortDirection)->paginate(10);
        return inertia("Data_anak/Index", [
            'Data_anak' => Data_anakResource::collection($data_anaks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Data_anak/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreData_anakRequest $request)
    {
        $data = $request->validated();
        Data_anak::create($data);
        return to_route('data_anak.index')->with('success', 'Data Anak Berhasil ditambah.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Data_anak $data_anak)
    {
        $query = $data_anak->statistiks();
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
        $statistiks = $data_anak->statistik()->orderBy($sortField, $sortDirection)->paginate(10);
        return inertia("Data_anak/Show", [
            'data_anak' => new Data_anakResource($data_anak),
            'statistik' => StatistikResource::collection($statistiks),
            'queryParams' => request()->query() ?: null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Data_anak $data_anak)
    {
        return inertia("Data_anak/Edit", [
            'data_anak' => new Data_anakResource($data_anak),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateData_anakRequest $request, Data_anak $data_anak)
    {
        $data = $request->validated();
        $data_anak->update($data);
        return to_route('data_anak.index')->with('success', 'Data Anak \"$data_anak->nama_anak\" Berhasil diubah.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Data_anak $data_anak)
    {
        $name = $data_anak->nama_anak;
        $data_anak->delete();
        return to_route('data_anak.index')->with('success', "Data Anak \"$name\" Berhasil dihapus.");
    }
}
