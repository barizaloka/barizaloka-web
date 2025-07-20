<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function landing_page()
    {
        return view('pages.home.landing_page');
    }
}
