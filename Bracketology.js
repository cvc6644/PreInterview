

//changed so that it properly handles non bracket characters 
function Bracketology(input) {
    
    
        open = 0;
        //added map of chars and their intended increment or decrement
        mapvar = new Map([["(",1],[")",-1]]);
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
            
            //input.charAt(i)==="("?open++:open--;  original implementaition
            //
            //updated implementation for handling only ( or )
            /*switch (input.charAt(i)){
                case "(":
                    open++;
                    
                    break;
                case ")":
                    open--;
                    break;
            }*/
        
            /*
             * it checks if the location
             * in the map is defined. If it is += it to open. if its not +=0 it to open
             */
            open+=mapvar.get(input.charAt(i))?mapvar.get(input.charAt(i)):0;
            
            //console.log(open);
            //checks if open is less than 0 which would indicate an closed bracket without an open bracket
            if(open<0){
                return false;
            }
        }
        return (open ===0);
    
}

console.log(Bracketology("(()))()"));//false
console.log(Bracketology("()()fsgsaqwdfwf(()())"));//true
console.log(Bracketology(")()dawdaw("));//false
console.log(Bracketology("())wadawfsfrwf(()"));