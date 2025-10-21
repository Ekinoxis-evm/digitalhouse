import { run } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * Contract verification script for block explorers
 *
 * Usage:
 * npx hardhat run scripts/verify.ts --network sepolia
 */
async function main() {
  // Replace with your deployed contract address
  const FACTORY_ADDRESS = process.env.FACTORY_ADDRESS || "";

  if (!FACTORY_ADDRESS) {
    throw new Error("Please set FACTORY_ADDRESS in your .env file");
  }

  // Constructor arguments
  const pyusdToken = process.env.PYUSD_SEPOLIA || "";
  const realEstateAddress = process.env.REAL_ESTATE_ADDRESS || "";
  const digitalHouseAddress = process.env.DIGITAL_HOUSE_ADDRESS || "";
  const convexoAddress = process.env.CONVEXO_ADDRESS || "";

  console.log("Verifying DigitalHouseFactory at:", FACTORY_ADDRESS);

  try {
    await run("verify:verify", {
      address: FACTORY_ADDRESS,
      constructorArguments: [
        pyusdToken,
        realEstateAddress,
        digitalHouseAddress,
        convexoAddress,
      ],
    });
    console.log("Contract verified successfully!");
  } catch (error: any) {
    if (error.message.includes("Already Verified")) {
      console.log("Contract is already verified!");
    } else {
      console.error("Verification failed:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
