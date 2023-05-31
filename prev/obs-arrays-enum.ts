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

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person = {
  name: "Todd",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}

console.log(person);

if (person.role === Role.ADMIN) {
    console.log('is admin');
}