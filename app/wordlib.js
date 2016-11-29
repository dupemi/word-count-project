var app = {
  words: function wordCount(str) 
  {
  var wCount = {}; // creates an object to hold the result of the computation
  var wArr = str.replace(/[\n\t]/gi, ' ')
             .replace(/ {2,}/g, " ").split(' '); // uses regular expression to replace tabs, new lines, double line spaces to a single space
  wArr.forEach (function (word) 
  {
  if (wCount.hasOwnProperty(word)) // method to check if the object has a property
    {
      wCount[word]+=1; //if it does, the count increases by 1
    } 
  else 
    {
      wCount[word]=1
    }
  });

  return wCount; 
    }   //returns new object
  }

module.exports = app;