import { validateGtag, validatePageViewEvent, validateGaEvent, gaPageView, gaEvent } from "./analytics";

const consoleError = jest.spyOn(console, "error");
const consoleWarn = jest.spyOn(console, "warn");
const GA_MEASUREMENT_ID = "G-123456789";
const mockGaEvent = {
  action: "TEST_ACTION",
  category: "TEST_CATEGORY",
  label: "TEST_LABEL",
  value: 2,
};

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  jest.spyOn(console, "error").mockImplementation(() => {});
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("validateGtag", () => {
  it("warns if gtag is not initialised", () => {
    validateGtag();
    expect(consoleWarn).toHaveBeenCalledTimes(1);
    expect(consoleWarn).toHaveBeenCalledWith("gtag is not initialised");
  });
});

describe("validateGaPageView", () => {
  it("errors if action is missing", () => {
    // @ts-expect-error we expect this error to be thrown
    validatePageViewEvent({});
    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith("Action is required");
  });
});

describe("gaPageView", () => {
  beforeEach(() => {
    window.gtag = jest.fn();
  });

  afterEach(() => {
    // @ts-expect-error the mock does not match the signature
    window.gtag = undefined;
  });

  it("sends and log gtag page view if window.gtag is present", () => {
    gaPageView(
      {
        action: "TEST_ACTION",
      } as any,
      GA_MEASUREMENT_ID
    );
    expect(window.gtag).toHaveBeenCalledTimes(1);
    expect(window.gtag).toHaveBeenCalledWith("event", "TEST_ACTION", {
      send_to: GA_MEASUREMENT_ID,
    });
  });

  it("errors if there is a validation error", () => {
    const mockGaEventError = { action: 123 };
    // @ts-expect-error the mock does not match the signature
    gaPageView(mockGaEventError);
    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith("Action must be a string");
  });
});

describe("validateGaEvent", () => {
  it("errors if category is missing", () => {
    // @ts-expect-error we expect this error to be thrown
    validateGaEvent({
      action: "foobar_start",
    });
    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith("Category is required");
  });

  it("errors if action is missing", () => {
    // @ts-expect-error we expect this error to be thrown
    validateGaEvent({
      category: "foobar",
    });
    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith("Action is required");
  });

  it("errors if value is not number", () => {
    // @ts-expect-error we expect this error to be thrown
    validateGaEvent({ category: "foobar", action: "foobar_start", value: "STRING" });
    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith("Value must be a number");
  });

  it("passes for minimum values", () => {
    validateGaEvent({
      category: "foobar",
      action: "foobar_start",
      label: undefined,
      value: undefined,
    });
    expect(true).toBe(true);
  });

  it("passes for all values", () => {
    validateGaEvent({
      category: "foobar",
      action: "foobar_start",
      label: "Start Foobar",
      value: 2,
    });
    expect(true).toBe(true);
  });
});

describe("gaEvent", () => {
  beforeEach(() => {
    window.gtag = jest.fn();
  });

  afterEach(() => {
    // @ts-expect-error the mock does not match the signature
    window.gtag = undefined;
  });

  it("does not fail if gtag is not present", () => {
    gaEvent(mockGaEvent as any);
    expect(true).toBe(true);
  });

  it("sends and log gtag event if window.gtag is present", () => {
    gaEvent(mockGaEvent);
    expect(window.gtag).toHaveBeenCalledTimes(1);
    expect(window.gtag).toHaveBeenCalledWith("event", "TEST_ACTION", {
      event_category: "TEST_CATEGORY",
      event_label: "TEST_LABEL",
      value: 2,
    });
  });

  it("throws if there is a validation error", () => {
    const mockGaEventError = { ...mockGaEvent, value: "STRING" };
    // @ts-expect-error the mock does not match the signature
    gaEvent(mockGaEventError);
    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError).toHaveBeenCalledWith("Value must be a number");
  });
});
