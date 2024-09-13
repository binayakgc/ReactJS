export interface Post {
  _id: string;
  title: string;
  content: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  user?: User;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "author" | "user";
}
