function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u"
    ) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  let resultFuntion = words.map(function(word) {
    return removeVowels(word);
  });

  return resultFuntion;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
  let result = removeVowels('samuel');
  console.log(result)


/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/


let result2 = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
console.log(...result2)
