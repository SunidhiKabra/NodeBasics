//demonstration of data structure: HashMap
var HashMap = require('hashmap');

var map = new HashMap();
map.set("Chirag", "Google Pixel 2");
map.set("Sunidhi", "OnePlus 5");
map.set("Ishita", "iPhone 8 plus");
map.set("Patel", "Google Pixel 3");
map.set("Shairal", "OnePlus 5t");
map.set("John", "New phone");

console.log("HashMap: ");
map.forEach(function(value, key) {
    console.log(key + " : " + value);
});

console.log("Value for the Key- John is " + map.get("John"));
