const mongose=require("mongoose");
const list=require("./data");

let schema=mongose.Schema;

const main=async()=>{
    await mongose.connect("mongodb://127.0.0.1:27017/airbnb");
}
main().then((res)=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})
const listingschema=new schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        default:"https://unsplash.com/photos/white-house-under-maple-trees-1ddol8rgUH8",
        set:(v)=>{v===""?"https://unsplash.com/photos/white-house-under-maple-trees-1ddol8rgUH8":v}
        
    },
    price:{
        type:Number
    },
    location:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
});

const listing=mongose.model("listing",listingschema);
listing.insertMany(list.data);

module.exports=listing;
