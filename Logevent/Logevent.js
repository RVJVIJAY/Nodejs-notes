const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const fspromise = require("fs").promises;
const Logevent = async (message) => {
  const dateTime = `${format(new Date(), "dd.MM.yyyy\t HH:mm:ss")}`;
  const id = uuid();
  const Logitem = `${dateTime}\t ${id}\t ${message}\n`;
  try {
    if (!fs.existsSync(path.join(__dirname, "log"))) {
     await fspromise.mkdir(path.join(__dirname, "log"));
    }
    await fspromise.appendFile(path.join(__dirname, "log", "logevent.txt"), Logitem);
  } catch (err) {
    console.error(err);
  }
};

module.exports = Logevent;
