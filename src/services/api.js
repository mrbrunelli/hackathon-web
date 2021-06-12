const axios = require("axios").default;

const api = axios.create({
  baseURL: "http://localhost:8085",
});

module.exports = api;
