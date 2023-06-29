const ol = require("./contacts");
const fs = require("fs/promises");

const fileOperation = async (filePath, action = "read", data = "") => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      break;
    case "add":
      const result = await fs.appendFile(filePath, data);
      console.log(result);
      break;
  }
};

fileOperation("./db/contacts.json");
fileOperation("./db/contacts.json", "add", "{nkjhgkjghjg}");
// fs.readFile("./db/contacts.json", "UTF-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error.message));
