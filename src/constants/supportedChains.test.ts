import { CHAIN_ID, SUPPORTED_CHAINS } from "./supportedChains";

describe("supportedChains", () => {
  it("should local chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.local];

    expect(id).toBe(CHAIN_ID.local);
    expect(name).toBe("local");
    expect(type).toBe("development");
    expect(currency).toBe("ETH");
    expect(explorerUrl).toBe("https://localhost/explorer");
  });

  it("should mainnet chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.mainnet];

    expect(id).toBe(CHAIN_ID.mainnet);
    expect(name).toBe("mainnet");
    expect(type).toBe("production");
    expect(currency).toBe("ETH");
    expect(explorerUrl).toBe("https://etherscan.io");
  });

  it("should matic chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.matic];

    expect(id).toBe(CHAIN_ID.matic);
    expect(name).toBe("matic");
    expect(type).toBe("production");
    expect(currency).toBe("MATIC");
    expect(explorerUrl).toBe("https://polygonscan.com");
  });

  it("should maticmum chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.maticmum];

    expect(id).toBe(CHAIN_ID.maticmum);
    expect(name).toBe("maticmum");
    expect(type).toBe("test");
    expect(currency).toBe("MATIC");
    expect(explorerUrl).toBe("https://mumbai.polygonscan.com");
  });

  it("should sepolia chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.sepolia];

    expect(id).toBe(CHAIN_ID.sepolia);
    expect(name).toBe("sepolia");
    expect(type).toBe("test");
    expect(currency).toBe("ETH");
    expect(explorerUrl).toBe("https://sepolia.etherscan.io");
  });
  it("should xdcnetwork chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.xdc];

    expect(id).toBe(CHAIN_ID.xdc);
    expect(name).toBe("xdc");
    expect(type).toBe("production");
    expect(currency).toBe("XDC");
    expect(explorerUrl).toBe("https://xdcscan.io");
  });
  it("should xdcapothem chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.xdcapothem];

    expect(id).toBe(CHAIN_ID.xdcapothem);
    expect(name).toBe("xdcapothem");
    expect(type).toBe("test");
    expect(currency).toBe("XDC");
    expect(explorerUrl).toBe("https://apothem.xdcscan.io");
  });
  it("should hederatestnet chain info correctly", () => {
    const { id, name, type, currency, explorerUrl } = SUPPORTED_CHAINS[CHAIN_ID.hederatestnet];

    expect(id).toBe(CHAIN_ID.hederatestnet);
    expect(name).toBe("hederatestnet");
    expect(type).toBe("test");
    expect(currency).toBe("HBAR");
    expect(explorerUrl).toBe("https://hashscan.io/testnet");
  });
});