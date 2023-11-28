const sms =`hah, I am Luffy who will be king of the pirates`
// all these methods are case sensitive 

// startsWith( searchString , position)  -> check a string starts with another string

console.log(sms.startsWith(`hah,`));  // true
console.log(sms.startsWith("Luffy")); //false

// endsWith ( searchString, length ) -> check a string ends with another string 

console.log(sms.endsWith(`pirates`));  // true
console.log(sms.endsWith("I am")); //false

// includes ( searchString ,position ) -> check if a string contains another string

console.log(sms.includes(`Luffy`));  // true
console.log(sms.includes(`luffy`)); //false coz its case sensetive
