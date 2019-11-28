"use strict";
exports.__esModule = true;
var GenericService = /** @class */ (function () {
    function GenericService() {
        this.array = [];
    }
    GenericService.prototype.add = function (node) {
        this.array.push(node);
    };
    GenericService.prototype.remove = function (node) {
        for (var i = 0; i < this.array.length; i++)
            if (this.array[i] === node)
                this.array.splice(i, 1);
    };
    GenericService.prototype.get = function (index) {
        return this.array[index];
    };
    GenericService.prototype.getAll = function () {
        return this.array;
    };
    return GenericService;
}());
exports["default"] = GenericService;
