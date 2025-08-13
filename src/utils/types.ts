interface IPostReactions {
  likes: number;
  dislikes: number;
}

export interface INewsPost {
  id: number;
  title: string;
  body: string;
  reactions: IPostReactions;
  tags: string[];
  views: number;
}
