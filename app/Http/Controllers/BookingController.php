<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Queries\BookingsQuery;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{

    public function index()
    {
        $query = new BookingsQuery();
        $user = Auth::user();
        $id = $user->id;
        $bookings = $query->getAllByUser($id); //devuelve todas las reservas del usuario en concreto
        $reserva = $query->getAll($id); //devuelve la reserva en cuestión
        // dd($bookings);

        return Inertia::render('TusViajesPage', ['user' => $user, 'bookings' => $bookings, 'reserva' => $reserva]);
    }



    public function store(Request $request)
    {
        Booking::create($request->all());
        return back();
    }

    public function delete(Request $request)
    {
        Booking::where('id', $request->input('id'))->delete();
        return back();
    }
}
