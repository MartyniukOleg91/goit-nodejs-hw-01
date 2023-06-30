const productOperations = require("./contact.js");
const fs = require("fs/promises");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const products = await productOperations.getAll();

      break;
    case "getById":
      const product = await productOperations.getById(id);
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      console.log(product);
      break;
    default:
      console.log("Uncnow action");
  }
};

invokeAction({ action: "getAll" });

const id = "AeHIrLTr6JkxGE6SN-0Rw";
invokeAction({ action: "getById", id });
