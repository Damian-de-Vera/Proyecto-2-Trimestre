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


Route::get('/perfil', function () {
    $user = Auth::user();
    if ($user != null) {
        return Inertia::render('PerfilPage', ['user' => $user,]);
    } else {
        return Inertia::render('LoginPage');
    }
});

Route::get('/perfilUser', [App\Http\Controllers\UserController::class, 'perfil'])->middleware(['auth', 'verified'])->name('perfilUser');


Route::post('reservarRuta', [App\Http\Controllers\BookingController::class, 'store'])->middleware(['auth', 'verified'])->name('reservar');

Route::get('misViajes', [App\Http\Controllers\BookingController::class, 'index'])->middleware(['auth', 'verified'])->name('misViajes');


Route::get('/buscar', [App\Http\Controllers\TravelsController::class, 'index']);

Route::post('publicarRuta', [App\Http\Controllers\TravelsController::class, 'store'])->middleware(['auth', 'verified'])->name('publicar');
Route::post('updateUser', [App\Http\Controllers\UserController::class, 'update'])->middleware(['auth', 'verified'])->name('update');
Route::post('cancelarViaje', [App\Http\Controllers\BookingController::class, 'delete'])->middleware(['auth', 'verified'])->name('delete');
Route::post('cambiarAvatar', [App\Http\Controllers\UserController::class, 'avatar'])->middleware(['auth', 'verified'])->name('avatar');


Route::get('/loginReact', function () {
    return Inertia::render('LoginPage');
});

Route::get('/registerReact', function () {
    return Inertia::render('RegisterPage');
});

// User Management
// Route::get('/users', [App\Http\Controllers\UserController::class, 'index'])->middleware('auth');
// Route::get('/users', [App\Http\Controllers\UserController::class, 'create'])->middleware('auth');
Route::resource('/users', App\Http\Controllers\UserController::class)->middleware('auth');
