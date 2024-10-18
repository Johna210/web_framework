import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "NAME", age: 20 });

const rootElement = document.getElementById("root");

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
  console.log(userEdit);
} else {
  console.error("Root element not found");
}
