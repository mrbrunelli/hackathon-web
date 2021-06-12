const api = require("../services/api");
const { formatMoney, replaceStoragePath } = require("../utils");

module.exports = {
  async index(req, res) {
    const { data } = await api.get("/vehicle");
    return res.render("vehicle", { data, formatMoney, replaceStoragePath });
  },

  async show(req, res) {
    const { data } = await api.get(`/vehicle/${req.params.id}`);
    return res.json(data);
  },
};
