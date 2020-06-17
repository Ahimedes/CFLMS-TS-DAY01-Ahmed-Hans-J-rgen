var list = ["Ahmed Abdelaal", "Hans-Jürgen Janos", "Max Powers", "John Wick", "Joe Rogan"];
for (var x in list) {
    console.log(x);
}
;
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var y = list_1[_i];
    console.log(y);
}
;
for (var x in list) {
    console.log(x);
    for (var _a = 0, list_2 = list; _a < list_2.length; _a++) {
        var y = list_2[_a];
        console.log(y);
    }
    ;
}
;
