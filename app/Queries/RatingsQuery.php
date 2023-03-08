<?php

namespace App\Queries;

use App\Models\Booking;
use App\Models\Ratings;
use App\Models\Travel;
use App\Models\User;

class RatingsQuery
{

    public function getAllById($id)
    {
        $user = User::find($id);
        $result = $user->with('myVotes')->where('id', $id)->latest('updated_at')->get();

        return $result;
    }

    public function getAllMyVotes($id)
    {
        $user = User::find($id);
        $result = $user->with('myVotes')->where('id', $id)->latest('updated_at')->get();

        return $result;
    }
}
