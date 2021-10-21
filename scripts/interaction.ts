import { Contract, ContractFactory } from "ethers";
import RouterInteraction from "../artifacts/contracts/phxStake.sol/PHXStake.json";


import { ethers } from "hardhat";

async function main(): Promise<void> {

  const [signer] = await ethers.getSigners()
  const PhxStake: ContractFactory = new ContractFactory(RouterInteraction.abi, RouterInteraction.bytecode,signer );

  const phx = PhxStake.attach("0x6E138FDFfa27888FB4F2311678F96d21ED0cABC3")
  
// let tx =await BSCBridgeInstance.toggleWhiteListOnly({gasPrice: "0x2E90EDD000"});
// console.log(tx)
// await tx.wait(1)
    
}


main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });