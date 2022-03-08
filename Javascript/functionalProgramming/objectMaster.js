const pokémon = Object.freeze([
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const divBy3List = pokémon.filter( p => p.id % 3 === 0);
console.log("ID divisible by 3");
console.log(divBy3List);
console.log("-----------------------------");

const fireTypes  = pokémon.filter( p => p.types.includes('fire'));
console.log("Fire Types");
console.log(fireTypes);
console.log("-----------------------------");

const moreThanOneType = pokémon.filter(p => p.types.length > 1);
console.log("More Than One Type");
console.log(moreThanOneType);
console.log("-----------------------------");

const justNames = pokémon.map( p => p.name);
console.log("Just Names");
console.log(justNames);
console.log("-----------------------------");

const namesGreaterThan99 = pokémon.filter( p => p.id > 99).map( p => p.name);
console.log("Just Names With ID Greater Than 99");
console.log(namesGreaterThan99);
console.log("-----------------------------");

const namesOnlyTypePoison = pokémon.filter( p => p.types.includes('poison')).filter( p => p.types.length === 1).map( p => p.name);
console.log("Just Names With Only Type As Poison");
console.log(namesOnlyTypePoison);
console.log("-----------------------------");

const firstTypeWithSecondFlying = pokémon.filter( p => p.types[1] === 'flying').map( p => p.types[0]);
console.log("The First Type of All Whose Second Type is Flying");
console.log(firstTypeWithSecondFlying);
console.log("-----------------------------");

const typeNormal = pokémon.filter( p => p.types.includes('normal'));
console.log("Number of Normal Type");
console.log(typeNormal.length);
console.log(typeNormal);
console.log("-----------------------------");