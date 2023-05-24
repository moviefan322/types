// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
  name: "Todd",
  age: 27,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}

console.log(person);
