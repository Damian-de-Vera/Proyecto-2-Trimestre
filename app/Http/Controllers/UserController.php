<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Ratings;
use App\Queries\RatingsQuery;
use App\Queries\UserQuery;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::paginate(15);

        $user = Auth::user();
        if ($user->admin == 1) {
            return view('user.index', compact('users'))
                ->with('i', (request()->input('page', 1) - 1) * $users->perPage());
        } else {
            return back();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = new User();
        return view('user.create', compact('user'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(User::$rules);

        $user = User::create($request->all());

        return redirect()->route('user.index')
            ->with('success', 'User created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);

        return view('user.show', compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::find($id);

        return view('user.edit', compact('user'));
    }

    public function perfil(Request $request)
    {
        $user = Auth::user();
        if ($user == null) {
            return Inertia::render('LoginPage');
        }

        $query = new UserQuery();
        $user = $query->getUser($request->user_id);
        if ($user == null) {
            return back();
        }

        $ratingsQuery = new RatingsQuery();
        $ratings = $ratingsQuery->getAllById($user->id);
        if ($user == null) {
            return back();
        }

        if ($user == Auth::user()) {
            $ratings = $ratingsQuery->getAllMyVotes($user->id);
            return Inertia::render('PerfilPage', ['user' => Auth::user(), 'ratings' => $ratings]);
        } else {
            return Inertia::render('PerfilPage', ['userPerfil' => $user, 'user' => Auth::user(), 'userDiferente' => true, 'ratings' => $ratings]);
        }
    }

    public function rating(Request $request)
    {
        Ratings::create($request->all());
        $query = new UserQuery();
        $query->getUser($request->user1_id);
        Session::flash('message', 'Usuario valorado!');

        return back();
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $query = new UserQuery();

        $xd = $query->getAllEmail();

        foreach ($xd as $i) {

            if ($request->email == $i && $request->email != Auth::user()->email) {
                Session::flash('errormessage', 'Ese email ya existe!');
                return back();
            }
        }
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'max:255'],
            'password' => ['required', 'max:255', 'min:9'],
            'password_confirmation' => ['required', 'max:255', 'min:9'],


        ]);

        if ($request->password != $request->password_confirmation) {
            Session::flash('errormessage', 'La contraseña y su confirmación deben coincidir!');
            return back();
        }
        Session::flash('message', 'Perfil actualizado');
        $currentUser = Auth::user();
        $query->updateUser($request, $currentUser);
        return back();

        // return Inertia::render('PerfilPage', ['user' => $result]);
    }


    public function avatar(Request $request)
    {
        $currentUser = Auth::user();
        $query = new UserQuery();
        if ($_FILES['avatar']['type'] == "image/jpeg" || $_FILES["avatar"]["type"] == "image/png" || $_FILES['avatar']['type'] == "image/jpg") {
            $query->updateAvatar($request, $currentUser);
            Session::flash('message', 'Avatar actualizado!');
        } else {
            Session::flash('errormessage', 'Archivo inválido');
            return back();
        }
        return back();
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $user = User::find($id)->delete();

        return redirect()->route('users.index')
            ->with('success', 'User deleted successfully');
    }
}
