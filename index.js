const { log } = require("console");
const productOperations = require("./contact.js");
const fs = require("fs/promises");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productOperations.getAll();
      console.log(products);
      break;
    case "getById":
      const product = await productOperations.getById(id);

      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      console.log(product);
      break;
    case "add":
      const newProduct = await productOperations.add(data);

    case "updateById":
      const updateProduct = await productOperations.updateById(id, data);
      if (!updateProduct) {
        throw new Error(`Product with id ${id} not found`);
      }
      console.table(updateProduct);
      break;

    case "removeById":
      const removeProduct = await productOperations.removeById(id);

    default:
      console.log("Uncnow action");
  }
};

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);

// ========================== GET ALL ===========================

// invokeAction({ action: "getAll" });

const id = "10";
invokeAction({ action: "getById", id });

// ========================== NEW DATA ===========================

// const newData = {
//   id: "141",
//   name: "Martyniuk Oleh ",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(097) ",
// };
// invokeAction({ action: "add", data: newData });

// ========================== UPDATE ===========================

// const updateId = "76fe8d68-5916-4e6a-8add-76dc9b44e5b2";
// const updateData = {
//   name: "Martyniuk Oleh",
//   email: "nulla",
//   phone: "(099) 156-4320",
// };
// invokeAction({ action: "updateById", id: updateId, data: updateData });

// ========================== DELETE ===========================

// const deleteId = "8";

// invokeAction({ action: "removeById", id: deleteId });
