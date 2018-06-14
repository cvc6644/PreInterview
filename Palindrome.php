<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function palindrome($input){
    //Removes all 
    $trimed = strtolower(preg_replace('/\W/', '', $input.""));
    return strcmp($trimed,strrev($trimed))==0?"True":"False";
    
}
echo "Problem #1 - Palindrome\n";
echo palindrome("A man, a plan, a canal, Panama!")."\n";
echo palindrome("Kayak")."\n";
echo palindrome("123321")."\n";
echo palindrome("123421")."\n";