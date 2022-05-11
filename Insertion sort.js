/*    Insertion sort compares two variables or values within the array from the start to the end of the array. 
  If the value of the current variable or value on the current index of the array is greater than the value 
  of the variable or the value of the next index of  the array, switch the values or variables. 
  On each step towards the end of the array, insertion sort moves back towards the start to compare 
  if the value on the current index of the array is less than the value of the previous index of the array 
  to the next previous index until the comparison reaches an index where it is less.

  Algorithm:
  Type in a loop to iterate through the array which is given winthin the parameter of the function.
    Type in a variable to hold the next value in the array using the current index plus 1.
    Type in a variable to hold the value of the current index used in the loop.
    Type in a while loop with a condition of the variable on the previous sentence is greater than or equal to zero.
      Type in an if statement with a condition of the value in the array using the index mentioned before 
      the while loop is greater than the variable after the loop in the first sentence.
        Apply the value in the array of the current index mentioned before the while loop to the value in 
        the array of the same index plus 1.
        Apply the variable after the loop in the first sentence to the value in the array of the current 
        index mentioned before the while loop.
      Decrease the value of the index mentioned before the while loop.
  Type in a return statement that returns the sorted array.
*/

/*
   Funciton name: Numberical_insertion_sort.
   Parameter(s): Possibly unsorted numerical array.
   Return(s): Sorted numerical array.
   Description: This function iterates through the array in the order of
      the index of the array arranging the values from least to greatest.
*/
function Numerical_insertion_sort(Numerical_array){
   //Try code
   try{
      //For loop through the array
      for(var o = 0; o < Numerical_array.length; o++){
         //Variable hold contains the next value in the array from
         //the current index used in the array which is o.
         var hold = Numerical_array[o+1];
         //Variable holds the current index used in the loop.
         var i = o;
         //While loop that interates backwards from the current index
         //to the starting index 0.
         while(i>=0){
            //If the value in the array on the current index is greater
            //than the held value in the current for loop.
            if(Numerical_array[i] > hold){
               //Apply or set the value in the array on the current index i
               //to the next value in the array on the current plus 1.
               Numerical_array[i+1] = Numerical_array[i];
               //Apply or set the held value to the value of the current
               //index i of the array.
               Numerical_array[i] = hold;
            }
            //Decrease the index i to iterate through the array until
            //the index of 0.
            i--;
         }
      }
      //return the Numerical_array as a insertion sorted array
      return Numerical_array;
   }
   //Catch Exceptions
   catch(E){
      //Throw an Error message containing possible causes of the error.
      throw new Error("Error: Invalid array length or values, Array must"
                        + " contain numerical values.");
   }
}

/*
   Function name: More_iterative_numerical_insertion_sort.
   Parameter(s): Possibly unsorted numerical array.
   Return(s): Sorted numerical array.
   Description: This function iterates more often through the array
      to arrange the array from least to greatest with less lines of code.
*/
function More_iterative_numerical_insertion_sort(numarray){
   for (var o = 0; o < numarray.length;o++){
      for (var i = 0; i < numarray.length;i++){
      if (numarray[i] > numarray[i+1]){var hold = numarray[i+1]; 
         numarray[i+1] = numarray[i]; numarray[i] = hold;}
   }}return numarray;
}

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
