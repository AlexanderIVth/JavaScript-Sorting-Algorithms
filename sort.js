/*
   Function name: Numerical_sort.
   Parameter(s): Possibly unsorted numerical array.
   Return(s): Sorted numerical array.
   Required functions: 
      get_least_and_highest_array_values, 
      remove_array_least_value
   Description: This funciton iterates through the array multiple times while
      while the local variable 'sorted_array' is not populated or does not have
      the same length as the given array from the parameter 'Numerical_array'.
      The local variable 'low_high' gets the least and highest values in the
      'Numerical_array', the least value gets added in the 'sorted_array'.
      The least value in the 'Numerical_array' array gets removed. This process
      is repeated until there is no more values in the 'Numerical_array' or
      the 'sorted_array' has the same length as the intial length of the 
      'Numerical_array' which is stored in the local variable 'length'.
      This function returns the 'sorted_array'. This function requires other 
      functions mentioned.
*/
function Numerical_sort(Numerical_array){
   //Try code
   try{
      //Local variables to store array length, return array, low and high values.
      var length = Numerical_array.length;
      var sorted_array = [];
      var low_high = [];
      
      //While the length of the array to return is not equal to the length of
      //the given array.
      while(sorted_array.length != length){
         //Use function get_least_and_high_array_values on the given array and
         //apply it to the local variable low_high.
         low_high = get_least_and_highest_array_values(Numerical_array);
         //Push the least value to the array to return at index 0.
         sorted_array.push(low_high[0]);
         //Use function remove_array_least_value on the given array and
         //apply it to the given array to remove the least value.
         Numerical_array = remove_array_least_value(Numerical_array);
      }
      //Return the sorted array.
      return sorted_array;      
   }
   //Catch Exceptions
   catch(E){
      //Throw an Error message containing possible causes of the error.
      throw new Error("Error: Invalid array length or values, Array must"
                        + " contain numerical values.");
   }
}

/*
   Function name: get_least_and_high_array_values
   Paramenter(s): numerical array
   Return(s): Integer array index 0: least value, index 1: greatest value.
   Description: This function iterates through the array storing
      the least and greatest values in respective local variables.
*/
function get_least_and_highest_array_values(Numerical_array){
   //variables initially stores the first value in the array.
   var low = Numerical_array[0];
   var high = Numerical_array[0];
   //Loop through the array
   for (var i = 0; i < Numerical_array.length;i++){
      //If the least value is greater than the current value.
      if(low > Numerical_array[i]){
         //Appy the current value as the least value.
         low = Numerical_array[i];
      }
      //If the greatest value is less than the current value.
      if(high < Numerical_array[i]){
         //Apply the current value as the greatest value.
         high = Numerical_array[i];
      }
   }
   //Return the least and greatest values as new array.
   return new Array(low,high);
}

/*
   Function name: remove_array_greatest_value
   Parameter(s): Possibly unsorted numerical array
   Return(s): Array with the greatest value removed.
   Description: This function finds the greatest value of the array
      and removes this value from the array.
*/
function remove_array_greatest_value(Numerical_array){
   //Variables to store the greatest value and the array to return.
   var high = get_least_and_highest_array_values(Numerical_array)[1];
   
   //Splice or remove the greatest value from the array
   Numerical_array.splice(Numerical_array.indexOf(high),1);

   //Return the array with the greatest value removed from the given array.
   return Numerical_array;
}

/*
   Function name: remove_array_least_value
   Paremeter(s): Possibly unsorted numerical array
   Return(s): Array with the least value removed.
   Description: This function finds the least value of the array
      and removes this value from the array.
*/
function remove_array_least_value(Numerical_array){
   //Variable to store the least value and the array to return.
   var low = get_least_and_highest_array_values(Numerical_array)[0];

   //Splice or remove the least value from the array
   Numerical_array.splice(Numerical_array.indexOf(low),1);
   
   //Return the array with the least value removed from the given array.
   return Numerical_array;
}
