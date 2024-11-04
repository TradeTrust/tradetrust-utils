import { networkName, networkType, networkCurrency } from "./network";
import { iconEthereum, iconHedera, iconPolygon, iconStability, iconXDC, iconAstron } from "../static/icons";
import "dotenv/config";

export enum CHAIN_ID {
  local = "1337",
  mainnet = "1",
  matic = "137",
  amoy = "80002",
  sepolia = "11155111",
  xdc = "50",
  xdcapothem = "51",
  hederatestnet = "296",
  hederamainnet = "295",
  stabilitytestnet = "20180427",
  stability = "101010",
  astron = "1338",
}

export type chainInfo = {
  id: CHAIN_ID;
  label: string;
  name: networkName;
  type: networkType;
  currency: networkCurrency;
  iconImage: string;
  explorerUrl: string;
  explorerApiUrl?: string;
  rpcUrl?: string;
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
};

type supportedChains = Record<CHAIN_ID, chainInfo>;

export const SUPPORTED_CHAINS: supportedChains = {
  [CHAIN_ID.local]: {
    id: CHAIN_ID.local,
    label: "Local",
    name: "local",
    type: "development",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://localhost/explorer",
    rpcUrl: "http://localhost:8545",
  },
  [CHAIN_ID.mainnet]: {
    id: CHAIN_ID.mainnet,
    label: "Mainnet",
    name: "mainnet",
    type: "production",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://etherscan.io",
    explorerApiUrl: "https://api.etherscan.io",
  },
  [CHAIN_ID.matic]: {
    id: CHAIN_ID.matic,
    label: "Polygon",
    name: "matic",
    type: "production",
    currency: "MATIC",
    iconImage: iconPolygon,
    explorerUrl: "https://polygonscan.com",
    rpcUrl: "https://polygon-rpc.com",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
  },
  [CHAIN_ID.amoy]: {
    id: CHAIN_ID.amoy,
    label: "Polygon Amoy",
    name: "amoy",
    type: "test",
    currency: "MATIC",
    iconImage: iconPolygon,
    explorerUrl: "https://www.oklink.com/amoy",
    explorerApiUrl: `https://www.oklink.com/${process.env.OKLINK_API_KEY}`,
    rpcUrl: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_API_KEY}`,
    nativeCurrency: {
      name: "MATIC",
      symbol: "aMATIC",
      decimals: 18,
    },
  },
  [CHAIN_ID.sepolia]: {
    id: CHAIN_ID.sepolia,
    label: "Sepolia",
    name: "sepolia",
    type: "test",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://rpc.sepolia.org",
    nativeCurrency: {
      name: "ETH",
      symbol: "sepETH",
      decimals: 18,
    },
  },
  [CHAIN_ID.xdc]: {
    id: CHAIN_ID.xdc,
    label: "XDC Network",
    name: "xdc",
    type: "production",
    currency: "XDC",
    iconImage: iconXDC,
    explorerUrl: "https://xdcscan.io",
    rpcUrl: "https://tradetrustrpc.xdcrpc.com",
    nativeCurrency: {
      name: "XDC",
      symbol: "XDC",
      decimals: 18,
    },
  },
  [CHAIN_ID.xdcapothem]: {
    id: CHAIN_ID.xdcapothem,
    label: "Apothem Network",
    name: "xdcapothem",
    type: "test",
    currency: "XDC",
    iconImage: iconXDC,
    explorerUrl: "https://apothem.xdcscan.io",
    rpcUrl: "https://tradetrustarpc.xdcrpc.com",
    nativeCurrency: {
      name: "XDC",
      symbol: "XDC",
      decimals: 18,
    },
  },
  [CHAIN_ID.hederatestnet]: {
    id: CHAIN_ID.hederatestnet,
    label: "Hedera Testnet Network",
    name: "hederatestnet",
    type: "test",
    currency: "HBAR",
    iconImage: iconHedera,
    explorerUrl: "https://hashscan.io/testnet",
    rpcUrl: "https://testnet.hashio.io/api",
    nativeCurrency: {
      name: "HBAR",
      symbol: "HBAR",
      decimals: 18,
    },
  },
  [CHAIN_ID.hederamainnet]: {
    id: CHAIN_ID.hederamainnet,
    label: "Hedera MainNet Network",
    name: "hederamainnet",
    type: "production",
    currency: "HBAR",
    iconImage: iconHedera,
    explorerUrl: "https://hashscan.io/mainnet",
    rpcUrl: "https://mainnet.hashio.io/api",
    nativeCurrency: {
      name: "HBAR",
      symbol: "HBAR",
      decimals: 18,
    },
  },
  [CHAIN_ID.stabilitytestnet]: {
    id: CHAIN_ID.stabilitytestnet,
    label: "Stability Testnet Network",
    name: "stabilitytestnet",
    type: "test",
    currency: "FREE",
    iconImage: iconStability,
    explorerUrl: "https://stability-testnet.blockscout.com/",
    rpcUrl: "https://free.testnet.stabilityprotocol.com",
    nativeCurrency: {
      name: "FREE",
      symbol: "FREE",
      decimals: 18,
    },
  },
  [CHAIN_ID.stability]: {
    id: CHAIN_ID.stability,
    label: "Stability Network",
    name: "stability",
    type: "production",
    currency: "FREE",
    iconImage: iconStability,
    explorerUrl: "https://stability.blockscout.com/",
    rpcUrl: `https://gtn.stabilityprotocol.com/?api_key=${process.env.STABILITY_API_KEY}`,
    nativeCurrency: {
      name: "FREE",
      symbol: "FREE",
      decimals: 18,
    },
  },
  [CHAIN_ID.astron]: {
    id: CHAIN_ID.astron,
    label: "Astron Network",
    name: "astron",
    type: "production",
    currency: "ASTRON",
    iconImage: iconAstron,
    explorerUrl: "http://astronscanl2.bitfactory.cn/",
    rpcUrl: `http://astronlayer2.bitfactory.cn:8545/`,
    nativeCurrency: {
      name: "ASTRON",
      symbol: "ASTRON",
      decimals: 18,
    },
  },
};
