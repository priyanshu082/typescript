"use strict";
// if we are not sure about which data type is coming we generally use any
//but if we have idea about  2 3 4 type of data which could come so we use  UNION in there whihc is a better practise than using a never
Object.defineProperty(exports, "__esModule", { value: true });
var score = 44;
//here it is not showing any error
score = "453";
var priyanshu = { name: "hitesh", id: 334 };
// now priyanshu can be with like User or can also be assigned as Admin
priyanshu = { name: "Priyanshu", age: 43 };
console.log(priyanshu);
//it is also not showing any issue
priyanshu = { name: "Priyanshu", id: 43 };
console.log(priyanshu);
var getDbId = function (id) {
    console.log("DB iD is ".concat(id));
    // we cannot directly apply the string methods as it is treating id as a new data type that is number and string BroadcastChannel
    // but there is a way to apply 
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
};
var number = [1, 2, 3];
var number2 = ["1", "2", "3"];
var number3 = [1, 2, 3, "4", false];
