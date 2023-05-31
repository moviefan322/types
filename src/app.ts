// const names: Array<string> = ["Max", "Manuel"];

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//     data.split(" ");
// });

function merge<S,U>(objA: S, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const mergedObj = merge({ name: "Max" }, { age: 30 });


