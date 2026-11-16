import { version } from "../../package.json";

export const build = {
  version: `v${version}`,
  date: new Date().toISOString().slice(0, 10),
};
