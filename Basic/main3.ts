let list: Array<string> = ["Ahmed Abdelaal", "Hans-Jürgen Janos", "Max Powers", "John Wick", "Joe Rogan"];

for (let x in list) {
    console.log(x);
};

for (let y of list) {
    console.log(y);
}; 

for (let x in list) {
    console.log(x);
    console.log(list[x])
};

