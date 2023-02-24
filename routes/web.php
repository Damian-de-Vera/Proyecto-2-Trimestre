<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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
    $user = Auth::user();

    return Inertia::render('Welcome', ['user' => $user,]);
});

Auth::routes(['verify' => true]); //Activa la verificación en las rutas para laravel/ui
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

Route::get('/welcomereact', function () {
    $user = Auth::user();

    return Inertia::render('Welcome', ['user' => $user,]);
});

Route::get('/publicar', function () {
    $user = Auth::user();
    if ($user != null) {
        return Inertia::render('PublicarPage', ['user' => $user,]);
    } else {
        return Inertia::render('LoginPage');
    }
});

Route::get('buscar', [App\Http\Controllers\TravelsController::class, 'index'])->name('buscar');

Route::post('publicarRuta', [App\Http\Controllers\TravelsController::class, 'store'])->middleware(['auth', 'verified'])->name('publicar');


Route::get('/loginReact', function () {
    return Inertia::render('LoginPage');
});

Route::get('/registerReact', function () {
    return Inertia::render('RegisterPage');
});
