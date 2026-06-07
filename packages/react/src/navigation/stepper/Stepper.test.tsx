import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Stepper, StepperStep } from "./Stepper";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Stepper", () => {
  it("supports uncontrolled defaultActiveStep", () => {
    const { getByText } = renderWithProvider(
      <Stepper defaultActiveStep={1}>
        <StepperStep>
          <Stepper.StepLabel>One</Stepper.StepLabel>
        </StepperStep>
        <StepperStep>
          <Stepper.StepLabel>Two</Stepper.StepLabel>
        </StepperStep>
      </Stepper>
    );
    expect(getByText("Two").closest(".zui-stepper__step")?.getAttribute("data-status")).toBe("active");
  });

  it("renders MUI-style steps", () => {
    const { getByText } = renderWithProvider(
      <Stepper activeStep={1}>
        <Stepper.Step>
          <Stepper.StepLabel>Account</Stepper.StepLabel>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.StepLabel>Profile</Stepper.StepLabel>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.StepLabel>Done</Stepper.StepLabel>
        </Stepper.Step>
      </Stepper>
    );

    expect(getByText("Account")).toBeTruthy();
    expect(getByText("Profile")).toBeTruthy();
  });

  it("marks the active step", () => {
    const { container } = renderWithProvider(
      <Stepper activeStep={1}>
        <StepperStep title="Account" />
        <StepperStep title="Profile" />
        <StepperStep title="Done" />
      </Stepper>
    );

    const active = container.querySelector('[aria-current="step"]');
    expect(active?.textContent).toContain("Profile");
  });

  it("renders a check icon for completed steps", () => {
    const { container } = renderWithProvider(
      <Stepper activeStep={2}>
        <StepperStep title="Account" />
        <StepperStep title="Profile" />
        <StepperStep title="Done" />
      </Stepper>
    );

    const completeSteps = container.querySelectorAll('.zui-stepper__step[data-status="complete"]');
    expect(completeSteps.length).toBe(2);
    expect(completeSteps[0]?.querySelector(".zui-stepper__check")).toBeTruthy();
  });

  it("renders horizontal connectors between steps", () => {
    const { container } = renderWithProvider(
      <Stepper activeStep={1}>
        <StepperStep title="One" />
        <StepperStep title="Two" />
        <StepperStep title="Three" />
      </Stepper>
    );

    expect(container.querySelectorAll(".zui-stepper__connector-item").length).toBe(2);
  });

  it("supports alternative labels", () => {
    const { container } = renderWithProvider(
      <Stepper activeStep={0} alternativeLabel>
        <StepperStep title="One" />
        <StepperStep title="Two" />
      </Stepper>
    );

    expect(container.querySelector('[data-alternative-label="true"]')).toBeTruthy();
  });

  it("renders optional and error labels", () => {
    const { getByText, container } = renderWithProvider(
      <Stepper activeStep={1}>
        <Stepper.Step>
          <Stepper.StepLabel optional="Optional">Campaign settings</Stepper.StepLabel>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.StepLabel description="Alert message" error>
            Ad group
          </Stepper.StepLabel>
        </Stepper.Step>
      </Stepper>
    );

    expect(getByText("Optional")).toBeTruthy();
    expect(getByText("Alert message")).toBeTruthy();
    expect(container.querySelector('.zui-stepper__step[data-status="error"]')).toBeTruthy();
  });

  it("shows vertical step content for the active step", () => {
    const { getByText, queryByText } = renderWithProvider(
      <Stepper activeStep={1} orientation="vertical">
        <Stepper.Step>
          <Stepper.StepLabel>Settings</Stepper.StepLabel>
          <Stepper.StepContent>Step one body</Stepper.StepContent>
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.StepLabel>Review</Stepper.StepLabel>
          <Stepper.StepContent>Step two body</Stepper.StepContent>
        </Stepper.Step>
      </Stepper>
    );

    expect(queryByText("Step one body")).toBeNull();
    expect(getByText("Step two body")).toBeTruthy();
  });

  it("keeps the convenience StepperStep API", () => {
    const { getByText } = renderWithProvider(
      <Stepper activeStep={0}>
        <StepperStep description="Details" title="Step 1" />
        <StepperStep title="Step 2" />
      </Stepper>
    );

    expect(getByText("Step 1")).toBeTruthy();
    expect(getByText("Details")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <Stepper activeStep={0}>
        <StepperStep description="Details" title="Step 1" />
        <StepperStep title="Step 2" />
      </Stepper>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
