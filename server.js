const express = require("express");
const body = require("body-parser");
const axios = require("axios");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production';
const server = next({dev});
const handler = server.getRequestHandler();
const app = express();
app.use(body.json());

server.prepare()
  .then(()=>{
    app.get("/_next/*",handler);
    app.get("/",handler);
    app.post("/new", function(req, res) {
      console.log(req.body)
      var data = req.body;
      data.time = new Date();
      axios.post(process.env.URL,data).catch((e)=>console.log(e));
      res.sendStatus(200);
    });
    app.get("/where", (req, res)  =>{
      axios.get(process.env.URL)
        .then((data)=> {
          console.log(data.data);
          res.send(data.data.result)
        })
      .catch((e)=> console.log(e));
    });
    app.listen(3000,()=> console.log("Up and running at port 3000"));
  })