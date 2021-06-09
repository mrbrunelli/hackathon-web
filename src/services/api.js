const axios = require("axios").default;

const api = axios.create({
  baseURL: "https://60aae30b66f1d0001777342d.mockapi.io/api/v1",
});

module.exports = api;
