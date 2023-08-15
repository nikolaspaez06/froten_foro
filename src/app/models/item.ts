//importan datos backend
export interface User {
    user_name: string;
    user_email: string;
    user_password: string;
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
