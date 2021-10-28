const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mentores= new Schema({
  name: { type: String, required: "mentor name is must..." },
  nivel: { type: Number, required: "mentor nivel is also must..." },
  perfil: { type: String, required: "mentor  perfil is also must..." },
  competencia: { type: String, required: "mentor competencia is also must..." },
  Mentorizados: [{
    ref: "Mentorizados",
    type: Schema.Types.ObjectId
}],
}
, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model("Mentores", Mentores);
