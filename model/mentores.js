const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  name: { type: String, required: "Movie name is must..." },
  perfil: { type: String, required: "Actor name is also must..." },
  competencia: { type: String, required: "Actor name is also must..." },
});

module.exports = mongoose.model("Mentores", movieSchema);
