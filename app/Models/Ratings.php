<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ratings extends Model
{
    use HasFactory;

    protected $fillable = [
        'score', 'comment', 'user1_id', 'user2_id'
    ];
    protected $table = 'ratings';

    public function user1_id()
    {
        return $this->belongsTo(User::class);
    }

    public function user2_id()
    {
        return $this->belongsTo(User::class, 'user2_id');
    }
}
