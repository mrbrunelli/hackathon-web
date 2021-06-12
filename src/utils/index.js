module.exports = {
  formatMoney: (number) => {
    return number.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  },
  replaceStoragePath: (path) => {
    return path.replace("~", "http://localhost:8085");
  },
};
