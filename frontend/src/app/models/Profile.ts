
import { order } from "../models/order";
export class Profile {
    id:  number;
    first_name: string ;
    last_name: string ;
    address: string ;
    phone: string ;
    profile_pic: string ;
    username: string ;
    password: string ;
    balance: number ;
    account_type: string ;
    orders: order[];
    email: string ;
  created_at:Date;
  }
