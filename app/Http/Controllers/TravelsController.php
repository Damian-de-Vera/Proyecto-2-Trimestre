<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use App\Queries\TravelsQuery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class TravelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $query = new TravelsQuery();
        $user = Auth::user();
        // $origin = "";
        // $destination = "";
        $date = "";

        // if (isset($_GET["origin"])) {
        //     $origin = htmlspecialchars($_GET["origin"]);
        // }
        // if (isset($_GET["destination"])) {
        //     $destination = htmlspecialchars($_GET["destination"]);
        // }

        if (isset($_GET["date"])) {
            $date = htmlspecialchars($_GET["date"]);
        }
        //Queries
        // if ($destination && $origin) {
        //     $travels = $query->getAllByDestinationAndOrigin($destination, $origin);
        //     return Inertia::render('BuscarPage', ['user' => $user, 'travel' => $travels]);
        // } else if ($origin) {
        //     $travels = $query->getAllByOrigin($origin);
        //     return Inertia::render('BuscarPage', ['user' => $user, 'travel' => $travels]);
        // } else if ($destination) {
        //     $travels = $query->getAllByDestination($destination);
        //     return Inertia::render('BuscarPage', ['user' => $user, 'travel' => $travels]);
        // } 

        if ($date) {
            $travels = $query->getAllByDate($date);
            return Inertia::render('BuscarPage', ['user' => $user, 'travel' => $travels]);
        } else {
            $travels = $query->getAll();
            return Inertia::render('BuscarPage', ['user' => $user, 'travel' => $travels]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'origin' => ['required', 'string', 'max:255'],
            'destination' => ['required', 'string', 'max:255'],
            'date' => ['date', 'after:tomorrow'],
            'hour' => ['required'],
            'seats' => ['required', 'regex:/^[a-z0-9 ]+$/i', 'max:2'], //el regex es para comprobar que es un n??mero
            'price' => ['required', 'regex:/^[a-z0-9 ]+$/i', 'max:3']

        ]);
        Travel::create($request->all());
        $user = Auth::user();
        Session::flash('message', 'Ruta publicada');
        // return Inertia::render('PublicarPage', ['user' => $user,]);
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function show(Travel $travel)
    {
        $currentUser = Auth::user();
        $user = $travel->user;
        return Inertia::render('ReservarModalPage', ['user' => $currentUser, 'conductor' => $user, 'travel' => $travel]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function edit(Travel $travel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Travel $travel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Travel  $travel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Travel $travel)
    {
        //
    }
}
