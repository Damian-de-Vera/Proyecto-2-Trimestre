<?php

namespace App\Queries;

use App\Models\Travel;
use App\Models\User;

class TravelsQuery
{


    public function getById($userId, $travelId)
    {
        $result = Travel::with('user')->where('seats', '>=', '1')->where('user_id', $userId)->where('id', $travelId)->pluck('id');

        return $result->all();
    }

    public function getAll()
    {
        $result = Travel::with('user')->where('seats', '>=', '1')->get();
        return $result;
    }


    public function getAllByOrigin($origin)
    {

        $result = Travel::with('user')->where('seats', '>=', '1')->where('origin', 'like', $origin)->get();
        return $result;
    }
    public function getAllByDestination($destination)
    {

        $result = Travel::with('user')->where('seats', '>=', '1')->latest('updated_at')->where('destination', 'like', $destination)->get();
        return $result;
    }
    public function getAllByDestinationAndOrigin($destination, $origin)
    {

        $result = Travel::with('user')->where('seats', '>=', '1')->latest('updated_at')->where('destination', 'like', $destination)->where('origin', 'like', $origin)->get();
        return $result;
    }

    public function getAllByDate($date)
    {
        $result = Travel::with('user')->where('seats', '>=', '1')->latest('updated_at')->where('date', 'like', $date)->get();
        return $result;
    }
}
