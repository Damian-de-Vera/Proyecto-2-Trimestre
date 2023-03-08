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
        $result->about_me = $request->about_me;
        $result->save();
        return $result;
    }

    public function updateAvatar(Request $request, $currentUser)
    {

        if ($request->hasFile('avatar')) {

            $destination_path = 'public/assets/img';
            $image = $request->file('avatar');
            $image_name  = $image->getClientOriginalName();
            $request->file('avatar')->storeAs($destination_path, $image_name);

            $result = User::where('id', $currentUser->id)->first();
            $result->avatar = $image_name;
            $result->save();
            return $result;
        };
    }

    public function getUser($id)
    {
        $result = User::where('id', $id)->first();

        return $result;
    }

    public function getAllEmail()
    {
        $result = User::get()->pluck('email');


        return $result;
    }
}
