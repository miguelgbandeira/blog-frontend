export class Post {
  constructor(
    public id: string,
    public title: string,
    public body: string,
    public author: string,
    public authorName: string,
    public publishedOn: Date,
    public lastEditedOn: Date,
    public isPublic: boolean
  ) {}
}
