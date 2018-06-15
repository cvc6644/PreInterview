


function Bracketology(input) {
    //eliminates an automatic failure
    if(input.indexOf(")")>0 ){
        open = 0;
        /*
         * Every instance of a ( increments open by 1
         * Every instance of a ) decrements open by 1
         */ 
        for ( i=0;i<input.length;i++){
            /*if(input.charAt(i)==="("){
                open++;
            }else{
                open--;
            }*/
            input.charAt(i)==="("?open++:open--;
        }
        return (open ===0);
    }else{
        return false;
    }
}

console.log(Bracketology("(()))()"));//false
console.log(Bracketology("()()(()())"));//true
console.log(Bracketology(")()("));//false
