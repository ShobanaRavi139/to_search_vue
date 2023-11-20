<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('Front/myprofile', []);
    }
}
