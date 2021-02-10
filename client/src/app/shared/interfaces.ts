export interface User{
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface Message{
  message: string;
}

export interface UserForAdmin{
  email: string;
  password: string;
  _id: string;
  isAdmin: boolean;
}
