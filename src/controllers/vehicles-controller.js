const api = require("../services/api");
const {
  formatMoney,
  replaceStoragePath,
  randomSort,
  verifyVehicleType,
} = require("../utils");

module.exports = {
  index: async (req, res) => {
    try {
      const { data } = await api.get("/vehicle");
      const sortedVehicles = data.sort(randomSort).slice(0, 6);
      const title = "Destaques da semana";
      return res.render("vehicle", {
        data: sortedVehicles,
        formatMoney,
        replaceStoragePath,
        verifyVehicleType,
        title,
      });
    } catch (error) {
      return res.render("error", { error });
    }
  },

  show: async (req, res) => {
    try {
      const { data } = await api.get(`/vehicle/id/${req.params.id}`);
      return res.render("detail", {
        vehicle: data[0],
        formatMoney,
        replaceStoragePath,
        verifyVehicleType,
      });
    } catch (error) {
      return res.render("error", { error });
    }
  },

  findNews: async (req, res) => {
    try {
      const { data } = await api.get("/vehicle/new");
      const title = "Veículos Novos";
      return res.render("vehicle", {
        data,
        formatMoney,
        replaceStoragePath,
        verifyVehicleType,
        title,
      });
    } catch (error) {
      return res.render("error", { error });
    }
  },

  findUseds: async (req, res) => {
    try {
      const { data } = await api.get("/vehicle/used");
      const title = "Veículos Seminovos";
      return res.render("vehicle", {
        data,
        formatMoney,
        replaceStoragePath,
        verifyVehicleType,
        title,
      });
    } catch (error) {
      return res.render("error", { error });
    }
  },
};
