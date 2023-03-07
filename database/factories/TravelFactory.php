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
            'origin' => fake()->randomElement('Puerto del rosario', 'Gran Tarajal', 'Corralejo', 'Morro Jable', 'La Oliva'),
            'destination' => fake()->randomElement('Puerto del rosario', 'Gran Tarajal', 'Corralejo', 'Morro Jable', 'La Oliva'),
            'date' => fake()->date(),
            'hour' => fake()->time('H:i'),
            'price' => fake()->numberBetween(2, 25),
            'seats' => fake()->randomDigitNotNull(),
            'user_id' => fake()->randomDigitNotNull()
        ];
    }
}
