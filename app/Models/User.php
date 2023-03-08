<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    static $rules = [
        'name' => 'required',
        'email' => 'required',
        'password' => 'required',
    ];

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar'
    ];

    public function travels()
    {
        return $this->hasMany(Travel::class);
    }

    public function travel()
    {
        return $this->belongsToMany(Travel::class, 'bookings')->with('user');
    }


    public function votesFor()
    {
        return $this->belongsToMany(User::class, 'ratings', 'user2_id', 'user1_id')
            ->withPivot('score', 'comment')
            ->as('rating');
    }

    public function myVotes()
    {
        return $this->belongsToMany(User::class, 'ratings', 'user1_id', 'user2_id')
            ->withPivot('score', 'comment')
            ->as('rating');
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
