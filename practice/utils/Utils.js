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
    var fil1 = [];
    var fil2 = [];
    arr1.forEach(function (num) {
        for (var i = (arr1[arr1.length - 1] / num); i <= (arr2[0] / num); i++) {
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
function sumOfIntervals(intervals) {
    if (intervals.length <= 0)
        return 0;
    var temp = (intervals[0][1] - intervals[0][0]);
    intervals.splice(0, 1);
    return temp + sumOfIntervals(intervals);
}
exports.sumOfIntervals = sumOfIntervals;
// ---------------------------------------------------- ///
function balanceStatements(list) {
    var buy = 0;
    var sell = 0;
    var badCount = 0;
    var badString = "";
    list.split(', ').forEach(function (order) {
        if (!order)
            return;
        var items = order.split(' ');
        var quantity = items[1];
        var price = items[2];
        var status = items[3];
        if (price.indexOf('.') === -1 || isNaN(+price) || !status) {
            badString += order + " ;";
            badCount++;
            return;
        }
        if (status === 'B')
            buy += +quantity * parseFloat(price);
        else
            sell += +quantity * parseFloat(price);
    });
    return "Buy: " + Math.ceil(buy) + " Sell: " + Math.ceil(sell) + ((badCount > 0) ? ("; Badly formed " + badCount + ": " + badString) : '');
}
////=-------------------
function swap(arr, ind1, ind2) {
    var temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}
function sort(array, condition) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (!condition(array[i], array[j])) {
                swap(array, i, j);
            }
        }
    }
    return array;
}
function bSearch(array, start, end, value) {
    if (end == start)
        return (array[start] == value);
    var mid = (start + end) / 2;
    if (array[mid] == value)
        return true;
    else if (value < array[mid])
        return bSearch(array, start, mid - 1, value);
    return bSearch(array, mid + 1, end, value);
}
exports.bSearch = bSearch;
var array = [3, 2, 1, 32, 12, 7, 56];
sort(array, function (left, right) {
    return (left < right);
});
console.log(array);
console.log(bSearch(array, 0, array.length - 1, 9));
console.log(balanceStatements("ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S"));
// console.log(getGrades([73, 67, 38, 33])); // [ 75, 67, 40, 33 ]
// console.log(getPassedGrades([12, 43, 44, 39, 55])); // [ 43, 44, 55 ]
// console.log(getBetweeners([2, 4], [16, 32, 96]));
// console.log(sumOfIntervals([[1, 4], [7, 10], [3, 5]]));
