let fullname : string = "Ahmed Abdelaal";
//document.getElementById("result").innerHTML = fullname;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach(function(value) {
    document.getElementById("result").innerHTML += fullname + `<br>`;
 });

 let obj = {
    firstname: "Hans-Jürgen",
    lastname: "Janos",
    timer: function() {
        setTimeout(function() {
            //console.log(`${obj.lastname}`);
            array.forEach(function(value) {
                console.log(`${obj.lastname}`);
             });
        }, 5000);
    }
 };

 obj.timer();