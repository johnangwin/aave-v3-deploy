import { eLearningNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyDAI,
  strategyUSDT,
  strategyWETH,
} from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  strategyAAVE,
  strategyAGEUR,
  strategyBAL,
  strategyCRV,
  strategyDPI,
  strategyEURS,
  strategyGHST,
  strategyJEUR,
  strategyLINK,
  strategySUSHI,
  strategyUSDC,
  strategyWBTC,
  strategyWMATIC
} from "./reservesConfigs";
// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const LearningMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 350,
  WrappedNativeTokenSymbol: "WMATIC",
  MarketId: "Learning Aave Market",
  ATokenNamePrefix: "Learning",
  StableDebtTokenNamePrefix: "Learning",
  VariableDebtTokenNamePrefix: "Learning",
  SymbolPrefix: "Lea",
  ReservesConfig: {
    AAVE: strategyAAVE,
    AGEUR: strategyAGEUR,
    BAL: strategyBAL,
    CRV: strategyCRV,
    DAI: strategyDAI,
    DPI: strategyDPI,
    EURS: strategyEURS,
    GHST: strategyGHST,
    JEUR: strategyJEUR,
    LINK: strategyLINK,
    SUSHI: strategySUSHI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    WMATIC: strategyWMATIC
  },
  ReserveAssets: {
    [eLearningNetwork.learning]: {
      AAVE: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      AGEUR: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      BAL: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      CRV: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      DAI: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      DPI: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      EURS: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      GHST: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      JEUR: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      LINK: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      SUSHI: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      USDC: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      USDT: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
      WBTC: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      WETH: "0x9A676e781A523b5d0C0e43731313A708CB607508",
      WMATIC: "0x0B306BF915C4d645ff596e518fAf3F9669b97016"
    }
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT", "DAI", "EURS", "JEUR", "AGEUR"],
    },
  },
  ChainlinkAggregator: {
    [eLearningNetwork.learning]: {
      AAVE: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
      BAL: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
      CRV: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
      DAI: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
      DPI: "0x59b670e9fA9D0A427751Af201D676719a970857b",
      GHST: "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f",
      LINK: "0x4A679253410272dd5232B3Ff7cF5dbB88f295319",
      SUSHI: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
      USDC: "0xc5a5C42992dECbae36851359345FE25997F5C42d",
      USDT: "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
      WBTC: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
      WETH: "0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1",
      WMATIC: "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F",

      // Using EUR / USD price feeds, not dedicated per EUR pegged tokens
      EURS: "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",
      JEUR: "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",
      AGEUR: "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44"
    },
  },
};

export default LearningMarket;
