import mongoose from "mongoose";

import { movieSchema } from "../schemas/movieSchema.js";
export const Movie = mongoose.model("Movie", movieSchema);