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
      AAVE: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      DAI: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      LINK: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      USDC: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      WBTC: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      WETH: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      USDT: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
      WMATIC: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
      GHST: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
      BAL: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
      CRV: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
      DPI: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
      SUSHI: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
      EURS: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
      JEUR: "0x9A676e781A523b5d0C0e43731313A708CB607508",
      AGEUR: "0x0B306BF915C4d645ff596e518fAf3F9669b97016"
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
      AAVE: "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
      DAI: "0x9E545E3C0baAB3E08CdfD552C960A1050f373042",
      LINK: "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9",
      USDC: "0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8",
      WBTC: "0x851356ae760d987E095750cCeb3bC6014560891C",
      WETH: "0xf5059a5D33d5853360D16C683c16e67980206f36",
      USDT: "0x95401dc811bb5740090279Ba06cfA8fcF6113778",
      WMATIC: "0x998abeb3E57409262aE5b751f60747921B33613E",
      GHST: "0x70e0bA845a1A0F2DA3359C97E0285013525FFC49",
      BAL: "0x4826533B4897376654Bb4d4AD88B7faFD0C98528",
      CRV: "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
      DPI: "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
      SUSHI: "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf",
      // Using EUR / USD price feeds, not dedicated per EUR pegged tokens
      EURS: "0x9d4454B023096f34B160D6B654540c56A1F81688",
      JEUR: "0x9d4454B023096f34B160D6B654540c56A1F81688",
      AGEUR: "0x9d4454B023096f34B160D6B654540c56A1F81688"
    },
  },
};

export default LearningMarket;
