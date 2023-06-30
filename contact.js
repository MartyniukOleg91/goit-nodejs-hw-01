const { isUtf8 } = require("buffer");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  const products = JSON.parse(data);
  return products;
};

const getById = async (id) => {
  const products = await getAll();
  const result = products.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
};

const add = async () => {};

module.exports = { getAll, getById };
