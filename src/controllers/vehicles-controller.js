const api = require("../services/api");

module.exports = {
  async index(req, res) {
    const { data } = await api.get("/vehicle");
    return res.json(data);
  },

  async show(req, res) {
    const { data } = await api.get(`/vehicle/${req.params.id}`);
    return res.json(data);
  },
};
