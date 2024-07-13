// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import { USDCMock_OFT } from "../src/USDCMock_OFT.sol";
import { SendParam } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/interfaces/IOFT.sol";
import { MessagingFee } from "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/ILayerZeroEndpointV2.sol";
import { OptionsBuilder } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol";

contract USDCMock_OFTScript is Script {
	using OptionsBuilder for bytes;

	uint256 public base_sepolia = vm.createSelectFork("base_sepolia");
	uint256 public sepolia = vm.createSelectFork("sepolia");
	uint256 private deployerPrivateKey = vm.envUint("PRIVATE_KEY");
	address private deployer = vm.addr(deployerPrivateKey);
	address private lzEndpointBaseSepolia = 0x6EDCE65403992e310A62460808c4b910D972f10f;
	address private lzEndpointSepolia = 0x6EDCE65403992e310A62460808c4b910D972f10f;
	uint32 private eidSepolia = 40161;
	uint32 private eidBaseSepolia = 40245;
	address public targetAddr = 0xf1771f24BDD7123acceae534945E96ABC83bBb61;

	function run() external {
		// Select fork of destination chain and deploy Base OFT
		vm.selectFork(base_sepolia);
        vm.startBroadcast(deployerPrivateKey);
		USDCMock_OFT usdc_base = new USDCMock_OFT("USDC", "USDC", lzEndpointBaseSepolia, deployer);
		vm.stopBroadcast();

		// Select fork of source chain, deploy Sepolia OFT and set peer
		vm.selectFork(sepolia);
		vm.startBroadcast(deployerPrivateKey);
        USDCMock_OFT usdc_sepolia = new USDCMock_OFT("USDC", "USDC", lzEndpointSepolia, deployer);
		usdc_sepolia.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		vm.stopBroadcast();

		// Select fork of destination chain and set peer on Sepolia OFT
		vm.selectFork(base_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_base.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		vm.stopBroadcast();
    }

	function run_test() external {
		USDCMock_OFT usdc_sepolia = USDCMock_OFT(0x6C9834A1C679c6a156fe5071d6Fd3d3648efFB9f);
		USDCMock_OFT usdc_base = USDCMock_OFT(0x4C0b9173e3bd1F98D9E0de6Af63618A73A642BDa);

		vm.selectFork(sepolia);
		vm.startBroadcast(deployerPrivateKey);

		usdc_sepolia.mint(100000000000000000000);

		SendParam memory sendParam = SendParam({
			dstEid: eidBaseSepolia,
			to: bytes32(uint256(uint160(targetAddr))),
			amountLD: 100000000000000000000,
			minAmountLD: 100000000000000000000,
			extraOptions: "",
			composeMsg: "",
			oftCmd: ""
		});

		// MessagingFee fee = MessagingFee({
		// 	nativeFee: 0,
		// 	lzTokenFee: 0
		// });

		// bytes memory options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(50000, 0);

		MessagingFee memory fee = usdc_sepolia.quoteSend(sendParam, false);

		vm.stopBroadcast();
	}
}