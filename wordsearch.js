const wordSearch = (letterMatrix, word) => {
    //This section confirms if words are found horizontally (not backwards)
    //The line below creates a new array of strings instead of an array of arrays
    const horizontalJoin = letterMatrix.map(ls => ls.join(''));
    console.log(horizontalJoin);
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    let counter = 0;
    
    //This section confirms if words are found vertically (not backwards)
    //The first two nested loops will iterate through every letter of the matrix
    for (let indexOfParentArray = 0; indexOfParentArray < letterMatrix.length; indexOfParentArray++) {
      for (let indexOfChildArray = 0; indexOfChildArray < letterMatrix.length; indexOfChildArray++) {
        //This statement will initiate the search vertical function if the current letter
        //is the same as the first letter of our searched for word
        if (letterMatrix[indexOfParentArray][indexOfChildArray] === word[0]) {
          //This will iterate down through the matrix
          for (let z = indexOfParentArray; z < letterMatrix[indexOfParentArray].length; z++) {
            
            //This will increase a counter when each letter matches
            if (letterMatrix[z][indexOfChildArray] === word[counter]) {
              counter++;
              
            } else if (counter === word.length) { // This is the found conditional
              return true;
            }
            
          }
        }
      }
    }
    
    
    
    return false;
  };
  
  
  
  module.exports = wordSearch;