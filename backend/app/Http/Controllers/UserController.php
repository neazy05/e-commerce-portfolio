<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Traits\GeneralTrait;
use Illuminate\Support\Facades\Validator;

use \App\Models\User;
class UserController extends Controller
{

    public function getAllUser()
    {
        $user= User::all();
        return $this->returnData('user', $user);
    }
    public function getByUserId($user_id)
    {
        $user = User::find($user_id);
        return $this->returnData('name', $user->id);
    }

}
