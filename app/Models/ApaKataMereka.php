<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApaKataMereka extends Model
{
    protected $table = "apa_kata_mereka";

    protected $fillable = [
        "name",
        "image",
        "position",
        "link",
        "quote"
    ];
}
