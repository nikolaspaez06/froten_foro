//importan datos backend
export interface User {
    _id: string;
    userName: string;
    email: string;
    password: string;
    userImg:string;
}

export interface Home extends User {
  user: string;
  date_create: Date;
  description: string;
  image: string;
  _id: string;
}

export interface profile extends User {
  _id: string;
  user: string;
  date_create: Date;
  description: string;
  image: string;
}
