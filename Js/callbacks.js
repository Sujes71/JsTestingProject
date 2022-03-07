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
const getUser = (id, cb) => {
  if (users[id].name == undefined) {
    cb("User is not in the data!", null, null);
  } else {
    cb(null, users[id].name, id);
  }
};
const getConfirm = (id, cb) => {
  if (users[id].confirm == undefined) {
    cb(`Confirm from ${users[id].name} is not in the data!`, null);
  } else {
    cb(null, users[id].confirm);
  }
};
getUser(3, (msg, userInfo, id) => {
  if (msg) console.log(msg);
  else {
    console.log(userInfo);
    getConfirm(id, (msg, userInfo) => {
      if (msg) console.log(msg);
      else {
        console.log(userInfo);
      }
    });
  }
});
