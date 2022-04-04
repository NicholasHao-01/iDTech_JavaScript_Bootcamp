let groceries = ["bread","milk","eggs","icecream","vegetables"];

console.log(groceries);
console.log(groceries[1]);
console.log(groceries.push('apple','fruit'));
console.log(groceries);
console.log(groceries.length);

let studentRoaster = [
    ["Adhiraj", 14, 100],
    ["Nicholas", 13, 100],
    ["Adfar", 23, 100],
]

var x = prompt("Enter name here: ");
for (i in studentRoaster) {
    if (x in i[0]) {
        console.log[i]
    } else {
        console.log("not here…")
    }
}