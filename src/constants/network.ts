export const networks = ["local", "mainnet", "matic", "maticmum", "goerli", "sepolia"] as const;

export type networkName = (typeof networks)[number];

export type networkType = "production" | "test" | "development";

export type networkCurrency = "ETH" | "MATIC";
