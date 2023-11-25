const express = require("express");
const model = require("../model/detail");
const Detail = model.Detail;
const path = require("path");
exports.addDetail = (req, res, next) => {
  const doc = {
    name: req.body.name,
    dob: req.body.dob,
    photUrl: req.body.photoUrl,
    bp: req.body.bp,
    careers: req.body.careers,
    nom: req.body.nom,
    score: req.body.score,
    fifties: req.body.fifties,
    centuries: req.body.centuries,
    wickets: req.body.wickets,
    avg: req.body.avg,
  };

  const detail = new Detail(doc);

  detail
    .save()
    .then((doc) => {
      console.log(doc);
      // res.status(201).json(req.body);
    })
    .catch((err) => console.log(err));

  res.sendFile(path.resolve(__dirname, "../public/index.html"));
};

exports.getDetail = async (req, res) => {
  const details = await Detail.findOne({ name: req.query.search });
  console.log("Detail:", details);

  res.send(`
  <!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }
      .column1 {
        float: left;
        width: 30%;
        padding: 10px;
        
      }
      .column2 {
        float: left;
        width: 70%;
        padding: 10px;
       
      }
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
    </style>
  </head>
  <body>
    <h2>Player Information</h2>

    <div class="row">
      <div class="column1">
        <img src="${details.photoUrl}" alt="player photo" width="50" height="60" />

        <h2>${details.name}</h2>
        <p>${details.dob}</p>
        <h3>Personal Information</h3>
        <p>${details.nom}</p>
        <p>${details.score}</p>
        <p>${details.fifties}</p>
        <p>${details.centuries}</p>
        <p>${details.avg}</p>
        <p>${details.centuries}</p>
        
      </div>
      <div class="column2">
        <p>${details.careers}</p>
      </div>
    </div>
  </body>
</html>

  `);
};

/**
 
 */
