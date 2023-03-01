<?php

namespace App\Queries;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserQuery
{
    public function updateUser(Request $request, $currentUser)
    {
        $result = User::where('id', $currentUser->id)->first();
        $password = Hash::make($request->password);
        $result->name = $request->name;
        $result->email = $request->email;
        $result->password = $password;
        $result->save();
        return $result;
    }

    public function updateAvatar(Request $request, $currentUser)
    {
        dd($request->all());
        $file = $request->hasFile('avatar');
        if ($file) {
            $newFile = $request->file('avatar');
            $file_name = $newFile->store('images');
            dd($file_name);
        }
        dd($file);
    }
}
