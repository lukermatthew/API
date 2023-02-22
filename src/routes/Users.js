const express = require("express");
const router = express.Router();

const CreateService = require("../services/Create");
const RetrieveService = require("../services/Retrieve");
const UpdateService = require("../services/Update");
const DeleteService = require("../services/Delete");
const DeleteAllService = require("../services/DeleteAll");

router.post(`/create`, async (req, res) => {
  const {
    firstname,
    lastname,
    address,
    postcode,
    contact,
    email,
    username,
    password,
  } = req.body;

  const results = await CreateService(
    firstname,
    lastname,
    address,
    postcode,
    contact,
    email,
    username,
    password
  );

  if (results) {
    res.status(200).send({
      status: results,
      message: "Successfully Created!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Created!",
    });
  }
});

router.get(`/retrieve`, async (req, res) => {
  const { fields } = req.query;

  const results = await RetrieveService(fields);

  if (results) {
    res.status(200).send(results);
  } else {
    res.status(500).send({
      status: results,
      message: "Not Retrieved!",
    });
  }
});

router.post(`/update`, async (req, res) => {
  const {
    id,
    firstname,
    lastname,
    address,
    postcode,
    contact,
    email,
    username,
    password,
  } = req.body;

  const results = await UpdateService(
    id,
    firstname,
    lastname,
    address,
    postcode,
    contact,
    email,
    username,
    password
  );

  if (results) {
    res.status(200).send({
      status: results,
      message: "Successfully Updated!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Updated!",
    });
  }
});

router.get(`/delete`, async (req, res) => {
  const { id } = req.query;

  const results = await DeleteService(id);

  if (results) {
    res.status(200).send({
      status: results,
      message: "Successfully Deleted!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Deleted!",
    });
  }
});

router.get(`/deleteAll`, async (req, res) => {
  const results = await DeleteAllService();

  if (results) {
    res.status(200).send({
      status: results,
      message: "Successfully Deleted!",
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Not Deleted!",
    });
  }
});

module.exports = router;
