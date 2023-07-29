import fs from "fs";
import yaml from "yaml";
// import fetch from "node-fetch";

const response = await fetch("https://www.val.town/docs/openapi.yaml").then(
  (res) => res.text()
);
const spec = yaml.parse(response);

const types = `declare const openapi: ${JSON.stringify(
  spec,
  null,
  2
)}; export default openapi;`.trim();

fs.writeFileSync("./index.d.ts", types);
