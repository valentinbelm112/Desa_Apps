"use strict";

//const mongoose = require("mongoose");

const Mentorizados = require("../model/Mentorizados");


exports.Mentorizado = (req, res) => {
    Mentorizados.find({}, (err, mentorizado) => {
      if (err) {
        res.send(err);
      }
      res.json(mentorizado);
    });
  };


exports.addMentorizados = (req, res) => {
    const newMentor = new Mentorizados(req.body);
    newMentor.save((err, mentor) => {
      if (err) {
        res.send(err);
      }
      res.json(mentor);
    });
  
    
  };

 
  exports.updateMentorizado = (req, res) => {
    const id = req.params.mentorizadoId;
    console.log(id)
    Mentorizados.findOneAndUpdate({ _id: id }, req.body, { new: true, useFindAndModify: false}, (err, mentorizado) => {
      if (err) {
        res.send(err);
      }
      res.json(mentorizado);
    });
  };

  exports.deleteMentorizado = (req, res) => {
    const id = req.params.mentorizadoId;
    Mentorizados.remove({ _id: id }, (err, mentorizado) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "MEntor deleted from db" });
    });
  };

  exports.getMentorizado = (req, res) => {
    const id = req.params.mentorizadoId;
    //console.log(req)
    Mentorizados.findById(id, (err, mentorizado) => {
      if (err) {
        res.send(err);
      }
      res.json( mentorizado);
    });
  };


exports.initial = (req, res) => {
  res
    .status(200)
    .send({
      backend: "Working",
      MongoDB: "Connected",
      hostedIn: "Heroku",
      author: "Karthikeyan S",
      srcCode: "https://github.com/karthi-21/CRUD-Test",
      authorProfile: "https://github.com/karthi-21",
      isAutomaticDeploymentEnabled: "true",
      ForAvailableURLS: "https://github.com/karthi-21/CRUD-Test/blob/master/README.md",
    });
};


