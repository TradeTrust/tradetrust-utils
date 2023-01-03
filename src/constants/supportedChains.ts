import { networkName, networkType, networkCurrency } from "./network";
import { iconEthereum, iconPolygon } from "../static/icons";

export enum CHAIN_ID {
  local = "1337",
  mainnet = "1",
  matic = "137",
  maticmum = "80001",
  goerli = "5",
  sepolia = "11155111",
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
  [CHAIN_ID.goerli]: {
    id: CHAIN_ID.goerli,
    label: "Goerli",
    name: "goerli",
    type: "test",
    currency: "ETH",
    iconImage: iconEthereum,
    explorerUrl: "https://goerli.etherscan.io",
    explorerApiUrl: "https://api-goerli.etherscan.io",
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
};
