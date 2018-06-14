/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Bracketology(input) {
    //var result;
    if(input.indexOf(")")>0 ){
        var open = 0;
        for ( i=0;i<input.length;i++){
            if(input.charAt(i)=="("){
                open++;
            }else{
                open--;
            }
        }
        result = open ==0;
    }else{
        result =false;
    }
    return result;
}

console.log(Bracketology("(()))()"));//false
console.log(Bracketology("()()(()())"));//true
console.log(Bracketology(")()("));//false
