"use strict";
exports.__esModule = true;
var Map_1 = require("./Map");
function gradeFor(mark) {
    var roundUp = Math.ceil(mark / 5) * 5;
    return ((roundUp - mark) >= 3 || roundUp < 40) ? mark : roundUp;
}
exports.gradeFor = gradeFor;
function hasPassed(mark) {
    return (mark >= 40);
}
function map(callback, items) {
    var arr = [];
    for (var i in items)
        arr.push(callback(items[i]));
    return arr;
}
function filter(callback, items) {
    var arr = [];
    for (var i in items)
        if (callback(items[i]))
            arr.push(items[i]);
    return arr;
}
function getGrades(marks) {
    return map(gradeFor, marks);
}
function getPassedGrades(marks) {
    return filter(hasPassed, marks);
}
// ----------------------------------------------------------------
function isFactorOf(a, b) {
    return (b % a == 0);
}
function range(start, end, gap) {
    if (!gap)
        gap = 1;
    var arr = [];
    for (var i = start; i <= end; i += gap)
        arr.push(i);
    return arr;
}
function getBetweeners(arr1, arr2) {
    var cache = new Map_1["default"]();
    var stop = arr2[0];
    var fil1 = [];
    var fil2 = [];
    arr1.forEach(function (num) {
        for (var i = (arr1[arr1.length - 1] / num); i <= (stop / num); i++) {
            var buf = num * i;
            if (cache.has(buf)) {
                cache.put(buf, cache.get(buf) + 1);
                if (cache.get(buf) == arr1.length)
                    fil1.push(buf);
            }
            else
                cache.put(buf, 1);
        }
    });
    fil1.forEach(function (fil) {
        var c = 0;
        arr2.forEach(function (chk) {
            if (isFactorOf(fil, chk))
                c++;
        });
        if (c == arr2.length)
            fil2.push(fil);
    });
    return fil2;
}
// function getGrades(marks: number[]): number[] { // Using recursion (High space complexity)
//     if (marks.length <= 0) return [];
//     let arr = [];
//     arr.push(gradeFor(marks[0]));
//     marks.splice(0, 1);
//     return arr.concat(getGrades(marks));
// }
console.log(getGrades([73, 67, 38, 33])); // [ 75, 67, 40, 33 ]
console.log(getPassedGrades([12, 43, 44, 39, 55])); // [ 43, 44, 55 ]
console.log(getBetweeners([2, 4], [16, 32, 96]));
