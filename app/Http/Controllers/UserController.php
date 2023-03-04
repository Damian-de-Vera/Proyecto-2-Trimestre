<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Ratings;
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
        $users = User::paginate();

        return view('user.index', compact('users'))
            ->with('i', (request()->input('page', 1) - 1) * $users->perPage());
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

        return redirect()->route('users.index')
            ->with('success', 'User created successfully.');
    }

    // protected function validator(array $data)
    // {
    //     return Validator::make($data, [
    //         'name' => ['required', 'string', 'max:255'],
    //         'email' => ['required', 'string', 'max:255'],
    //         'password' => ['required'],
    //     ]);
    // }

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

        $query = new UserQuery();
        $user = $query->getUser($request->user_id);
        if ($user == Auth::user()) {
            return Inertia::render('PerfilPage', ['user' => Auth::user()]);
        } else {
            return Inertia::render('PerfilPage', ['userPerfil' => $user, 'user' => Auth::user(), 'userDiferente' => true]);
        }
    }

    public function rating(Request $request)
    {
        $user = Ratings::create($request->all());
        $query = new UserQuery();
        $user = $query->getUser($request->user1_id);
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
        Session::flash('message', 'Perfil actualizado');
        $currentUser = Auth::user();
        $query = new UserQuery();
        $result = $query->updateUser($request, $currentUser);
        return back();

        // return Inertia::render('PerfilPage', ['user' => $result]);
    }

    public function avatar(Request $request)
    {
        $currentUser = Auth::user();
        $query = new UserQuery();
        $result = $query->updateAvatar($request, $currentUser);
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
