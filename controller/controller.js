"use strict";

const mongoose = require("mongoose");
const Mentores = require("../model/mentores");
const Mentorizados = require("../model/mentorizados");

exports.mentores = (req, res) => {
  Mentores.find({}, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json(movie);
  });
};

exports.getMentor = (req, res) => {
  const id = req.params.mentorId;
  //console.log(req)
  Mentores.findById(id, (err, mentor) => {
    if (err) {
      res.send(err);
    }
    res.json(mentor);
  });
};

exports.add = (req, res) => {
  const newMentor = new Mentores(req.body);
  newMentor.save((err, mentor) => {
    if (err) {
      res.send(err);
    }
    res.json(mentor);
  });
};

exports.update = (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.mentorId);
  
  Mentores.findOneAndUpdate({ _id: id }, req.body, { new: true }, (err, mentor) => {
    if (err) {
      res.send(err);
    }
    res.json(mentor);
  });
};

exports.delete = (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.mentorId);
  Mentores.remove({ _id: id }, (err, mentor) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "MEntor deleted from db" });
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

exports.addMentorizados = (req, res) => {
  const newMentor = new Mentorizados(req.body);
  newMentor.save((err, mentor) => {
    if (err) {
      res.send(err);
    }
    res.json(mentor);
  });

  
};
