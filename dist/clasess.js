"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = (function () {
    function UserAccount(id, name, age) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccount = (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(id, name, age, nickname, level, genre) {
        var _this = _super.call(this, id, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        _this.genre = genre;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setGenre", {
        set: function (genre) {
            this.genre = genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "getGenre", {
        get: function () {
            return console.log(this.genre);
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("The player " + this.name + ":" + this.id + " has the char " + this.nickname + " at level " + this.level + "!");
    };
    return CharAccount;
}(UserAccount));
var vini = new CharAccount('123456', 'Vini', 26, 'vini@cs', 80, 'masculino');
console.log(vini.level);
vini.logCharDetails();
console.log(vini.getLevel);
vini.setGenre = 'MASCULINO';
vini.getGenre;
