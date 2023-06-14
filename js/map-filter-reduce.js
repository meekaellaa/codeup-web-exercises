const users = [
  {
    id: 1,
    name: "ryan",
    email: "ryan@codeup.com",
    languages: ["clojure", "javascript"],
    yearsOfExperience: 5,
  },
  {
    id: 2,
    name: "luis",
    email: "luis@codeup.com",
    languages: ["java", "scala", "php"],
    yearsOfExperience: 6,
  },
  {
    id: 3,
    name: "zach",
    email: "zach@codeup.com",
    languages: ["javascript", "bash"],
    yearsOfExperience: 7,
  },
  {
    id: 4,
    name: "fernando",
    email: "fernando@codeup.com",
    languages: ["java", "php", "sql"],
    yearsOfExperience: 8,
  },
  {
    id: 5,
    name: "justin",
    email: "justin@codeup.com",
    languages: ["html", "css", "javascript", "php"],
    yearsOfExperience: 9,
  },
];
// 1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// const usersWith3Languages = users.filter(function (user) {
//   return user.languages.length >= 3;
// });
// console.log(usersWith3Languages);
const usersWith3Languages = users.filter((user) => user.languages.length >= 3);
console.log(usersWith3Languages);
//Can I make an array using just the name, and languages?
//2. Use .map to create an array of strings where each element is a user's email address.
const usersEmail = users.map(function (user) {
  return user.email;
});
console.log(usersEmail);
// const usersEmail = users.filter(function (user) {
//   return user.email;
// });
// const usersEmail = users.filter((user) => user.email);
// console.log(usersEmail);
//3.Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// const totalOfYearsOfExperience = users.reduce(function (acc, user) {
//   return acc + user.yearsOfExperience;
// }, 0);
const totalOfYearsOfExperience = users.reduce((accumulation, user) => {
  return accumulation + user.yearsOfExperience;
}, 0);
console.log(totalOfYearsOfExperience);
// 4. Use .reduce to get the longest email from the list of users.
// const longestEmail = users.reduce(emptyEmail, user){
//   if (user.email.length > emptyEmail.length){
//     emptyEmail = user.email
//   } return (emptyEmail)
// }, " ")
// const longestEmail = users.reduce(function (emptyEmail, email) {
//   if (users.email.length > emptyEmail.length) {
//     emptyEmail = users.email;
//   }
//   return emptyEmail;
// }, " ");
const longestEmail = users.reduce(function (longestEmail, user) {
  if (user.email.length >= longestEmail.length) {
    longestEmail = user.email;
  }
  return longestEmail;
}, "");

console.log(longestEmail);

// 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userName = users.reduce(function (userNameString, user) {
  return userNameString + user.name + ", ";
}, "");
// Cody's Solution:
// const userName = users.reduce(function (userNameString, user, index) {
//   if(index !== users.length - 1){
//     return userNameString + user.name + ", ";
//   }
//   return userNameString + user.name + "."
// }, "");
console.log(userName);
