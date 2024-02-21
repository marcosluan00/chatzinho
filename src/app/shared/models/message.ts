import { User } from "./user";

export interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}
