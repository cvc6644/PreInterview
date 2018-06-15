

/*this wont work if any non bracket characters are in the string
 * add 
 */
function Bracketology(input) {
    
    
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
            //checks if open is less than 0 which would indicate an closed bracket without an open bracket
            if(open<0){
                return false;
            }
        }
        return (open ===0);
    
}

console.log(Bracketology("(()))()"));//false
console.log(Bracketology("()()(()())"));//true
console.log(Bracketology(")()("));//false
console.log(Bracketology("())(()"));