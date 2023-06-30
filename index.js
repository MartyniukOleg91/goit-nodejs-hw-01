const productOperations = require("./contact.js");
const fs = require("fs/promises");

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
      console.log(updateProduct);
      break;
    default:
      console.log("Uncnow action");
  }
};

// invokeAction({ action: "getAll" });

// const id = "AeHIrLTr6JkxGE6SN-0Rw";
// invokeAction({ action: "getById", id });

// const newData = {
//   id: "1",
//   name: "Martyniuk Oleh ",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(097) 144-4167",
// };
// invokeAction({ action: "add", data: newData });

const updateId = "76fe8d68-5916-4e6a-8add-76dc9b44e5b2";
const updateData = {
  name: "Martyn",
  email: "nulla",
  phone: "(099) 156-4320",
};
invokeAction({ action: "updateById", id: updateId, data: updateData });
