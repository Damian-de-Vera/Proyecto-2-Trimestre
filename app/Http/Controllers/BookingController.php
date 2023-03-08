<?php

namespace App\Http\Controllers;

use App\Mail\TravelBooked;
use Illuminate\Support\Facades\Session;
use App\Notifications\NewBooking;
use App\Models\Booking;
use App\Models\Travel;
use App\Models\User;
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
            $travel = Travel::find($request->trave_id);
            $booking = Booking::firstOrNew([
                'user_id' => $request->user_id,
                'travel_id' => $request->travel_id
            ]);


            if ($booking->id) {
                $this->delete($booking);
            } else {
                // Envía correo al propietario del coche
                // $travel->user->notify(new NewBooking($booking));
                // Envía correo al usuario que hace la reserva            
                //User::find(Auth::id())->notify(new NewBooking($booking));
                Session::flash('message', ' Se ha reservado correctamente');
                Booking::create($request->all());
                // Restar una plaza a los asientos disponibles
                $travel = Travel::find($request->travel_id);
                $travel->seats = $travel->seats - 1;
                $travel->save();
                return back();
            }
        }
    }

    public function delete($booking)
    {
        Session::flash('message', ' Se ha borrado la reserva');

        Booking::where('id', $booking->id)->delete();
        $travel = Travel::find($booking->travel_id);
        $travel->seats = $travel->seats + 1;
        $travel->save();
        return back();
    }
    public function deleteViaje(Request $request)
    {

        Session::flash('message', ' Se ha borrado la reserva');

        Booking::where('id', $request->id)->delete();
        $travel = Travel::find($request->travel_id);
        $travel->seats = $travel->seats + 1;
        $travel->save();
        return back();
    }
}
