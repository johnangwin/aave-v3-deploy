import { eLearningNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyDAI,
  strategyUSDT,
  strategyWETH,
} from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  strategyAGEUR,
  strategyBAL,
  strategyCRV,
  strategyDPI,
  strategyEURS,
  strategyGHST,
  strategyJEUR,
  strategyLINK,
  strategySUSHI,
  strategyWMATIC,
  strategyUSDC,
  strategyAAVE,
  strategyWBTC,
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
    DAI: strategyDAI,
    LINK: strategyLINK,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    USDT: strategyUSDT,
    AAVE: strategyAAVE,
    WMATIC: strategyWMATIC,
    CRV: strategyCRV,
    SUSHI: strategySUSHI,
    GHST: strategyGHST,
    BAL: strategyBAL,
    DPI: strategyDPI,
    EURS: strategyEURS,
    JEUR: strategyJEUR,
    AGEUR: strategyAGEUR,
  },
  ReserveAssets: {
    [eLearningNetwork.learning]: {
      AAVE: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      DAI: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      LINK: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      USDC: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      WBTC: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      WETH: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      USDT: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      WMATIC: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      GHST: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      BAL: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      CRV: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      DPI: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
      SUSHI: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      EURS: "0x9A676e781A523b5d0C0e43731313A708CB607508",
      JEUR: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
      AGEUR: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1"
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
      AAVE: "0x4c5859f0F772848b2D91F1D83E2Fe57935348029",
      DAI: "0x1291Be112d480055DaFd8a610b7d1e203891C274",
      LINK: "0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154",
      USDC: "0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575",
      WBTC: "0xCD8a1C3ba11CF5ECfa6267617243239504a98d90",
      WETH: "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1",
      USDT: "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3",
      WMATIC: "0x7969c5eD335650692Bc04293B07F5BF2e7A673C0",
      GHST: "0x7bc06c482DEAd17c0e297aFbC32f6e63d3846650",
      BAL: "0xc351628EB244ec633d5f21fBD6621e1a683B1181",
      CRV: "0xFD471836031dc5108809D173A067e8486B9047A3",
      DPI: "0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc",
      SUSHI: "0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f",
      // Using EUR / USD price feeds, not dedicated per EUR pegged tokens
      EURS: "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07",
      JEUR: "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07",
      AGEUR: "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07"
    },
  },
};

export default LearningMarket;
