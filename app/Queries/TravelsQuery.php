<?php

namespace App\Queries;

use App\Models\Travel;
use App\Models\User;

class TravelsQuery
{


    public function getAll()
    {
        $user = new Travel();

        $result = Travel::with('user')->get();
        return $result;
    }
}
