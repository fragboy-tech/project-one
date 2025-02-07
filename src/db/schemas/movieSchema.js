import mongoose from "mongoose";

const { Schema } = mongoose;

const movieAwardsSchema = new Schema(
    {
        wins: Number,
        nominations: Number,
        text: String,
    },
    { _id: false }
);
const imdbSchema = new Schema(
    {
        rating: Number,
        votes: Number,
        id: Number,
    },
    { _id: false }
);
const viewer = new Schema(
    {
        rating: Number,
        numReviews: Number,
        meter: Number,
    },
    { _id: false }
);
const tomatoes = new Schema(
    {
        viewer: viewer,
        dvd: Number,
        website: String,
        production: String,
        lastupdated: String,
    },
    { _id: false }
);
export const movieSchema = new Schema({
    plot: {
        type: String,
        required: true,

    },
    genres:{
        type: [String],
        required: true,
        enum: ["Drama", "Comedy", "Action", "History", "Crime", "Biography", "Family"]
        
    },

    runtime: {
        type: Number,
        required: true,
    },
    cast: {
        type: [String],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    fullplot:{
        type: String,
        required: true,
    },
    languages:{
        type: [String],
        required: true,
    },
    directors:{
        type: [String],
        required: true,
    },
    writers:{
        type: [String],
        required: true,
    },
    awards: movieAwardsSchema,
    year:{
        type: Number,
        required: true,
    },
    imdb: imdbSchema,
    countries:{
        type: [String],
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    tomatoes: tomatoes


    
});
