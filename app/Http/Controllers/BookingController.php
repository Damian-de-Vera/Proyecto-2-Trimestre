<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

use App\Models\Booking;
use App\Models\Travel;
use App\Queries\BookingsQuery;
use App\Queries\TravelsQuery;
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
        $query = new TravelsQuery();
        $comprobar = $query->getById($request->input('user_id'), $request->input('travel_id'));
        if (!empty($comprobar)) {
            Session::flash('errormessage', ' No puedes reservar tus propias rutas');
            return back();
        } else {
            Session::flash('message', ' Se ha reservado correctamente');
            Booking::create($request->all());
            // Restar una plaza a los asientos disponibles
            $travel = Travel::find($request->travel_id);
            $travel->seats = $travel->seats - 1;
            $travel->save();
            return back();
        }
    }

    public function delete(Request $request)
    {
        Session::flash('message', ' Se ha borrado la reserva');

        Booking::where('id', $request->input('id'))->delete();
        $travel = Travel::find($request->travel_id);
        $travel->seats = $travel->seats + 1;
        $travel->save();
        return back();
    }
}
