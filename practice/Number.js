"use strict";
exports.__esModule = true;
var Number = /** @class */ (function () {
    function Number(number) {
        this.chars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
        this.num = number;
    }
    Number.prototype.getRomanFor = function (element) {
        var str = element + '';
        var min = 2 * (str.length - 1); // minimum index in the array that the number covers (see the note set)
        switch (str.charAt(0)) {
            case "1":
                return this.chars[min];
            case "2":
                return this.chars[min] + this.chars[min];
            case "3":
                return this.chars[min] + this.chars[min] + this.chars[min];
            case "4":
                return this.chars[min] + this.chars[min + 1];
            case "5":
                return this.chars[min + 1];
            case "6":
                return this.chars[min + 1] + this.chars[min];
            case "7":
                return this.chars[min + 1] + this.chars[min] + this.chars[min];
            case "8":
                return this.chars[min + 1] + this.chars[min] + this.chars[min] + this.chars[min];
            case "9":
                return this.chars[min] + this.chars[min + 2];
            case "10":
                return this.chars[min + 2];
            default:
                return '';
        }
    };
    Number.prototype.splitUnits = function () {
        var str = this.num + '';
        var count = str.length;
        var array = [];
        for (var i = 0; i < count; i++) {
            array.push(+str.charAt(i) * Math.pow(10, (count - i - 1)));
        }
        return array;
    };
    Number.prototype.getRomanValue = function () {
        var _this = this;
        var roman = '';
        this.splitUnits().forEach(function (unit) {
            roman += _this.getRomanFor(unit);
        });
        return (roman) ? roman : "0";
    };
    return Number;
}());
exports["default"] = Number;
