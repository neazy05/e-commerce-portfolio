export class order {
  id: number;
  user_id: number;
  market_id: number;
  total: number;
  is_paid: boolean;
  deliverer_id: number;
  deliverer: string;
  deliver_scheduel: string;
  address: string;
  is_accepted: number;
  is_delivered: boolean;
  created_at: Date;
  updated_at: Date;
  constructor(user_id: number, market_id: number, deliverer_id: number, deliverer: string, deliver_scheduel: string, address: string, is_accepted: number, is_delivered: boolean) {
    this.user_id = user_id;
    this.market_id = market_id;
    this.deliverer_id = deliverer_id;
    this.deliver_scheduel = deliver_scheduel;
    this.address = address;
    this.is_accepted = is_accepted;
    this.is_delivered = is_delivered;
    this.deliverer = deliverer;

  }
  // constructor(
  //         public  user_id: number,
  //         public  market_id: number,
  //         public  deliverer_id: number,
  //         public deliver_scheduel:Date,
  //         public address:string,
  //         public is_accepted : boolean,
  //         public is_delivered :boolean,
  //
  // ){}



}
