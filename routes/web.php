<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Para publicar un viaje debes de estar logeado sino te devolverá a la página del login
Route::get('/publicar', function () {
    $user = Auth::user();
    if ($user != null) {
        return Inertia::render('PublicarPage', ['user' => $user,]);
    } else {
        return Inertia::render('LoginPage');
    }
});

// Ruta para editar tu perfil, además para poder editarlo obviamente deberás estar logeado sino te devolverá a la página del login
Route::get('/perfil', function () {
    $user = Auth::user();
    if ($user != null) {
        return Inertia::render('PerfilPage', ['user' => $user,]);
    } else {
        return Inertia::render('LoginPage');
    }
});

// Ruta para visualizar el perfil de un usuario
Route::get('/perfilUser', [App\Http\Controllers\UserController::class, 'perfil'])->name('perfilUser');

// Ruta para reservar un viaje/ruta
Route::post('reservarRuta', [App\Http\Controllers\BookingController::class, 'store'])->middleware(['auth', 'verified'])->name('reservar');

//cargar el modal para reservar la ruta/viaje
Route::get('travel/show/{travel}', [App\Http\Controllers\TravelsController::class, 'show'])->middleware(['auth', 'verified'])->name('show');

// Ruta para visualizar las rutas que tienes reservadas
Route::get('misViajes', [App\Http\Controllers\BookingController::class, 'index'])->middleware(['auth', 'verified'])->name('misViajes');

// Ruta para buscar los viajes que han sido publicados
Route::get('/buscar', [App\Http\Controllers\TravelsController::class, 'index']);

// Ruta para publicar un viaje/ruta
Route::post('publicarRuta', [App\Http\Controllers\TravelsController::class, 'store'])->middleware(['auth', 'verified'])->name('publicar');

// Ruta para actualizar los datos del usuario
Route::post('updateUser', [App\Http\Controllers\UserController::class, 'update'])->middleware(['auth', 'verified'])->name('update');

// Ruta para poder cancelar los viajes reservados
Route::post('cancelarViaje', [App\Http\Controllers\BookingController::class, 'deleteViaje'])->middleware(['auth', 'verified'])->name('delete');


Route::post('cambiarAvatar', [App\Http\Controllers\UserController::class, 'avatar'])->middleware(['auth', 'verified'])->name('avatar');

// Ruta para votar a un usuario
Route::post('rating', [App\Http\Controllers\UserController::class, 'rating'])->middleware(['auth', 'verified'])->name('perfilUser');


Route::get('/loginReact', function () {
    return Inertia::render('LoginPage');
});


Route::get('/registerReact', function () {
    $user = Auth::user();
    if ($user != null) {
        return back();
    } else {
        return Inertia::render('RegisterPage');
    }
});

// User Management
Route::resource('/users', App\Http\Controllers\UserController::class)->middleware(['auth']);
