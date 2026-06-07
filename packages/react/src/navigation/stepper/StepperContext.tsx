import { createContext, useContext } from "react";
import type { ZedSize } from "../../shared/types";

export type StepperStepStatus = "active" | "complete" | "disabled" | "error" | "incomplete";

export type StepperContextValue = {
  activeStep: number;
  alternativeLabel: boolean;
  nonLinear: boolean;
  orientation: "horizontal" | "vertical";
  size: ZedSize;
};

export type StepContextValue = {
  completed?: boolean;
  disabled?: boolean;
  error?: boolean;
  expanded?: boolean;
  index: number;
  isLast: boolean;
  status: StepperStepStatus;
};

const StepperContext = createContext<StepperContextValue | null>(null);
const StepContext = createContext<StepContextValue | null>(null);

export function useStepperContext(component: string) {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error(`${component} must be used within Stepper.`);
  }
  return context;
}

export function useStepContext(component: string) {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error(`${component} must be used within Stepper.Step.`);
  }
  return context;
}

export function resolveStepStatus({
  activeStep,
  completed,
  disabled,
  error,
  index,
  nonLinear
}: {
  activeStep: number;
  completed?: boolean;
  disabled?: boolean;
  error?: boolean;
  index: number;
  nonLinear: boolean;
}): StepperStepStatus {
  if (disabled) return "disabled";
  if (error) return "error";
  if (completed === true) return "complete";
  if (completed === false) return index === activeStep ? "active" : "incomplete";
  if (index < activeStep) return "complete";
  if (index === activeStep) return "active";
  if (!nonLinear && index > activeStep) return "disabled";
  return "incomplete";
}

export function isConnectorActive({
  activeStep,
  completed,
  index
}: {
  activeStep: number;
  completed?: boolean;
  index: number;
}): boolean {
  if (completed === false) return false;
  if (completed === true) return true;
  return index < activeStep;
}

export { StepperContext, StepContext };
