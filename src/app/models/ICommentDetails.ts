import {IComment} from "./IComment";

export interface ICommentDetails extends IComment{
  email: string
  body: string
}
