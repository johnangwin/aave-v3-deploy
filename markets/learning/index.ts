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
      AAVE: "0xB06c856C8eaBd1d8321b687E188204C1018BC4E5",
      BAL: "0xaB7B4c595d3cE8C85e16DA86630f2fc223B05057",
      CRV: "0x045857BDEAE7C1c7252d611eB24eB55564198b4C",
      DAI: "0x2b5A4e5493d4a54E717057B127cf0C000C876f9B",
      DPI: "0x413b1AfCa96a3df5A686d8BFBF93d30688a7f7D9",
      GHST: "0x1780bCf4103D3F501463AD3414c7f4b654bb7aFd",
      LINK: "0x5133BBdfCCa3Eb4F739D599ee4eC45cBCD0E16c5",
      SUSHI: "0x8F4ec854Dd12F1fe79500a1f53D0cbB30f9b6134",
      USDC: "0xC66AB83418C20A65C3f8e83B3d11c8C3a6097b6F",
      USDT: "0xeF31027350Be2c7439C1b0BE022d49421488b72C",
      WBTC: "0xAD523115cd35a8d4E60B3C0953E0E0ac10418309",
      WETH: "0x02df3a3F960393F5B349E40A599FEda91a7cc1A7",
      WMATIC: "0x71089Ba41e478702e1904692385Be3972B2cBf9e",

      // Using EUR / USD price feeds, not dedicated per EUR pegged tokens
      EURS: "0x821f3361D454cc98b7555221A06Be563a7E2E0A6",
      JEUR: "0x821f3361D454cc98b7555221A06Be563a7E2E0A6",
      AGEUR: "0x821f3361D454cc98b7555221A06Be563a7E2E0A6"
    },
  },
};

export default LearningMarket;
