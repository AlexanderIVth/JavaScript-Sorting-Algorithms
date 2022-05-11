/*  Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959 
  and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, 
  it can be somewhat faster that merge sort and about two or three times faster than heapsort.

  Quicksort is a divide-and-conquer algorithim. It works by selecting a ‘pivot’ element from the array and 
  partitioning the other elements into two-subarrays, according to whether they are less than or 
  greater than the pivot. For this reason, it is sometimes called partition-exchange sort. 
  The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional 
  amounts of memory to perform the sorting.
  
  Quicksort is a comparison sort, meaning that it can sort items of any  type for which a “less-than” relation
  (formally, a total order) is defined. Efficient implementations of Quicksort are not a stable sort, 
  meaning that the relative order of equal sort items is not preserved.
  
  Mathematical analysis of quicksort shows that, on average, the algorithm takes O(n log⁡〖n)〗 comparisons 
  to sort n items. In the worst case, it makes O(n^2) comparisons.
  
  Sir Charles Antony Richard Hoare, born on the eleventh of January year of one thousand nine hundred thirty four 
  is a British computer scientist.
  
    •	(FRS) Fellowship of the Royal Society
    •	(FREng) Fellowship of the Royal Academy of Engineering
    
  Tony Hoare developed the sorting algorithm in 1959-1960. He also developed Hoare logic for veryifying program 
  correctness, and the formal language communicating sequential process (CSP) to specify the ineractions of 
  concurrent processes (including the dining philisophers problem) and the inspiration or advisor for the 
  programming langauge occam.
  
  Hoare was elected a member of the National Academy of Engineering in 20006 for fundamental contributions to 
  computer science in the areas of algorithms, operating systems, and programming languages.
*/
