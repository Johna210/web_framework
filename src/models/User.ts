import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      // Put
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      // Post
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
