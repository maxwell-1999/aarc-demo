import { gaslessSingleTokenTransfer } from "./gasless/script";

import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  await gaslessSingleTokenTransfer();
}

main();
