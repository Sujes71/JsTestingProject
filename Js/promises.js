class User {
  constructor(name, confirm) {
    this.name = name;
    this.confirm = confirm;
  }
}
const data = [["John", true], ["Pedro", false], ["Jesus", true], ["Irene"]];
const users = [];

for (let i = 0; i < data.length; i++) {
  users.push(new User(data[i][0], data[i][1]));
}
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id] == undefined) reject(new Error("User is not in the data!"));
    else {
      resolve(users[id]);
    }
  });
};
const getConfirm = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id].confirm == undefined)
      reject(new Error(`Confirm from ${users[id].name} is not in the data!`));
    else {
      resolve(users[id].confirm);
    }
  });
};
let id = 1;
getUser(id)
  .then((user) => {
    console.log(user.name);
    return getConfirm(id);
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
