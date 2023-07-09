const { isUtf8 } = require("buffer");
const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  const products = JSON.parse(data);
  return products;
};

const getById = async (id) => {
  const products = await getAll();
  console.log(id);
  const result = products.find((item) => {
    return item.id === id;
  });

  if (!result) {
    return null;
  }
  return result;
};

const add = async (data) => {
  const products = await getAll();
  const newProduct = { ...data, id: v4() };
  products.push(newProduct);
  await fs.writeFile(contactsPath, JSON.stringify(products));
  return newProduct;
};

const updateById = async (id, data) => {
  const products = await getAll();
  const idx = products.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  products[idx] = { ...data, id };
  await fs.writeFile(contactsPath, JSON.stringify(products));
  return products[idx];
};

const removeById = async (id) => {
  const products = await getAll();
  const index = products.findIndex((item) => item.id === id);
  const [removeProduct] = products.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(products));
  return removeProduct;
};

module.exports = { getAll, getById, add, updateById, removeById };
