<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'category_id' => Category::all()->random()->id,
        'title' => $faker->unique()->jobTitle,
        'slug' => $faker->unique()->name,
        'description' => $faker->realText(),
        'price' => random_int(100, 1000),
        'discount' => random_int(10, 50),
        'product_image' => $faker->imageUrl(),
    ];
});
