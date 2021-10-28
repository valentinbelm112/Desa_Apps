"use strict";

module.exports = app => {
  const controller = require("../controller/controllerMentorizado");

  app
    .route("/mentorizados")
    .post(controller.addMentorizados)
    .get(controller.Mentorizado)
    app
    .route("/mentorizado/:mentorizadoId")
    .get(controller.getMentorizado)
    .put(controller.updateMentorizado)
    .delete(controller.deleteMentorizado );
};
