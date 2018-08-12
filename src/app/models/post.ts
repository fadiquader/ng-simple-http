export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  constructor(obj: any) {
    this.userId = obj.userId;
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
  }
}
