"use strict";
exports.__esModule = true;
var Map = /** @class */ (function () {
    function Map() {
        this.keys = [];
        this.values = [];
    }
    Map.prototype.put = function (key, value) {
        if (this.has(key)) {
            this.values[this.keys.lastIndexOf(key)] = value;
            return;
        }
        this.keys.push(key);
        this.values.push(value);
    };
    Map.prototype.get = function (key) {
        return this.values[this.keys.indexOf(key)];
    };
    Map.prototype.has = function (key) {
        return (this.keys.lastIndexOf(key) != -1);
    };
    return Map;
}());
exports["default"] = Map;
