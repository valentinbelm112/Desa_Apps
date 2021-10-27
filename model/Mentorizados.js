const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  name: { type: String, required: "Mentor name is must..." },
  apellido: { type: String, required: "apelldio name is also must..." },
  perfil: { type: String, required: "direccion name is also must..." },
  competencia: { type: String, required: "carrera name is also must..." },
  Mentor: [{
    ref: "Mentores",
    type: Schema.Types.ObjectId
}],
});

module.exports = mongoose.model("Mentorizados", movieSchema);
