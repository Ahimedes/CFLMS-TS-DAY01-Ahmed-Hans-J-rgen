// let list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let value of list) {
//     //console.log(value);
//       for (let z of list) {
//           document.getElementById("result").innerHTML += `${value} x ${z} = ${value*z} <br>`;
          
//       };
//       document.getElementById("result").innerHTML += `<hr>`;
// };


for (let i: number = 1; i <= 10; i++) {
    for (let j: number = 1; j <= 10; j++) {
        document.getElementById("result").innerHTML += `${i} x ${j} = ${i*j} <br>`;
    };
    document.getElementById("result").innerHTML += `<hr>`;
};