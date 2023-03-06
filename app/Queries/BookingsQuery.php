<?php

namespace App\Queries;

use App\Models\Booking;
use App\Models\Travel;
use App\Models\User;

class BookingsQuery
{

    // public function getAll()
    // {
    //     $result = User::with('travels')->latest('updated_at')->get();
    //     return $result;
    // }

    public function getAllByUser($id)
    {
        $result = User::with('travel')->where('id', $id)->get();
        return $result;
    }

    public function getBooking()
    {
        $result = Booking::get();
        return $result;
    }

    public function getAll($id)
    {
        $result = Booking::where('user_id', $id)->get();
        return $result;
    }
}
