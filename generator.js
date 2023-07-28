import fs from "fs";
import yaml from "yaml";
import fetch from "node-fetch";

const yamlString = await fetch(
  "https://api.val.town/v1/run/stevekrouse.vtOpenAPI"
).then((response) => response.json());

console.log(yamlString);

const jsonString = JSON.stringify(yaml.parse(yamlString));

fs.writeFileSync("./api.ts", `export const api = ${jsonString} as const`);
