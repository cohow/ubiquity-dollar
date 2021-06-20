/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CouponsForDollarsCalculator } from "../CouponsForDollarsCalculator";

export class CouponsForDollarsCalculator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CouponsForDollarsCalculator> {
    return super.deploy(
      _manager,
      overrides || {}
    ) as Promise<CouponsForDollarsCalculator>;
  }
  getDeployTransaction(
    _manager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_manager, overrides || {});
  }
  attach(address: string): CouponsForDollarsCalculator {
    return super.attach(address) as CouponsForDollarsCalculator;
  }
  connect(signer: Signer): CouponsForDollarsCalculator__factory {
    return super.connect(signer) as CouponsForDollarsCalculator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CouponsForDollarsCalculator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CouponsForDollarsCalculator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dollarsToBurn",
        type: "uint256",
      },
    ],
    name: "getCouponAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "contract UbiquityAlgorithmicDollarManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161119538038061119583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b611104806100916000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063481c6a751461003b5780639172dd231461006b575b600080fd5b60005461004e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61007e6100793660046110c7565b61008c565b604051908152602001610062565b60008060009054906101000a90046001600160a01b03166001600160a01b031663bc3ea0186040518163ffffffff1660e01b815260040160206040518083038186803b1580156100db57600080fd5b505afa1580156100ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011391906110a0565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561014b57600080fd5b505afa15801561015f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018391906110df565b60008054906101000a90046001600160a01b03166001600160a01b03166356593ea36040518163ffffffff1660e01b815260040160206040518083038186803b1580156101cf57600080fd5b505afa1580156101e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020791906110a0565b6001600160a01b031663db87b1ff6040518163ffffffff1660e01b815260040160206040518083038186803b15801561023f57600080fd5b505afa158015610253573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027791906110df565b106102c85760405162461bcd60e51b815260206004820152601f60248201527f436f75706f6e20746f20646f6c6c61723a20444542545f544f4f5f4849474800604482015260640160405180910390fd5b60006102d46001610540565b905060006103d460008054906101000a90046001600160a01b03166001600160a01b03166356593ea36040518163ffffffff1660e01b815260040160206040518083038186803b15801561032757600080fd5b505afa15801561033b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035f91906110a0565b6001600160a01b031663db87b1ff6040518163ffffffff1660e01b815260040160206040518083038186803b15801561039757600080fd5b505afa1580156103ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cf91906110df565b610540565b905060006104ab61049a60008054906101000a90046001600160a01b03166001600160a01b031663bc3ea0186040518163ffffffff1660e01b815260040160206040518083038186803b15801561042a57600080fd5b505afa15801561043e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046291906110a0565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561039757600080fd5b6001600160801b03198416906105a5565b905060006104ea6104c66001600160801b03198616846108cf565b6104da6001600160801b03198716856108cf565b6001600160801b031916906108e8565b905060006105026001600160801b03198616836105a5565b905061053361052461051389610540565b6001600160801b03198416906108e8565b6001600160801b031916610b5f565b955050505050505b919050565b60008161054f5750600061053b565b81600061055b82610be3565b90506070811015610574578060700382901b9150610587565b6070811115610587576070810382901c91505b613fff0160701b6001600160701b03919091161760801b905061053b565b6000617fff60f084811c8216919084901c8116908214156105eb5780617fff14156105da575061ffff60ef1b91506108c99050565b505050600160ff1b811682186108c9565b80617fff141561063c577dffffffffffffffffffffffffffff0000000000000000000000000000000084161561062b575061ffff60ef1b91506108c99050565b505050808218600160ff1b166108c9565b6f7fffffffffffffffffffffffffffffff60801b8416610698576f7fffffffffffffffffffffffffffffff60801b8516610680575061ffff60ef1b91506108c99050565b505050808218600160ff1b16617fff60f01b176108c9565b6001600160701b03608085901c16816106b457600191506106bb565b600160701b175b6001600160701b03608087901c16836106fa5780156106f55760006106df82610be3565b6001955060e20393840160711901939190911b90505b610704565b600160701b1760721b5b81818161072157634e487b7160e01b600052601260045260246000fd5b0490508061074e57600160ff1b8787181661073d576000610743565b600160ff1b5b9450505050506108c9565b6d100000000000000000000000000081101561077a57634e487b7160e01b600052600160045260246000fd5b60006e0800000000000000000000000000008210156107db576e0400000000000000000000000000008210156107d0576e0200000000000000000000000000008210156107c85760706107cb565b60715b6107d3565b60725b60ff166107e4565b6107e482610be3565b90508361407101818601111561080257617fff945060009150610895565b83818601613ffc01101561081d576000945060009150610895565b83818601613f8c01101561086a578385613ffc011115610848578385613ffc010382901b9150610861565b8385613ffc01101561086157613ffc8585030382901c91505b60009450610895565b607081111561087d576070810382901c91505b6001600160701b038216915083818601613f8d010394505b81607086901b888a186001607f1b60801b1660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050505b92915050565b60006108e183600160ff1b8418610c93565b9392505050565b6000617fff60f084811c8216919084901c8116908214156109905780617fff1415610966576001600160801b0319858116908516141561093357505050600160ff1b811682186108c9565b600160ff1b6001600160801b0319868618161415610956575050508181176108c9565b5061ffff60ef1b91506108c99050565b6f7fffffffffffffffffffffffffffffff60801b84166105da575061ffff60ef1b91506108c99050565b80617fff14156109d5576f7fffffffffffffffffffffffffffffff60801b85166109c4575061ffff60ef1b91506108c99050565b505050600160ff1b821681186108c9565b6001600160701b03608086901c16826109f157600192506109f8565b600160701b175b6001600160701b03608086901c1682610a145760019250610a1b565b600160701b175b9081029081610a3857600160ff1b8787181661073d576000610743565b928201926000600160e11b831015610a6c57600160e01b831015610a6457610a5f83610be3565b610a67565b60e05b610a6f565b60e15b90506140708186011015610a8a576000945060009250610b27565b6140e08186011015610acd57614070851015610aaf57846140700383901c9250610ac4565b614070851115610ac457614070850383901b92505b60009450610b27565b61c0dd8186011115610ae757617fff945060009250610b27565b6070811115610afe576070810383901c9250610b11565b6070811015610b11578060700383901b92505b6001600160701b03831692506140df8186010394505b82607086901b888a186001607f1b60801b1660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050506108c9565b6000617fff60f083901c16613fff811015610b7e57600091505061053b565b6001607f1b608084901c10610b9257600080fd5b6140fe811115610ba157600080fd5b600160701b6001600160701b03608085901c161761406f821015610bcb5761406f8290031c6108e1565b61406f8211156108e15761406e1982011b9392505050565b6000808211610bf157600080fd5b60007001000000000000000000000000000000008310610c1357608092831c92015b680100000000000000008310610c2b57604092831c92015b6401000000008310610c3f57602092831c92015b620100008310610c5157601092831c92015b6101008310610c6257600892831c92015b60108310610c7257600492831c92015b60048310610c8257600292831c92015b600283106108c95760010192915050565b6000617fff60f084811c8216919084901c811690821415610ce15780617fff1415610cd7576001600160801b031985811690851614156109565784925050506108c9565b84925050506108c9565b80617fff1415610cf55783925050506108c9565b6001607f1b608086901c90811015906001600160701b031683610d1b5760019350610d22565b600160701b175b6001607f1b608087901c90811015906001600160701b031684610d485760019450610d4f565b600160701b175b82610d7f576001600160801b03198816600160ff1b14610d6f5787610d72565b60005b96505050505050506108c9565b80610d9f576001600160801b03198916600160ff1b14610d6f5788610d72565b8486038415158315151415610ed6576070811315610dc657899750505050505050506108c9565b6000811315610dd85790811c90610e07565b606f19811215610df157889750505050505050506108c9565b6000811215610e07578060000384901c93508596505b928101926e0200000000000000000000000000008410610e2d576001968701969390931c925b86617fff1415610e775784610e4757617fff60f01b610e69565b7fffff0000000000000000000000000000000000000000000000000000000000005b9750505050505050506108c9565b600160701b841015610e8c5760009650610e99565b6001600160701b03841693505b83607088901b86610eab576000610eb1565b6001607f1b5b6fffffffffffffffffffffffffffffffff16171760801b9750505050505050506108c9565b6000811315610ef157600184901b9350600187039650610f08565b6000811215610f0857600182901b91506001860396505b6070811315610f1a5760019150610f67565b6001811315610f37576001810360018303901c6001019150610f67565b606f19811215610f4a5760019350610f67565b600019811215610f67576001816000030360018503901c60010193505b818410610f78578184039350610f81565b83820393508294505b83610f975750600096506108c995505050505050565b6000610fa285610be3565b90508060711415610fc857600185901c6001600160701b03169450600188019750611017565b607081101561100a57607081900380891115610ff7578086901b6001600160701b031695508089039850611004565b600098600019019590951b945b50611017565b6001600160701b03851694505b87617fff1415611062578561103157617fff60f01b611053565b7fffff0000000000000000000000000000000000000000000000000000000000005b985050505050505050506108c9565b84607089901b8761107457600061107a565b6001607f1b5b6fffffffffffffffffffffffffffffffff16171760801b985050505050505050506108c9565b6000602082840312156110b1578081fd5b81516001600160a01b03811681146108e1578182fd5b6000602082840312156110d8578081fd5b5035919050565b6000602082840312156110f0578081fd5b505191905056fea164736f6c6343000803000a";