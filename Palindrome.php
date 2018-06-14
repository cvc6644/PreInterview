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
function runPalindrome(){
    echo palindrome("A man, a plan, a canal, Panama!")."\n";//true
    echo palindrome("Kayak")."\n";//true
    echo palindrome("123321")."\n";//true
    echo palindrome("123421")."\n";//false
}