<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SellerToolsController extends Controller
{
    public function seller_dashboard()
    {
        return Inertia::render('Front/seller_dashboard', []);
    }
    public function seller_my_profile()
    {
        return Inertia::render('Front/seller_my_profile', []);
    }
    public function buy_leads()
    {
        return Inertia::render('Front/buy_leads', []);
    }
    public function manageproducts()
    {
        return Inertia::render('Front/manageproducts', []);
    }
    public function quick_add()
    {
        return Inertia::render('Front/quick_add', []);
    }   
    public function edit_product()
    {
        return Inertia::render('Front/edit_product', []);
    } 
    public function catalog_views()
    {
        return Inertia::render('Front/catalog_views', []);
    }
}
