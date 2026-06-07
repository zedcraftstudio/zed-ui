import { describe, expect, it } from "vitest";
import { isConnectorActive, resolveStepStatus } from "./StepperContext";

describe("resolveStepStatus", () => {
  it("returns disabled when step is disabled", () => {
    expect(resolveStepStatus({ activeStep: 0, disabled: true, index: 0, nonLinear: false })).toBe(
      "disabled"
    );
  });

  it("returns error when step has error", () => {
    expect(resolveStepStatus({ activeStep: 0, error: true, index: 0, nonLinear: false })).toBe(
      "error"
    );
  });

  it("returns complete when completed is true", () => {
    expect(resolveStepStatus({ activeStep: 0, completed: true, index: 1, nonLinear: false })).toBe(
      "complete"
    );
  });

  it("returns active for explicit incomplete completed false on active index", () => {
    expect(resolveStepStatus({ activeStep: 1, completed: false, index: 1, nonLinear: false })).toBe(
      "active"
    );
  });

  it("returns incomplete for explicit completed false on other indices", () => {
    expect(resolveStepStatus({ activeStep: 1, completed: false, index: 0, nonLinear: false })).toBe(
      "incomplete"
    );
  });

  it("marks prior steps complete in linear mode", () => {
    expect(resolveStepStatus({ activeStep: 2, index: 0, nonLinear: false })).toBe("complete");
  });

  it("disables future steps in linear mode", () => {
    expect(resolveStepStatus({ activeStep: 1, index: 3, nonLinear: false })).toBe("disabled");
  });

  it("allows future steps in non-linear mode", () => {
    expect(resolveStepStatus({ activeStep: 1, index: 3, nonLinear: true })).toBe("incomplete");
  });
});

describe("isConnectorActive", () => {
  it("is inactive when previous step completed is false", () => {
    expect(isConnectorActive({ activeStep: 2, completed: false, index: 0 })).toBe(false);
  });

  it("is active when previous step completed is true", () => {
    expect(isConnectorActive({ activeStep: 1, completed: true, index: 0 })).toBe(true);
  });

  it("is active when index is before active step", () => {
    expect(isConnectorActive({ activeStep: 2, index: 0 })).toBe(true);
  });
});
