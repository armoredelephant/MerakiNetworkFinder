const fs = require("fs");
const csv = require("csv-parser");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "available_networks.csv",
  header: [{ id: "network", title: "Network" }]
});

const ranges = [
  0,
  8,
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  72,
  80,
  88,
  96,
  104,
  112,
  120,
  128,
  136,
  144,
  152,
  160,
  168,
  176,
  184,
  192,
  200,
  208,
  216,
  224,
  232,
  240,
  248
];

const subnetFilter = async filePath => {
  const subnets = {};

  console.log("starting subnet check...");

  await fs
    .createReadStream(filePath)
    .pipe(csv())
    .on("data", data => {
      if (!subnets[data.columnOne]) {
        subnets[data.columnOne] = [...ranges];
      }
      const filtered = subnets[data.columnOne].filter(
        ip => ip != data.columnTwo
      );
      subnets[data.columnOne] = [...filtered];
    })
    .on("end", () => {
      const networkKeys = Object.keys(subnets);
      const completedNetworks = [];
      for (const key of networkKeys) {
        subnets[key].map(range => {
          return completedNetworks.push({
            network: `${key}_${range}_meraki`
          });
        });
      }

      return csvWriter.writeRecords(completedNetworks);
    });

  console.log("network list has successfully been created...");
};

exports.subnetFilter = subnetFilter;
