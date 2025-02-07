import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Player } from "./db/models/Player.js";
import { Movie } from "./db/models/Movies.js";


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

  app.post("/movie", async (req, res) => {
    try {
      await Movie.create({
        plot: "fhewfh",
        genres: [ "Drama",  "Action"],
        runtime: 35,
        cast: [ "James", "Bruno"],
        title: "nar sar",
        fullplot: "hfh",
        languages: [ "English", "Indian"],
        directors: [ "Tushig",  "ZolbooTv"],
        writers: [ "Tamir", "Odhvv"],
        awards: { wins: 2, nominations: 0, text: "2 win"},
        year: 2020,
        imdb: { rating: 7.6, votes: 12, id: 322},
        countries: ["USA", "Korea"],
        type: "movie",
        tomatoes: { viewer:{rating:4.4, numReviews: 123, meter: 12} , dvd: 12, website: "agashh", production: "gagadf",
      lastupdated: "20021-2919-21"}
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
