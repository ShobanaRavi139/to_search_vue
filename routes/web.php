<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BusinessBuyerController;
use App\Http\Controllers\ProductListingController;
use App\Http\Controllers\TermsandConditionController;
use App\Http\Controllers\MyProfileController;
use App\Http\Controllers\SellerToolsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/businessbuyer', [BusinessBuyerController::class, 'index'])->name('businessbuyer');
Route::get('/listingscategories', [ProductListingController::class, 'index'])->name('listingscategories');
Route::get('/listingsgridcategories', [ProductListingController::class, 'listingsgridcategories'])->name('listingsgridcategories');
Route::get('/listingdetails', [ProductListingController::class, 'listingdetails'])->name('listingdetails');
Route::get('/termsandcondition', [TermsandConditionController::class, 'index'])->name('termsandcondition');
Route::get('/myprofile', [MyProfileController::class, 'index'])->name('myprofile');
Route::get('/seller_dashboard', [SellerToolsController::class, 'seller_dashboard'])->name('seller_dashboard');
Route::get('/seller_my_profile', [SellerToolsController::class, 'seller_my_profile'])->name('seller_my_profile');

Route::get('/buy_leads', [SellerToolsController::class, 'buy_leads'])->name('buy_leads');
Route::get('/manageproducts', [SellerToolsController::class, 'manageproducts'])->name('manageproducts');
Route::get('/quick_add', [SellerToolsController::class, 'quick_add'])->name('quick_add');
Route::get('/edit_product', [SellerToolsController::class, 'edit_product'])->name('edit_product');
Route::get('/catalog_views', [SellerToolsController::class, 'catalog_views'])->name('catalog_views');


Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
