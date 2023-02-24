<?php

namespace App\Queries;

use App\Models\Travel;
use App\Models\User;

class TravelsQuery
{


    public function getAll()
    {
        $result = Travel::with('user')->latest('updated_at')->get();
        return $result;
    }


    public function getAllByOrigin($origin)
    {

        $result = Travel::with('user')->latest('updated_at')->where('origin', 'like', $origin)->get();
        return $result;
    }
    public function getAllByDestination($destination)
    {

        $result = Travel::with('user')->latest('updated_at')->where('destination', 'like', $destination)->get();
        return $result;
    }
    public function getAllByDestinationAndOrigin($destination, $origin)
    {

        $result = Travel::with('user')->latest('updated_at')->where('destination', 'like', $destination)->where('origin', 'like', $origin)->get();
        return $result;
    }
}
