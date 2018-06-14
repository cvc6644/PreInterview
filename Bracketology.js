


function Bracketology(input) {
    //eliminates an automatic failure
    if(input.indexOf(")")>0 ){
        var open = 0;
        /*
         * Every instance of a ( increments open by 1
         * Every instance of a ) decrements open by 1
         */ 
        for ( i=0;i<input.length;i++){
            if(input.charAt(i)==="("){
                open++;
            }else{
                open--;
            }
        }
        result = (open ===0);
    }else{
        result =false;
    }
    return result;
}

console.log(Bracketology("(()))()"));//false
console.log(Bracketology("()()(()())"));//true
console.log(Bracketology(")()("));//false
