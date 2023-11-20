<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductListingController extends Controller
{
    public function index()
    {
        return Inertia::render('Front/listingscategories', []);
    }
    public function listingsgridcategories()
    {
        return Inertia::render('Front/listingsgridcategories', []);
    }
    public function listingdetails()
    {
        return Inertia::render('Front/listingdetails', []);
    }
}
