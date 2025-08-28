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
        Schema::create('apa_kata_mereka', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable(true);
            $table->string('name');
            $table->string('position');
            $table->string('link')->nullable(true);
            $table->string('quote');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('apa_kata_mereka');
    }
};
