import { User } from "./models/User";

const user = new User({ name: "John", age: 10 });

user.set({ name: "newName" });

console.log(user.get("name"));
console.log(user.get("age"));
