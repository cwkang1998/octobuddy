// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import { USDCMock_OFT } from "../src/USDCMock_OFT.sol";

contract USDCMock_OFTScript is Script {
	uint256 private deployerPrivateKey = vm.envUint("PRIVATE_KEY");
	address private deployer = vm.addr(deployerPrivateKey);
	address private lzEndpointBaseSepolia = 0x6EDCE65403992e310A62460808c4b910D972f10f;
	address private lzEndpointSepolia = 0x6EDCE65403992e310A62460808c4b910D972f10f;
	uint32 private eidSepolia = 40161;
	uint32 private eidBaseSepolia = 40245;

	function run() external {
		// Select fork of destination chain
		vm.createSelectFork("base_sepolia");

		// Deploy Base OFT
        vm.startBroadcast(deployerPrivateKey);
		USDCMock_OFT usdc_base = new USDCMock_OFT("USDC", "USDC", lzEndpointBaseSepolia, deployer);
		vm.stopBroadcast();

		// Select fork of source chain
		vm.createSelectFork("sepolia");

		// Deploy Sepolia OFT
		vm.startBroadcast(deployerPrivateKey);
        USDCMock_OFT usdc_sepolia = new USDCMock_OFT("USDC", "USDC", lzEndpointSepolia, deployer);
		vm.stopBroadcast();
    }

	function run_test() external {
		USDCMock_OFT usdc_sepolia = USDCMock_OFT(0xcC6A0c696c81833c1806fc85F781C61Ba1B764F5);
		USDCMock_OFT usdc_base = USDCMock_OFT(0x8b2BeA59788f213a978A4319Bc40af78946DDd11);

		// Select fork of source chain
		vm.createSelectFork("sepolia");

		vm.startBroadcast(deployerPrivateKey);
		usdc_sepolia.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		vm.stopBroadcast();	

		// Select fork of destination chain
		vm.createSelectFork("base_sepolia");

		vm.startBroadcast(deployerPrivateKey);
		usdc_base.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		vm.stopBroadcast();
	}
}