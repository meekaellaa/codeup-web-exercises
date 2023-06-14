"use strict";
fetch("https://api.github.com/users/meekaellaa/events/public", {
  headers: { Authorization: gitHub },
});
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
function wait(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, num);
  });
}
wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));
//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
function acceptsGitHubUserName() {
  // created a variable for the GitHub username we want to grab the last commit date.
  let username = "meekaellaa";
  // created a function that makes a request to the GitHub API to retrieve info.
  function getLastCommitDate() {
    const url = `https://api.github.com/users/${username}/repos`;
    // fetch is used to send a GET request, which we will receive a PROMISE.
    return fetch(url)
      .then((response) => response.json())
      .then((repos) => {
        if (repos.length === 0) {
          throw new Error("No existing repositories.");
        }
        const latestRepo = repos.reduce((prev, current) => {
          if (
            !prev ||
            new Date(current.updated_at) > new Date(prev.updated_at)
          ) {
            return current;
          }
          return prev;
        });
        const lastCommitDate = latestRepo.updated_at;
        return lastCommitDate;
      });
  }
  getLastCommitDate("meekaella")
    .then((lastCommitDate) => {
      console.log("Last Commit date: ", lastCommitDate);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

console.log(acceptsGitHubUserName());
//David's Solution:
// fetch("https://api.github.com/users/meekaellaa/events/public", {
//   headers: { Authorization: gitHub },
// })
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data);
//     for (let event of data) {
//       if (event.type === "PushEvent") {
//         console.log(event.created_at);
//         return event.payload.commits[0].url;
//       }
//     }
//   })
//   .then((url) => fetch(url, { headers: { Authorization: gitHub } }))
//   .then((resp) => resp.json())
//   .then((data) => console.log(new Date(data.commit.author.date)));
// David's Promise: Bonus Question
// const wait = (milliseconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`This will show up in ${milliseconds / 1000} second(s).`);
//     }, milliseconds);
//   });
// };
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
