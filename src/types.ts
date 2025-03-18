export interface IComment {
    id: string;
    author: string;
    text: string;
  }
  
  export interface IPost {
    id: string;
    title: string;
    content: string;
    likes: number;
    comments?: IComment[];
  }
  
  export interface IPostResponse {
    [id: string]: IPost;
  }
  