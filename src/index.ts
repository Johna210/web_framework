import { User } from "./models/User";

const user = new User({ name: "John", age: 10 });

user.on("change", () => {
  console.log("first chage");
});
user.on("change", () => {
  console.log("second chage");
});
user.on("save", () => {
  console.log("first save");
});

user.trigger("change");
user.trigger("s");
