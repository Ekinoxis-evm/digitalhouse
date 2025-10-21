import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * Manual deployment script for DigitalHouseFactory
 *
 * Usage:
 * npx hardhat run scripts/deploy.ts --network sepolia
 */
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // Get addresses from environment
  const pyusdToken = process.env.PYUSD_SEPOLIA || "";
  const realEstateAddress = process.env.REAL_ESTATE_ADDRESS || "";
  const digitalHouseAddress = process.env.DIGITAL_HOUSE_ADDRESS || "";
  const convexoAddress = process.env.CONVEXO_ADDRESS || "";

  if (!pyusdToken || !realEstateAddress || !digitalHouseAddress || !convexoAddress) {
    throw new Error("Missing required environment variables. Check .env file.");
  }

  console.log("\nDeployment Configuration:");
  console.log("PYUSD Token:", pyusdToken);
  console.log("Real Estate Address:", realEstateAddress);
  console.log("Digital House Address:", digitalHouseAddress);
  console.log("Convexo Address:", convexoAddress);

  // Deploy DigitalHouseFactory
  console.log("\nDeploying DigitalHouseFactory...");
  const FactoryFactory = await ethers.getContractFactory("DigitalHouseFactory");
  const factory = await FactoryFactory.deploy(
    pyusdToken,
    realEstateAddress,
    digitalHouseAddress,
    convexoAddress
  );

  await factory.waitForDeployment();
  const factoryAddress = await factory.getAddress();

  console.log("DigitalHouseFactory deployed to:", factoryAddress);

  // Save deployment info
  console.log("\n========================================");
  console.log("DEPLOYMENT SUMMARY");
  console.log("========================================");
  console.log("Network:", (await ethers.provider.getNetwork()).name);
  console.log("DigitalHouseFactory:", factoryAddress);
  console.log("Deployer:", deployer.address);
  console.log("========================================");

  console.log("\nVerification command:");
  console.log(`npx hardhat verify --network ${(await ethers.provider.getNetwork()).name} ${factoryAddress} ${pyusdToken} ${realEstateAddress} ${digitalHouseAddress} ${convexoAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
