/*
   Function name: Check_numerical_sort.
   Parameter(s): Possibly unsorted or sorted numerical array and
   string that identifies how the array is sorted "><" least to greatest
   or "<>" greatest to least.
   Return(s): True when numerical array is sorted, 
   False when numerical array is not sorted.
   Description: This function iterates through the numerical array to
   determine if the numerical array is sorted or not sorted.
*/
function Check_numerical_sort(Numerical_array,sort){
   //Try code
   try{
      //Greatest to least
      if(sort == "><"){
         //Loop through the numerical array
         for(var i = 0; i <= Numerical_array.length;i++){
            //If the value of the current index in the numerical array is less 
            //than the next value in the numerical array
            if(Numerical_array[i]<Numerical_array[i+1]){
               //Return false
               return false;
            }
         }
         //Once the for loop is done return true
         return true;
      }
      //Least to Greatest
      else if(sort == "<>"){
         //Loop through the numerical array
         for(var i = 0; i <= Numerical_array.length;i++){
            //If the value of the current index in the numerical array is 
            //greater than the next value in the numerical array
            if(Numerical_array[i]>Numerical_array[i+1]){
               //Return false
               return false;
            }
         }
         //Once the for loop is done return true
         return true;
      }
      //Other parameters
      else{
         //Throw an Error if the sort parameter is invalid.
         throw new Error("Error: Invalid sort parameter, please use "
            + "'><' for least to greatest and '<>' for greatest to least.");
      }
   }
   //Catch Exceptions
   catch(E){
      //Throw an Error message containing possible causes of the error.
      throw new Error("Error: Invalid array length or values, Array must"
                        + " contain numerical values.");
   }
}
