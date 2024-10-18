import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "NAME", age: 20 });

const rootElement = document.getElementById("root");

if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  console.error("Root element not found");
}
