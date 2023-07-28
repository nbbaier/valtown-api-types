import fs from "fs";
import yaml from "yaml";
import fetch from "node-fetch";

let yamlString = await fetch("https://www.val.town/docs/openapi.yaml").then(
  (response) => response.text()
);

console.log(yamlString);

const jsonString = JSON.stringify(yaml.parse(yamlString));
Should;
fs.writeFileSync("./api.ts", `export const api = ${jsonString} as const`);
