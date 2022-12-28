export enum CHAIN_ID {
  LOCAL = "1337",
  MAINNET = "1",
  MATIC = "137",
  MATICMUM = "80001",
  GOERLI = "5",
  SEPOLIA = "11155111",
}

export type NETWORK_NAME = "local" | "mainnet" | "matic" | "maticmum" | "goerli" | "sepolia";

type NETWORK_TYPE = "production" | "test" | "development";

type NETWORK_CURRENCY = "ETH" | "MATIC";

export type chainInfo = {
  label: string;
  name: NETWORK_NAME;
  type: NETWORK_TYPE;
  currency: NETWORK_CURRENCY;
};

type supportedNetworks = Record<CHAIN_ID, chainInfo>;

export const SUPPORTED_NETWORKS: supportedNetworks = {
  [CHAIN_ID.LOCAL]: {
    label: "Local",
    name: "local",
    type: "development",
    currency: "ETH",
  },
  [CHAIN_ID.MAINNET]: {
    label: "Mainnet",
    name: "mainnet",
    type: "production",
    currency: "ETH",
  },
  [CHAIN_ID.MATIC]: {
    label: "Polygon",
    name: "matic",
    type: "production",
    currency: "MATIC",
  },
  [CHAIN_ID.MATICMUM]: {
    label: "Polygon Mumbai",
    name: "maticmum",
    type: "test",
    currency: "MATIC",
  },
  [CHAIN_ID.GOERLI]: {
    label: "Goerli",
    name: "goerli",
    type: "test",
    currency: "ETH",
  },
  [CHAIN_ID.SEPOLIA]: {
    label: "Sepolia",
    name: "sepolia",
    type: "test",
    currency: "ETH",
  },
};
