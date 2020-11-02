"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hero {
    constructor(mine) {
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.mine = mine;
        this.field = true;
    }
}
exports.Hero = Hero;
class Sub {
    constructor(mine) {
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
        this.mine = mine;
        this.field = false;
    }
}
exports.Sub = Sub;
