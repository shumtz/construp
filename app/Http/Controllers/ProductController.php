<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Carbon\Carbon;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
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
            'name' => 'required|max:150',
            'description' => 'required',
            'brand' => 'required|max:150',
            'quantity' => 'required',
        ]);

        $name = $request->input('name');
        $description = $request->input('description');
        $brand = $request->input('brand');
        $quantity = $request->input('quantity');

        DB::table('products')->insert([
            'name' => $name,
            'description' => $description,
            'brand' => $brand,
            'quantity' => $quantity,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        return response("Product created", 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DB::table('products')->where('id', $id)->select('*')->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:150',
            'description' => 'required|max:250',
            'brand' => 'required|max:150',
            'quantity' => 'required',
        ]);

        $name = $request->input('name');
        $description = $request->input('description');
        $brand = $request->input('brand');
        $quantity = $request->input('quantity');

        DB::table('products')->where('id', $id)->update([
            'name' => $name,
            'description' => $description,
            'brand' => $brand,
            'quantity' => $quantity,
            'updated_at' => Carbon::now()
        ]);

        return response("Updated", 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('products')->where('id', $id)->delete();

        return response("Product deleted", 200);
    }
}
