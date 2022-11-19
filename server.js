const express= require("express");

const app = express();

app.get("/", (req,res)=>{
  res.send("Hello world");
});

app.get("/yes", (req,res) => {
  res.send(Date.now());
});


app.listen(process.env.PORT || 3000);
