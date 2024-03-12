export const networks = [
  "local",
  "mainnet",
  "matic",
  "maticmum",
  "amoy",
  "sepolia",
  "xdc",
  "xdcapothem",
  "hederatestnet",
  "hederamainnet",
  "stabilitytestnet",
  "stability",
] as const;

export type networkName = (typeof networks)[number];

export type networkType = "production" | "test" | "development";

export type networkCurrency = "ETH" | "MATIC" | "XDC" | "HBAR" | "FREE";
