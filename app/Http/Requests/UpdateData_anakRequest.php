<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateData_anakRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "image_path" => [
                "image", "nullable",
            ],
            "nama_anak" => [
                "required",
                "max:255",
            ],
            "nik" => [
                "required",
                "max:16",
            ],
            "tgl_lahir" => ["date"],
            "usia" => [
                "required",
                "max:25",
            ],
            "jk" => [
                "required",
                Rule::in(["Laki-laki", "Perempuan"]),
            ],
            "nama_ibu" => [
                "required",
                "max:255",
            ],

        ];
    }
}
