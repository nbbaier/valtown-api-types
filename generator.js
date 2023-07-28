import fs from "fs";
import yaml from "yaml";
import fetch from "node-fetch";

const yamlString = await fetch("https://www.val.town/docs/openapi.yaml").then(
  (response) => response.text()
);

const jsonString = JSON.stringify(yaml.parse(yamlString));
fs.writeFileSync("./api.ts", `export const api = ${jsonString} as const`);
