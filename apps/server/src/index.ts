import Express from "express";
import connect from "./db";

const app = Express();
app.use(Express.json());
const cors = require('cors');
app.use(cors());

connect();

interface bid{
    name:string,
    userid:string,
    quantity:number,
}

interface ask{
    name:string,
    userid:string,
    quantity:number,
}

const bids:bid[]=[];
const asks:ask[]=[];


app.post('/sell-order',(req:any,res:any)=>{
    const {name,userid,quantity}=req.query;
    const newBid:bid={
        name:name,
        userid:userid,
        quantity:quantity
    }
    bids.push(newBid);
    res.send(newBid);

})

 function exchangeholdings(user1:string,user2:string,quantity:number,name:string){

 }

 function balancethebook(user1:string,quantity:number,name:string,type:string){
    
    if(type==="SELL"){
        if(asks.length===0){
            console.log("no asks");
            return;
        }
        asks.map((item)=>{
            if(item.name===name){
                console.log("Match found")
                
            }


        })
    }
}


app.get('/bids',(req:any,res:any)=> {
    res.send(bids);
})
app.get('/asks',(req:any,res:any)=> {
    res.send(asks);
})

app.get('/',(req:any,res:any)=> {
    res.send("hello world");
})

app.get("/", (req: any, res: any) => {
  res.send("hello world");
});

app.listen(4000);
