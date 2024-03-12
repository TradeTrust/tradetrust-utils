import { networkName, networkType, networkCurrency } from "./network";
import { iconEthereum, iconHedera, iconPolygon, iconStability, iconXDC } from "../static/icons";
import "dotenv/config";

export enum CHAIN_ID {
  local = "1337",
  mainnet = "1",
  matic = "137",
  maticmum = "80001",
  amoy = "80002",
  sepolia = "11155111",
  xdc = "50",
  xdcapothem = "51",
  hederatestnet = "296",
  hederamainnet = "295",
  stabilitytestnet = "20180427",
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
  [CHAIN_ID.maticmum]: {
    id: CHAIN_ID.maticmum,
    label: "Polygon Mumbai",
    name: "maticmum",
    type: "test",
    currency: "MATIC",
    iconImage: iconPolygon,
    explorerUrl: "https://mumbai.polygonscan.com",
    explorerApiUrl: "https://api-testnet.polygonscan.com",
    rpcUrl: "https://rpc-mumbai.matic.today",
    nativeCurrency: {
      name: "MATIC",
      symbol: "mMATIC",
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
    rpcUrl: "https://rpc-amoy.polygon.technology/",
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
    rpcUrl: "https://rpc.ankr.com/xdc",
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
    rpcUrl: "https://rpc.ankr.com/xdc_testnet",
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
};
