import type { Options } from "tsup";

const config: Options = {
  entry: ["./api.ts"],
  dts: true,
  format: ["esm"],
};

export default config;
