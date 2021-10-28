const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mentorizados = new Schema({
  name: { type: String, required: "Mentor name is must..." },
  apellido: { type: String, required: "apelldio name is also must..." },
  perfil: { type: String, required: "direccion name is also must..." },
  competencia: { type: String, required: "carrera name is also must..." },
 
}, {
  versionKey: false // You should be aware of the outcome after set to false
},
);

module.exports = mongoose.model("Mentorizados",  Mentorizados);
