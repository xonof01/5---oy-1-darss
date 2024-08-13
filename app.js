// function sum (a+b) {
//     return a+b;
// }
// const sum1 = function(a,b) {
//     return a+b;
// }
// const sum2 =(a,b) => {
//     return a+b;
// }
// const sum3 = (a,b) => a+b;

// const test =() => {
//     console.log(hello);

// }
// const test1 = ()

// const arr = ['olma', 'anorr', 'anjir'];
// const [a, b] = arr;
// console.log(b);

// const user ={
//     name :"Joxin",
//     age : 45,
//     phone : "+99888536956"

// }
// const {name, useername, age, ... res} = user;
// console.log (name)

// const arr = [ 1,2,3,4,];
// function sum (...arg) {
//     let s = 0;
//     arg.forEach ((value)=>{
//         s = value

//     })

//   1- mashqlar
// 1-masala
//  const info = ["Ali", 30, "Toshkent"];

// const [name, age, city] = info;

// console.log(name);
// console.log(age);
// console.log(city);

//  2-masala
// const colors = ["red", "green", "blue", "yellow", "purple"];

// const [firstColor, secondColor, ...restColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(restColors);

// 3-masala
// function firstAndLast(arr) {
//
//     const [first, , , ...rest] = arr;
//     const last = rest[rest.length - 1];
//     return [first, last];

//
//     // const first = arr[0];
//     // const last = arr[arr.length - 1];
//     // return [first, last];

//
//     // const first = arr[0];
//     // const last = arr.slice(-1)[0];
//     // return [first, last];
//   }

//   let result = firstAndLast([10, 20, 30, 40]);
//   console.log(result);

//   4-masala
//   let numbers = [1, 2, 3, 4, 5, 6];

// let [, second, , , fifth] = numbers;

// console.log(second);
// console.log(fifth);

// let [,, ...rest] = numbers;
// let [second, , fifth] = rest;

// console.log(second);
// console.log(fifth);

// 2- mashiqlar
// let book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
//   };

//   let { title, author } = book;

//   console.log(title);
//   console.log(author);

//   let title = book.title;
//   let author = book.author;

//   console.log(title);
//   console.log(author);

// 2- masala
// let location = {
//     city: "Toshkent",
//     coordinates: {
//       latitude: 41.2995,
//       longitude: 69.2401
//     }
//   };

//   let { coordinates: { latitude, longitude } } = location;
//   console.log(latitude);
//   console.log(longitude);

//   let { latitude, longitude } = location.coordinates;
//   console.log(latitude);
//   console.log(longitude);

//   let latitude = location.coordinates.latitude;
//   let longitude = location.coordinates.longitude;
//   console.log(latitude);
//   console.log(longitude);

// 3 - masala;
// let person = {
//   firstName: "Ali",
//   lastName: "Valiyev",
//   age: 28,
// };

// const { firstName: fName, lastName: lName, age } = person;

// console.log(fName);

// 4-masala
// const settings = {
//     theme: "dark",
//     language: "uz"
//   };
  
//   const { theme, language, mode = "default", fontSize = 16 } = settings;
  
//   console.log(theme); 
//   console.log(language); 
//   console.log(mode); 
//   console.log(fontSize); 
  
 
//   const newSettings = Object.assign({}, settings, { mode: "default", fontSize: 16 });
  
//   const { theme: newTheme, language: newLanguage, mode: newMode, fontSize: newFontSize } = newSettings;
  
//   console.log(newTheme); 
//   console.log(newLanguage); 
//   console.log(newMode); 
//   console.log(newFontSize); 
   
//   const newSettings2 = { ...settings, mode: "default", fontSize: 16 };
  
//   const { theme: newTheme2, language: newLanguage2, mode: newMode2, fontSize: newFontSize2 } = newSettings2;
  
//   console.log(newTheme2); 
//   console.log(newLanguage2);
//   console.log(newMode2); 
//   console.log(newFontSize2); 
  
  
