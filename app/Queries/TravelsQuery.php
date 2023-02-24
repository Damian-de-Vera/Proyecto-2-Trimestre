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
        $user = new Travel();

        $result = Travel::with('user')->latest('updated_at')->where('origin', 'like', $origin)->get();
        return $result;
    }
}
