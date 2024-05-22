const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("World");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello");
    resolve();
  }, 1000);
}).then(() => {
  console.log("World");
});

// promise with parameters

const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello");
    resolve({ username: "sadam", email: "sadammuneer390@gmail.com" });
  }, 1000);
});
promisethree.then(function (user) {
  console.log(user);
});

// promise with error both resolve and reject.

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "sadam", email: "sadammuneer390@gmail.com" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

// chaininig

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Ali", password: "123" });
    } else {
      reject("E : JS went wrong");
    }
  }, 1000);
});
async function comsumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
comsumePromiseFive();

async function getDataFromAPI() {
  try {
    const response = await fetch("https://api.github.com/users/MUHAMMAD-SADAM");
    const data = await response.json();
    console.log(
      `The Bio of ${data.name} is: ${data.bio} and the followers are ${data.followers}`
    );
  } catch (error) {
    console.log(error);
  }
}
getDataFromAPI();

fetch("https://api.github.com/users/MUHAMMAD-SADAM")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(
      `The Bio of ${data.name} is: ${data.bio} and the followers are ${data.followers}`
    );
  })
  .catch(() => {
    console.log(error);
  });
