import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
  id?: string;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: string): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // Put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // Post
      return axios.post(this.rootUrl, data);
    }
  }
}
