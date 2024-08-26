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


//   1-mashq
// function configure(options) {
//     const { host = "localhost", port = 8080, protocol = "http" } = options;
//     console.log(`Connecting to ${protocol}://${host}:${port}`);
//   }
  
//   configure({ host: "127.0.0.1" }); 
  
// 2-mashq
// function combineAndExtract(arr1, arr2) {
//     const combinedArray = arr1.concat(arr2);
//     const [first, second, third] = combinedArray;
//     return { first, second, third };
//   }

//   function combineAndExtract(arr1, arr2) {
//     const combinedArray = arr1.concat(arr2);
//     const result = {};
//     for (let i = 0; i < 3; i++) {
//       result[`first${i + 1}`] = combinedArray[i];
//     }
//     return result;
//   }

  
//   function combineAndExtract(arr1, arr2) {
//     const combinedArray = [...arr1, ...arr2];
//     const [first, second, third] = combinedArray;
//     return { first, second, third };
//   }
  
// masallar

// 1-masal

// function toqSonlarYigindisi(arr) {
//     return arr.filter(son => son % 2 !== 0).reduce((sum, son) => sum + son, 0);
//   }
  
//   function toqSonlarYigindisi(arr) {
//     let sum = 0;
//     arr.forEach(son => {
//       if (son % 2 !== 0) {
//         sum += son;
//       }
//     });
//     return sum;
//   }

//   function toqSonlarYigindisi(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         sum += arr[i];
//       }
//     }
//     return sum;
//   }
  
// 2
// function engKichikElement(arr) {
//     if (arr.length === 0) {
//       return null;
//     }
//     return Math.min.apply(null, arr);
//   }

//   function engKichikElement(arr) {
//     if (arr.length === 0) {
//       return null; 
//     }
  
//     let engKichik = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < engKichik) {
//         engKichik = arr[i];
//       }
//     }
//     return engKichik;
//   }
  
//   function engKichikElement(arr) {
//     if (arr.length === 0) {
//       return null;
//     }
//     arr.sort((a, b) => a - b); 
//     return arr.shift(); 
//   }
  

// 4 
// function raqamlarniAjrat(matn) {
//     return matn.split('').filter(belgi => !isNaN(parseInt(belgi)));
//   }
  
//   function raqamlarniAjrat(matn) {
//     return matn.replace(/[^0-9]/g, '');
//   }

//   function raqamlarniAjrat(matn) {
//     return matn.match(/\d+/g);
//   }
  
//   5.
//   function sozlarniTeskari(matn) {
//     return matn.split(' ').reverse().join(' ');
//   }


//   function sozlarniTeskari(matn) {
//     let sozlar = matn.split(' ');
//     let teskariSozlar = [];
//     for (let i = sozlar.length - 1; i >= 0; i--) {
//       teskariSozlar.unshift(sozlar[i]);
//     }
//     return teskariSozlar.join(' ');
// //   }

// 7
// function kublarniHisobla(sonlar) {
//     let kublar = [];
//     for (const son of sonlar) {
//       kublar.push(son * son * son);
//     }
//     return kublar;
//   }

//   function kublarniHisobla(sonlar) {
//     let kublar = [];
//     for (let i = 0; i < sonlar.length; i++) {
//       kublar.push(sonlar[i] * sonlar[i] * sonlar[i]);
//     }
//     return kublar;
//   }

//   function kublarniHisobla(sonlar) {
//     return sonlar.map(son => son * son * son);
//   }
  
  