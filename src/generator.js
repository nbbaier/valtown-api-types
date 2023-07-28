import fs from "fs";
import yaml from "yaml";
import fetch from "node-fetch";

const yamlString = await fetch("https://www.val.town/docs/openapi.yaml").then(
  (res) => res.text()
);
const jsonString = JSON.stringify(yaml.parse(yamlString));

fs.writeFileSync("./src/api.ts", `export const api = ${jsonString} as const`);
