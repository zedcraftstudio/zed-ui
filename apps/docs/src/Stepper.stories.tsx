import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Stack, Stepper, Text } from "@zed-ui/react";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  args: {
    activeStep: 1,
    size: "md"
  }
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = ["Select campaign settings", "Create an ad group", "Create an ad"];

export const Horizontal: Story = {
  render: (args) => (
    <Stepper {...args} style={{ maxWidth: "40rem" }}>
      {steps.map((label) => (
        <Stepper.Step key={label}>
          <Stepper.StepLabel>{label}</Stepper.StepLabel>
        </Stepper.Step>
      ))}
    </Stepper>
  )
};

export const AlternativeLabel: Story = {
  render: () => (
    <Stepper activeStep={1} alternativeLabel style={{ maxWidth: "40rem" }}>
      {steps.map((label) => (
        <Stepper.Step key={label}>
          <Stepper.StepLabel>{label}</Stepper.StepLabel>
        </Stepper.Step>
      ))}
    </Stepper>
  )
};

export const OptionalAndError: Story = {
  render: () => (
    <Stepper activeStep={1} style={{ maxWidth: "40rem" }}>
      <Stepper.Step>
        <Stepper.StepLabel optional="Optional">Select campaign settings</Stepper.StepLabel>
      </Stepper.Step>
      <Stepper.Step>
        <Stepper.StepLabel description="Alert message" error>
          Create an ad group
        </Stepper.StepLabel>
      </Stepper.Step>
      <Stepper.Step>
        <Stepper.StepLabel>Create an ad</Stepper.StepLabel>
      </Stepper.Step>
    </Stepper>
  )
};

export const Vertical: Story = {
  render: () => (
    <Stepper activeStep={1} orientation="vertical" style={{ maxWidth: "28rem" }}>
      <Stepper.Step>
        <Stepper.StepLabel>Select campaign settings</Stepper.StepLabel>
        <Stepper.StepContent>
          <Text color="secondary">For each ad campaign that you create, you can control spend and targeting.</Text>
        </Stepper.StepContent>
      </Stepper.Step>
      <Stepper.Step>
        <Stepper.StepLabel>Create an ad group</Stepper.StepLabel>
        <Stepper.StepContent>
          <Text color="secondary">An ad group contains one or more ads which target a shared set of keywords.</Text>
        </Stepper.StepContent>
      </Stepper.Step>
      <Stepper.Step>
        <Stepper.StepLabel>Create an ad</Stepper.StepLabel>
      </Stepper.Step>
    </Stepper>
  )
};

export const NonLinear: Story = {
  render: function NonLinearStory() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState<Record<number, boolean>>({});

    return (
      <Stack gap="3" style={{ maxWidth: "40rem" }}>
        <Stepper activeStep={activeStep} nonLinear>
          {steps.map((label, index) => (
            <Stepper.Step
              key={label}
              {...(index in completed ? { completed: completed[index] } : {})}
            >
              <Stepper.StepButton onClick={() => setActiveStep(index)}>
                <Stepper.StepLabel>{label}</Stepper.StepLabel>
              </Stepper.StepButton>
            </Stepper.Step>
          ))}
        </Stepper>
        <Button
          size="sm"
          onClick={() => {
            setCompleted((current) => ({ ...current, [activeStep]: true }));
            setActiveStep((step) => Math.min(step + 1, steps.length - 1));
          }}
        >
          Complete step
        </Button>
      </Stack>
    );
  }
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [activeStep, setActiveStep] = useState(0);
    return (
      <Stack gap="3" style={{ maxWidth: "40rem" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Stepper.Step key={label}>
              <Stepper.StepLabel>{label}</Stepper.StepLabel>
            </Stepper.Step>
          ))}
        </Stepper>
        <Button size="sm" onClick={() => setActiveStep((step) => Math.min(step + 1, steps.length - 1))}>
          Next
        </Button>
      </Stack>
    );
  }
};
