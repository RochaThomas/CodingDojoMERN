/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                   v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
frequencyMap = {
    b: 70,
    a: 184, //+20
    c: 42, //+10
}
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    const frequencyMap = {};
    const stringSliced = [];

    let leftIdx = 0;
    let rightIdx = 0;
    for (let i = 1; i < str.length; i++) {
        if (isNaN(str[i])){
            rightIdx = i;
            stringSliced.push(str.slice(leftIdx, rightIdx));
            leftIdx = rightIdx;
        }
        if (i === str.length - 1){
            rightIdx = i;
            stringSliced.push(str.slice(leftIdx, rightIdx + 1));
        }
    }
    console.log(stringSliced);
    
    for (let i = 0; i < stringSliced.length; i++) {
        if (frequencyMap.hasOwnProperty(stringSliced[i][0])){
            frequencyMap[stringSliced[i][0]] += parseInt(stringSliced[i].slice(1, stringSliced[i].length));
        }
        else if (!frequencyMap.hasOwnProperty(stringSliced[i][0])){
            frequencyMap[stringSliced[i][0]] = parseInt(stringSliced[i].slice(1, stringSliced[i].length));
        }
    }
    console.log(frequencyMap);

    const letterKeys = Object.keys(frequencyMap).sort();
    console.log(letterKeys);

    let outputString = '';
    for (const key of letterKeys){
        outputString += key;
        outputString += frequencyMap[key];
    }
    console.log(outputString);

    return outputString;
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");