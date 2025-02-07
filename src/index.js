import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/schemas/Player.js";


dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL ; 


mongoose.connect(url).then(() => {
    console.log("mongo connected")
}).catch((e)=>{
    console.log(e)
});

app.post("/", async (req, res) => {
    try {
      await Player.create({
        firstName: "Dorj",
        lastName: "dorj",
        age: 17,
        height: 180,
        weight: 80,
        history: [{ team: "lakers", awards: "mvp" }],
        historyObject: { team: "lakers", awards: "mvp" }
      });
      res.send("success");
    } catch (e) {
      res.send(`error: ${e.message}`);
    }
  });
  
  app.get("/", async (req, res) => {
    const player = await Player.find({ lastName: "dorj" });
  
    res.send(player);
  });

app.listen(port, () => {
    console.log(`app running on ${port}`)
});
