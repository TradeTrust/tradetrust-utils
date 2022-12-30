import { networkName, networkType, networkCurrency } from "./network";

export enum CHAIN_ID {
  local = "1337",
  mainnet = "1",
  matic = "137",
  maticmum = "80001",
  goerli = "5",
  sepolia = "11155111",
}

export type chainInfo = {
  label: string;
  name: networkName;
  type: networkType;
  currency: networkCurrency;
};

type supportedChains = Record<CHAIN_ID, chainInfo>;

export const SUPPORTED_CHAINS: supportedChains = {
  [CHAIN_ID.local]: {
    label: "Local",
    name: "local",
    type: "development",
    currency: "ETH",
  },
  [CHAIN_ID.mainnet]: {
    label: "Mainnet",
    name: "mainnet",
    type: "production",
    currency: "ETH",
  },
  [CHAIN_ID.matic]: {
    label: "Polygon",
    name: "matic",
    type: "production",
    currency: "MATIC",
  },
  [CHAIN_ID.maticmum]: {
    label: "Polygon Mumbai",
    name: "maticmum",
    type: "test",
    currency: "MATIC",
  },
  [CHAIN_ID.goerli]: {
    label: "Goerli",
    name: "goerli",
    type: "test",
    currency: "ETH",
  },
  [CHAIN_ID.sepolia]: {
    label: "Sepolia",
    name: "sepolia",
    type: "test",
    currency: "ETH",
  },
};
