"use strict";

module.exports = app => {
  const controller = require("../controller/controllerMentor");
  app
    .route("/mentores")
    .get(controller.mentores)
    .post(controller.add);

  app
    .route("/mentores/:mentorId")
    .get(controller.getMentor)
    .put(controller.update)
    .delete(controller.delete);
  
};
