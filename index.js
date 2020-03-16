const subnetFilter = require("./subnetFilter").subnetFilter;

const args = process.argv.slice(2);

const filePath = args[0];

(async () => {
  try {
    await subnetFilter(filePath);
  } catch (error) {
    throw new Error(error);
  }
})();
