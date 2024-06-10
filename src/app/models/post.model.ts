export class Post {
  constructor(
    public id: string,
    public body: string,
    public author: string,
    public publishedOn: Date,
    public lastEditedOn: Date,
    public isPublic: boolean
  ) {}
}
