// =========== 21/32 (2 modul) ===============

// findLongestWord('The quick brown fox jumped over the lazy dog');
// findLongestWord('Google do a roll');
// findLongestWord('May the force be with you');
// function findLongestWord(string) {
//   const array = string.split(' ');
//   let LongestWord = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > LongestWord.length) {
//       LongestWord = array[i];
//     }
//   }
//   console.log(LongestWord);
// }

// =========== 22/32 (2 modul) ===============
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) numbers.push(i);
//   // Change code above this line
//   return numbers;
// }

// =========== 23/32 (2 modul) ===============
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([12, 24, 8, 41, 76], 20);
// function filterArray(numbers, value) {
//   let mass = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       mass.push(numbers[i]);
//     }
//   }

//   console.log(mass);
// }

// =========== 24/32 (2 modul) ===============
// checkFruit('plum');
// checkFruit('mandarin');
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   console.log(fruits.includes(fruit));
// }

// =========== 25/32 (2 modul) ===============
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   newArray = [];
//   for (i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   console.log(newArray);

//   // Change code above this line
// }

// =========== 26/32 (2 modul) ===============
// calculateTotalPrice([12, 85, 37, 4]);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   console.log(total);
// }

// =========== 27/32 (2 modul) ===============

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const item of numbers) {
//     const number = item;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   console.log(filteredNumbers);
// }

// =========== 29/32 (2 modul) ===============
// getEvenNumbers(2, 5);
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const mass = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       mass.push(i);
//     }
//   }
//   console.log(mass);
//   // Change code above this line
// }

// =========== game ============
// function numberGuess() {
//   let secretNumber = Math.floor(Math.random() * 10 + 1);
//   //   console.log(secretNumber);
//   // const numberAttempts = prompt(
//   //   "Choose the number of attempts, but remember - more attempts - less points. 1 attempt - 1000 points, 5 - only 10 points"
//   // );
//   const numberAttempts = 3;
//   let yourNumber = Number(
//     prompt(
//       `New Game!!!
//       Guess the number I thought from 1 to 10. You have ${numberAttempts} ${properEnding(
//         numberAttempts,
//         'attempt'
//       )}`
//     )
//   );

//   for (let i = 0; i < numberAttempts; i += 1) {
//     if (Number(yourNumber) === secretNumber) {
//       console.log('Hurray!');
//       alert(
//         `You win!! You used only ${i + 1} ${properEnding(
//           i + 1,
//           'try'
//         )}!! You must be genius! You've got ${pointsCalc(i + 1)} points`
//       );
//       return 'Hurray!';
//     } else if (i < numberAttempts - 1) {
//       yourNumber = prompt(
//         `Your number is too ${numberComparison(
//           yourNumber,
//           secretNumber
//         )}. Guess the number I thought - you have ${numberAttempts - 1 - i} more ${properEnding(
//           numberAttempts - 1 - i,
//           'attempt'
//         )}`
//       );
//     } else {
//       alert(
//         `You loose!! You used all your ${numberAttempts} ${properEnding(
//           numberAttempts,
//           'attempt'
//         )} for nothing and got no points.
//         The number was ${secretNumber}! Try again!`
//       );
//     }
//   }
// }
// numberGuess();

// function numberComparison(a, b) {
//   if (a > b) {
//     console.log(`you entered ${a}, the secret number is smaller`);
//     return 'big';
//   } else {
//     console.log(`you entered ${a}, the secret number is bigger`);
//     return 'small';
//   }
// }

// function properEnding(a, checkedWord) {
//   if (a > 1 && checkedWord === 'try') {
//     return 'tries';
//   } else if (a == 1 && checkedWord === 'try') {
//     return 'try';
//   }
//   if (a > 1) {
//     return `${checkedWord}s`;
//   } else if (a == 1) {
//     return `${checkedWord}`;
//   }
// }

// function pointsCalc(a) {
//   if (a == 1) {
//     return 1000;
//   } else if (a == 2) {
//     return 500;
//   } else if (a == 3) {
//     return 100;
//   }
// }

// =========== 12/41 (3 modul) ===============
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// =========== 16/41 (3 modul) ===============
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   for (const salarie of Object.values(salaries)) {
//     totalSalary += salarie;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// =========== 18/41 (3 modul) ===============
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const item of products) if (item.name === productName) return item.price;
//   return null;

//   // Change code above this line
// }

// По закінченню лекції покажіть будь ласка як додати кількість ітемів - та + в корзині. Задача cart те що показував Репета. Код закину якщо буде час.

// ====== Задачка ======
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('finded this product: ', productName);
//         console.log(i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'kiwi', price: 60 });
// cart.add({ name: 'orange', price: 120 });
// cart.add({ name: 'orange', price: 120 });
// cart.add({ name: 'orange', price: 120 });
// cart.add({ name: 'orange', price: 120 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('kiwi');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// =========== 41/41 ========

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${item.name} is already in your inventory!`;
//       }
//     }
//     // const newProduct = {
//     //   ...newPotion,
//     // };

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// Колбек-функція
// Колбек-функція

// ======== 2/48 ==========
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return callback(pizzaName);
// }
// console.log(deliverPizza);
// makeMessage('Royal Grand', makePizza);
// makeMessage('Ultracheese', deliverPizza);

// ======== 3/48 ==========

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza Delivering pizza ${pizzaName}`);
// });

// ======== 4/48 ==========
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`"There is no pizza with a name ${pizzaName} in the assortment."`);
//     }
//     return onSuccess(pizzaName);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

// ======== 5/48 ==========
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (orderedItems) // for (let i = 0; i < orderedItems.length; i += 1)
//   {
//     totalPrice += orderedItems;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// ======== 6/48 ==========
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (numbers) // for (let i = 0; i < numbers.length; i += 1)
//   {
//     if (numbers > value) {
//       filteredNumbers.push(numbers);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// ======== 7/48 ==========
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (firstArray) // for (let i = 0; i < firstArray.length; i += 1)
//   {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   });

//   return commonElements;
// }

// ======== 22/48 ==========
// Change code below this line

// const getUsersWithEyeColor = (users, color) => {
//     const newUsers = users.filter(user => user.eyeColor === color);

// return newUsers;
// // console.log(newUsers);
// };
// // Change code above this line

// ======== 24/48 ==========
// Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//    users.filter(user => user.friends.includes(friendName));

// // return getUsersWithFriend;

// // Change code above this line

// ======== 26/48 ==========

// // Change code below this line
// const getActiveUsers = (users) => {
//    const one = users.filter(user => user.isActive === true);
//    return one;
// };
// // Change code above this line

// ======== 29/48 ==========
// Change code below this line
// const getUserWithEmail = (users, email) => {
//   const bookWithTitle = users.find((user) => user.email === email);
//   return bookWithTitle;
// };
// // Change code above this line
// // const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);

// ======== 30/48 ==========
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 != 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 != 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 != 0);

// ======== 31/48 ==========
// Change code below this line
// const isEveryUserActive = (users) => {
//    const one = users.every(user => user.isActive === true);
//    return one;
// };
// // Change code above this line

// ======== 33/48 ==========
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// ======== 38/48 ==========

// Change code above this line
// const getTotalFriendCount = users => {return users.reduce((one, two) =>
//   one + two.friends.length, 0);}
//   // total += hyiotal.balance;
//    console.log(getTotalFriendCount);

// ======== 41/48 ==========
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => {
//   if (a.author < b.author) return -1;
// });

// const sortedByReversedAuthorName = [...books].sort((a, b) => {
//   if (b.author < a.author) return -1;
// });

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// ======== 42/48 ==========
// // Change code below this line
// const sortByAscendingBalance = users => {

//     return [...users].sort((a, b) => a.balance - b.balance);

// };
// // Change code above this line

// ======== 43/48 ==========
// Change code below this line
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a, b) => {if (a.friends.length > b.friends.length) return -1})};

// ======== 45/48 ==========
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(books => books.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort();

// console.log(names);
// // .filter(books.rating > MIN_BOOK_RATING);

// ======== 46/48 ==========

// const getNamesSortedByFriendCount = users => {
//    return users
//    .filter(({ friends }) => friends)
//    .sort((a, b) => a.friends.length - b.friends.length)

//    .map(({ name }) => name)

// };
// // console.log(getNamesSortedByFriendCount);

// ======== 47/48 ==========

// // Change code below this line
// const getSortedFriends = users => {
//    return users
//    .flatMap((user => user.friends))
//    .sort()
// .filter((friends, index, array) => array.indexOf(friends) === index);
// };
// // Change code above this line

// ======== 48/48 ==========

// Change code below this line
// const getTotalBalanceByGender = (users, gender) =>
// [...users]
// // .flatMap((user) => user.gender)
// .filter(user => user.gender === gender)
// .reduce((total, user) => {return total + user.balance}, 0);
// ;

// ======== 11/20 ==========
// class StringBuilder {
//   value;
//   constructor(value) {
//     this.value = value;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// ======== 16/20 ==========
// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//     this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ======== 18/20 ==========
// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

// ======== 19/20 ==========
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
// constructor({ email, accessLevel }){
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ======== 20/20 ==========

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);

//     this.accessLevel = accessLevel;
//   }
//   blacklistedEmails = [];

//   blacklist(email) {
//    return this.blacklistedEmails.push(email)
//   }
//   isBlacklisted(email) {
//   return  this.blacklistedEmails.includes(email)
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com"));
// console.log(mango.isBlacklisted("poly@mail.com"));

// ======== 20/20 ==========
