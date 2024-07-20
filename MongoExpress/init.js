const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{console.log("Connection Successfull");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let chats =[
    {
    from:"Ajit",
    to:"Aniket",
    msg:"Send me ur notes ",
    created_at : new Date()
   },
   {
    from:"Ajit",
    to:"Ankita",
    msg:"U r looking beautiful",
    created_at : new Date()
   },
   {
    from:"Ajit",
    to:"Ankit",
    msg:"Please send me some money",
    created_at : new Date()
   },
   {
    from:"Ajit",
    to:"Malasha",
    msg:"let's study Web Dev ",
    created_at : new Date()
   },


];
 Chat.insertMany(chats);