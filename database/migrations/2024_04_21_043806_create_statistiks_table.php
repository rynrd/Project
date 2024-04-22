<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('statistiks', function (Blueprint $table) {
            $table->id();
            $table->string('image_path')->nullable();
            $table->string('nama_anak');
            $table->string('nik');
            $table->date('tgl_lahir');
            $table->string('usia');
            $table->string('jk');
            $table->string('nama_ibu');
            $table->foreignId('data_anak_id')->constrained('data_anaks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statistiks');
    }
};
