<?php

namespace App\Queries;

use App\Models\User;

class BookingsQuery
{

    public function getAll()
    {
        $result = User::with('travels')->latest('updated_at')->get();
        return $result;
    }


}
