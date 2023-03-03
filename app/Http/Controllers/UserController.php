<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Queries\UserQuery;
use App\Queries\UsersQuery;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        // return view('user.index')->with('users', $users);

        return view('users.index', compact('users'))->with('users', $users);
    }

  
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = new User();
        return view('users.create', compact('users'));
    }

   
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
  
    }
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255'],
            'password' => ['required'],
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show(User $User)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function edit(User $User)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */

     public function AllUser()
     {
         $all = DB::table('users')->get();
         return view('users.all-user', compact('all'));
     }
 



    public function update(Request $request, User $User)
    {
        Session::flash('message', 'Perfil actualizado');
        $currentUser = Auth::user();
        $query = new UserQuery();
        $result = $query->updateUser($request, $currentUser);
        return back();

        // return Inertia::render('PerfilPage', ['user' => $result]);
    }

    public function update2(Request $request, User $user)
    {
        request()->validate(User::$rules);

        $user->update($request->all());

        return redirect()->route('users.index')
            ->with('success', 'user updated successfully');
    }

    public function avatar(Request $request)
    {
        $currentUser = Auth::user();
        $query = new UserQuery();
        $result = $query->updateAvatar($request, $currentUser);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $User)
    {
        //
    }
}
