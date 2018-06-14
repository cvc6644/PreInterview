<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function palindrome($input){
    
    $trimed = strtolower(preg_replace('/\W/', '', $input));
    
    echo strlen($trimed);
    //$test = substr_compare($trimed, strrev($trimed), 0, (strlen($trimed)/2));
    //return $trimed == strrev($trimed);
    return $test;
}
