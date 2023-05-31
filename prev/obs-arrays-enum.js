"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Todd",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()); // !!! ERROR !!!
}
console.log(person);
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
