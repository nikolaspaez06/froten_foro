//importan datos backend
export interface User {
    _id: number;
    userName: string;
    email: string;
    password: string;
    userImg:string;
}

export interface Home extends User {
  user: String;
  date_create: Date;
  description: String;
  image: String;
  reactions: String;
  comments: String;
  _id: number;
}

