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
        $bookings = $query->getAll();
        // dd($bookings);

        return Inertia::render('TusViajesPage', ['user' => $user, 'bookings' => $bookings]);
    }



    public function store(Request $request)
    {
        Booking::create($request->all());
        return back();
    }
}