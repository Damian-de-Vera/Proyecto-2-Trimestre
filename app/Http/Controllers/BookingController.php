<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        Booking::create($request->all());
        $user = Auth::user();

        return Inertia::render('TusViajesPage', ['user' => $user,]);
    }
}
