<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Travel>
 */
class TravelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
        'origin' => fake()->timezone(),
        'destination' => fake()->timezone(),
        'date' => fake()->date(),
        'hour' => fake()->time(),
       'price' => fake()->randomDigitNotNull(),
       'seats' =>fake()->randomDigitNotNull(),
       'user_id' => fake()->randomDigitNotNull()
    ];
    }
}
