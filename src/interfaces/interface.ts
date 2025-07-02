export interface PageInteface {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imageUrl: string;
  likes: number;
  comments: number;
  tags: string[];
  author: {
    id: number;
    name: string;
    email: string;
  };
}

export interface InterfaceComment {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    name: string;
    headline: string;
    avatarUrl: string;
  };
}

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  headline: string;
  avatarUrl: string;
}
