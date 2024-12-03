export const networks = [
  "local",
  "mainnet",
  "matic",
  "maticmum",
  "amoy",
  "sepolia",
  "xdc",
  "xdcapothem",
  "stabilitytestnet",
  "stability",
  "astron",
] as const;

export type networkName = (typeof networks)[number];

export type networkType = "production" | "test" | "development";

export type networkCurrency = "ETH" | "MATIC" | "XDC" | "FREE" | "ASTRON";
