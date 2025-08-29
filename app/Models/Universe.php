<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Universe extends Model
{
    protected $table = "universe";

    protected $fillable = [
        "name",
        "description",
        "slug",
        "category",
        "url"
    ];

    protected function category(): Attribute
    {
        return Attribute::make(
            set: function ($value) {
                $allowed = ['mobile', 'desktop', 'web', 'all'];

                if (!in_array($value, $allowed)) {
                    throw new \InvalidArgumentException("Invalid category value: $value");
                }

                return $value;
            }
        );
    }
}
