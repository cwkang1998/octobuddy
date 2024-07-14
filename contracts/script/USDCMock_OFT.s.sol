// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import { USDCMock_OFT } from "../src/USDCMock_OFT.sol";
import { SendParam } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/interfaces/IOFT.sol";
import { MessagingFee } from "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/ILayerZeroEndpointV2.sol";
import { OptionsBuilder } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/libs/OptionsBuilder.sol";
import { EnforcedOptionParam } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/interfaces/IOAppOptionsType3.sol";

contract USDCMock_OFTScript is Script {
	using OptionsBuilder for bytes;

	uint16 public constant SEND = 1;

	// Build forks
	uint256 public base_sepolia = vm.createSelectFork("base_sepolia");
	uint256 public sepolia = vm.createSelectFork("sepolia");
	uint256 public scroll_sepolia = vm.createSelectFork("scroll_sepolia");
	uint256 public linea_sepolia = vm.createSelectFork("linea_sepolia");
	uint256 public morph_sepolia = vm.createSelectFork("morph_sepolia");
	uint256 public zircuit_testnet = vm.createSelectFork("zircuit_testnet");
	uint256 public arbitrum_sepolia = vm.createSelectFork("arbitrum_sepolia");

	// Setup deployer
	uint256 private deployerPrivateKey = vm.envUint("PRIVATE_KEY");
	address private deployer = vm.addr(deployerPrivateKey);

	// Setup OFT endpoints and parameters
	address private lzEndpointTestnets = 0x6EDCE65403992e310A62460808c4b910D972f10f;
	uint32 private eidSepolia = 40161;
	uint32 private eidBaseSepolia = 40245;
	uint32 private eidScrollSepolia = 40170;
	uint32 private eidLineaSepolia = 40287;
	uint32 private eidMorphTestnet = 40290;
	uint32 private eidZircuitTestnet = 40275;
	uint32 private eidAribitrumSepolia = 40231;

	// Setup deployed contracts
	USDCMock_OFT public usdc_sepolia = USDCMock_OFT(0xDe54beB534EfB7Da0bA8116DD44926CfB3E1d1F4);
	USDCMock_OFT public usdc_base = USDCMock_OFT(0xBd935e8aD0E94A120dE27493BeBDE3945A495808);
	USDCMock_OFT public usdc_scroll = USDCMock_OFT(0xfD2Ec58cE4c87b253567Ff98ce2778de6AF0101b);
	USDCMock_OFT public usdc_linea = USDCMock_OFT(0xc19Ac697392EaaF3Cca5505209542abf8eDcd12e);
	USDCMock_OFT public usdc_morph = USDCMock_OFT(0xc19Ac697392EaaF3Cca5505209542abf8eDcd12e);
	USDCMock_OFT public usdc_zircuit = USDCMock_OFT(0xc19Ac697392EaaF3Cca5505209542abf8eDcd12e);
	USDCMock_OFT public usdc_arbitrum = USDCMock_OFT(0x222e840B49cE83E811AB845e50104C6Aa8b12F45);

	// Setup target address
	address public targetAddr = 0xf1771f24BDD7123acceae534945E96ABC83bBb61;

	// Setup enforced options
	bytes public options = OptionsBuilder.newOptions().addExecutorLzReceiveOption(60000, 0);

	function run() external {
		// Select fork and deploy USDCMock_OFT
		vm.selectFork(base_sepolia);
        vm.startBroadcast(deployerPrivateKey);
		usdc_base = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		vm.selectFork(sepolia);
		vm.startBroadcast(deployerPrivateKey);
        usdc_sepolia = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		vm.selectFork(scroll_sepolia);
		vm.startBroadcast(deployerPrivateKey);
        usdc_scroll = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		vm.selectFork(linea_sepolia);
		vm.startBroadcast(deployerPrivateKey);
        usdc_linea = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		vm.selectFork(morph_sepolia);
		vm.startBroadcast(deployerPrivateKey);
        usdc_morph = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		vm.selectFork(zircuit_testnet);
		vm.startBroadcast(deployerPrivateKey);
        usdc_zircuit = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		vm.selectFork(arbitrum_sepolia);
		vm.startBroadcast(deployerPrivateKey);
        usdc_arbitrum = new USDCMock_OFT("USDC", "USDC", lzEndpointTestnets, deployer);
		vm.stopBroadcast();

		// Select fork and set peer 
		vm.selectFork(base_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_base.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		usdc_base.setPeer(eidScrollSepolia, bytes32(uint256(uint160(address(usdc_scroll)))));
		usdc_base.setPeer(eidLineaSepolia, bytes32(uint256(uint160(address(usdc_linea)))));
		usdc_base.setPeer(eidMorphTestnet, bytes32(uint256(uint160(address(usdc_morph)))));
		usdc_base.setPeer(eidZircuitTestnet, bytes32(uint256(uint160(address(usdc_zircuit)))));
		usdc_base.setPeer(eidAribitrumSepolia, bytes32(uint256(uint160(address(usdc_arbitrum)))));
		vm.stopBroadcast();

		vm.selectFork(sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_sepolia.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		usdc_sepolia.setPeer(eidScrollSepolia, bytes32(uint256(uint160(address(usdc_scroll)))));
		usdc_sepolia.setPeer(eidLineaSepolia, bytes32(uint256(uint160(address(usdc_linea)))));
		usdc_sepolia.setPeer(eidMorphTestnet, bytes32(uint256(uint160(address(usdc_morph)))));
		usdc_sepolia.setPeer(eidZircuitTestnet, bytes32(uint256(uint160(address(usdc_zircuit)))));
		usdc_sepolia.setPeer(eidAribitrumSepolia, bytes32(uint256(uint160(address(usdc_arbitrum)))));
		vm.stopBroadcast();

		vm.selectFork(scroll_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_scroll.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		usdc_scroll.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		usdc_scroll.setPeer(eidLineaSepolia, bytes32(uint256(uint160(address(usdc_linea)))));
		usdc_scroll.setPeer(eidMorphTestnet, bytes32(uint256(uint160(address(usdc_morph)))));
		usdc_scroll.setPeer(eidZircuitTestnet, bytes32(uint256(uint160(address(usdc_zircuit)))));
		usdc_scroll.setPeer(eidAribitrumSepolia, bytes32(uint256(uint160(address(usdc_arbitrum)))));
		vm.stopBroadcast();

		vm.selectFork(linea_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_linea.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		usdc_linea.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		usdc_linea.setPeer(eidScrollSepolia, bytes32(uint256(uint160(address(usdc_scroll)))));
		usdc_linea.setPeer(eidMorphTestnet, bytes32(uint256(uint160(address(usdc_morph)))));
		usdc_linea.setPeer(eidZircuitTestnet, bytes32(uint256(uint160(address(usdc_zircuit)))));
		usdc_linea.setPeer(eidAribitrumSepolia, bytes32(uint256(uint160(address(usdc_arbitrum)))));
		vm.stopBroadcast();

		vm.selectFork(morph_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_morph.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		usdc_morph.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		usdc_morph.setPeer(eidScrollSepolia, bytes32(uint256(uint160(address(usdc_scroll)))));
		usdc_morph.setPeer(eidLineaSepolia, bytes32(uint256(uint160(address(usdc_linea)))));
		usdc_morph.setPeer(eidZircuitTestnet, bytes32(uint256(uint160(address(usdc_zircuit)))));
		usdc_morph.setPeer(eidAribitrumSepolia, bytes32(uint256(uint160(address(usdc_arbitrum)))));
		vm.stopBroadcast();

		vm.selectFork(zircuit_testnet);
		vm.startBroadcast(deployerPrivateKey);
		usdc_zircuit.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		usdc_zircuit.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		usdc_zircuit.setPeer(eidScrollSepolia, bytes32(uint256(uint160(address(usdc_scroll)))));
		usdc_zircuit.setPeer(eidLineaSepolia, bytes32(uint256(uint160(address(usdc_linea)))));
		usdc_zircuit.setPeer(eidMorphTestnet, bytes32(uint256(uint160(address(usdc_morph)))));
		usdc_zircuit.setPeer(eidAribitrumSepolia, bytes32(uint256(uint160(address(usdc_arbitrum)))));
		vm.stopBroadcast();

		vm.selectFork(arbitrum_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		usdc_arbitrum.setPeer(eidBaseSepolia, bytes32(uint256(uint160(address(usdc_base)))));
		usdc_arbitrum.setPeer(eidSepolia, bytes32(uint256(uint160(address(usdc_sepolia)))));
		usdc_arbitrum.setPeer(eidScrollSepolia, bytes32(uint256(uint160(address(usdc_scroll)))));
		usdc_arbitrum.setPeer(eidLineaSepolia, bytes32(uint256(uint160(address(usdc_linea)))));
		usdc_arbitrum.setPeer(eidMorphTestnet, bytes32(uint256(uint160(address(usdc_morph)))));
		usdc_arbitrum.setPeer(eidZircuitTestnet, bytes32(uint256(uint160(address(usdc_zircuit)))));
		vm.stopBroadcast();

		// Select fork of source chain, build and set enforced options
		vm.selectFork(base_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		EnforcedOptionParam[] memory enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidScrollSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidLineaSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidMorphTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidZircuitTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidAribitrumSepolia,
			msgType: SEND,
			options: options
		});
		usdc_base.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();

		vm.selectFork(sepolia);
		vm.startBroadcast(deployerPrivateKey);
		enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidBaseSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidScrollSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidLineaSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidMorphTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidZircuitTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidAribitrumSepolia,
			msgType: SEND,
			options: options
		});
		usdc_sepolia.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();

		vm.selectFork(scroll_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidBaseSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidLineaSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidMorphTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidZircuitTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidAribitrumSepolia,
			msgType: SEND,
			options: options
		});
		usdc_scroll.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();

		vm.selectFork(linea_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidBaseSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidScrollSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidMorphTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidZircuitTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidAribitrumSepolia,
			msgType: SEND,
			options: options
		});
		usdc_linea.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();

		vm.selectFork(morph_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidBaseSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidScrollSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidLineaSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidZircuitTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidAribitrumSepolia,
			msgType: SEND,
			options: options
		});
		usdc_morph.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();

		vm.selectFork(zircuit_testnet);
		vm.startBroadcast(deployerPrivateKey);
		enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidBaseSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidScrollSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidLineaSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidMorphTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidAribitrumSepolia,
			msgType: SEND,
			options: options
		});
		usdc_zircuit.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();

		vm.selectFork(arbitrum_sepolia);
		vm.startBroadcast(deployerPrivateKey);
		enforcedOptions = new EnforcedOptionParam[](6);
		enforcedOptions[0] = EnforcedOptionParam({
			eid: eidBaseSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[1] = EnforcedOptionParam({
			eid: eidSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[2] = EnforcedOptionParam({
			eid: eidScrollSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[3] = EnforcedOptionParam({
			eid: eidLineaSepolia,
			msgType: SEND,
			options: options
		});
		enforcedOptions[4] = EnforcedOptionParam({
			eid: eidMorphTestnet,
			msgType: SEND,
			options: options
		});
		enforcedOptions[5] = EnforcedOptionParam({
			eid: eidZircuitTestnet,
			msgType: SEND,
			options: options
		});
		usdc_arbitrum.setEnforcedOptions(enforcedOptions);
		vm.stopBroadcast();
    }

	function run_test() external {
		// Setup (config fork, )
		vm.selectFork(base_sepolia);
		vm.startBroadcast(deployerPrivateKey);

		USDCMock_OFT memory oft = usdc_base;

		// Mint test tokens
		oft.mint(100000000000000000000);

		// Build SendParam and quote fees
		SendParam memory sendParam = SendParam({
			dstEid: eidBaseSepolia,
			to: bytes32(uint256(uint160(targetAddr))),
			amountLD: 100000000000000000000,
			minAmountLD: 100000000000000000000,
			extraOptions: "",
			composeMsg: "",
			oftCmd: ""
		});
		MessagingFee memory fee = oft.quoteSend(sendParam, false);

		// Try sending OFT
		oft.send{value: fee.nativeFee}(sendParam, fee, deployer);

		vm.stopBroadcast();
	}
}