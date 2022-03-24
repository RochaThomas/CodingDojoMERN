/*
    Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
    return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null

/*
make a variable that keeps track of the highest number of matched symptoms
make an output array
make an object (hashmap)
loop through medications
for each medication loop through input ailments
Loop through medication.treatableSymptoms check if any of the treatable symptoms match the ailment
if it does then increment count of matched symptoms
push to a hash table as a key value pair where key is the name of the med and value is the number of matches
if at the end of the loop matched symptoms is greater than highest matched symptoms then set highest matches symptoms to the current iteration of matched symptoms

in a completely separate for loop iterate through our hashtable
for each med check is the number of matches is the equal to the highest number of matches
if it does then push the name to the output array
return the output array
*/

function webMD(ailments, meds) {
    const outputArray = [];
    let highestMatchCount = 0;
    const medMatchCount = {};

    //iterate through all the medications
    for (let i = 0; i < meds.length; i++) {
        //initialize a variable for how many treatable symptoms match the ailments for a medication
        let matchCount = 0;
        //iterates through all the ailments
        for (const ailment of ailments) {
            //iterates through the treateable symptoms for one medication
            for (const treatableSymptom of meds[i].treatableSymptoms) {
                //compare to see if the treatable symptom matches the ailment
                //if it does increment the match count by 1
                if (treatableSymptom === ailment) {
                    matchCount += 1;
                }
            }
        }
        //insert key value pair into object where key is the name of the med and value is the matchCount
        medMatchCount[meds[i].name] = matchCount;
        //compare to highest match count
        if (matchCount > highestMatchCount) {
            //set highest match count if necessary
            highestMatchCount = matchCount;
        }
    }

    //in the case that there were no matches at all, we want an empty array so just return the output array now
    if (highestMatchCount === 0){
        return outputArray;
    }

    //loop through our hash table
    for (const med in medMatchCount){
        //compare if the match count for a med is equal to the highest number of matches
        if (medMatchCount[med] === highestMatchCount) {
            //if it is push it to the output array
            outputArray.push(med);
        }
    }
    return outputArray;
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));