let list: Array<string> = ["Ahmed Abdelaal", "Hans-Jürgen Janos", "Max Powers", "John Wick", "Joe Rogan"];

 for (let x in list) {
     console.log(x);
  };

  for (var y of list) {
     console.log(y);
  };

for (let x in list) {
    console.log(x);
    for (var y of list) {
       console.log(y);
    };
 };

