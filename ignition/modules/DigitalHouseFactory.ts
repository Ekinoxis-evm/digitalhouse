import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * Hardhat Ignition Module for deploying DigitalHouseFactory
 *
 * Usage:
 * npx hardhat ignition deploy ignition/modules/DigitalHouseFactory.ts --network sepolia
 */
const DigitalHouseFactoryModule = buildModule("DigitalHouseFactoryModule", (m) => {

  // Get parameters from environment or use defaults
  const pyusdToken = m.getParameter("pyusdToken", process.env.PYUSD_SEPOLIA || "");
  const realEstateAddress = m.getParameter("realEstateAddress", process.env.REAL_ESTATE_ADDRESS || "");
  const digitalHouseAddress = m.getParameter("digitalHouseAddress", process.env.DIGITAL_HOUSE_ADDRESS || "");
  const convexoAddress = m.getParameter("convexoAddress", process.env.CONVEXO_ADDRESS || "");

  // Deploy the Factory contract
  const factory = m.contract("DigitalHouseFactory", [
    pyusdToken,
    realEstateAddress,
    digitalHouseAddress,
    convexoAddress,
  ]);

  return { factory };
});

export default DigitalHouseFactoryModule;
