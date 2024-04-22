<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StatistikResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image_path' => $this->image_path,
            'nama_anak' => $this->nama_anak,
            'nik' => $this->nik,
            'tgl_lahir' => $this->tgl_lahir, // Format tanggal lahir
            'usia' => $this->usia,
            'jk' => $this->jk,
            'nama_ibu' => $this->nama_ibu,
            'data_anak' => new Data_anakResource($this->data_anak),
        ];
    }
}
