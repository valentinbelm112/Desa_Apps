"use strict";

module.exports = app => {
  const controller = require("../controller/controller");
  app
    .route("/mentores")
    .get(controller.mentores)
    .post(controller.add);

  app
    .route("/mentores/:mentorId")
    .get(controller.getMentor)
    .put(controller.update)
    .delete(controller.delete);
  app
    .route("/mentorizados")
    .post(controller.addMentorizados)
    app
    .route("/")
    .get(controller.initial)
    .post(controller.initial)
    .put(controller.initial)
    .delete(controller.initial);
};
