import {
  Children,
  cloneElement,
  forwardRef,
  Fragment,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode
} from "react";
import { useControllableState } from "@zed-ui/hooks";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import {
  isConnectorActive,
  resolveStepStatus,
  StepContext,
  StepperContext,
  useStepContext,
  useStepperContext,
  type StepperStepStatus
} from "./StepperContext";

export type { StepperStepStatus };

export type StepperOwnProps = Omit<ComponentPropsWithoutRef<"nav">, "children"> & {
  activeStep?: number;
  defaultActiveStep?: number;
  onActiveStepChange?: (step: number) => void;
  alternativeLabel?: boolean;
  children?: ReactNode;
  nonLinear?: boolean;
  orientation?: "horizontal" | "vertical";
  size?: ZedSize;
};

export type StepOwnProps = Omit<ComponentPropsWithoutRef<"li">, "children"> & {
  children?: ReactNode;
  completed?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  index?: number;
  isLast?: boolean;
};

export type StepLabelOwnProps = ComponentPropsWithoutRef<"div"> & {
  children?: ReactNode;
  description?: ReactNode;
  error?: boolean;
  icon?: ReactNode;
  optional?: ReactNode;
};

export type StepButtonOwnProps = ComponentPropsWithoutRef<"button"> & {
  children?: ReactNode;
};

export type StepContentOwnProps = ComponentPropsWithoutRef<"div">;

export type StepIconOwnProps = ComponentPropsWithoutRef<"span"> & {
  icon?: ReactNode;
};

function StepperCheckIcon() {
  return (
    <svg aria-hidden className="zui-stepper__check" fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function StepperErrorIcon() {
  return (
    <svg aria-hidden className="zui-stepper__error-icon" fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M8 4.5v4.25M8 11.25h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

export const StepIcon = forwardRef<HTMLSpanElement, StepIconOwnProps>(function StepIcon(
  { className, icon, ...rest },
  ref
) {
  const { index, status } = useStepContext("Stepper.StepIcon");

  return (
    <span ref={ref} className={cx("zui-stepper__icon", className)} data-status={status} {...rest}>
      {icon ? (
        <span className="zui-stepper__icon-custom">{icon}</span>
      ) : status === "complete" ? (
        <StepperCheckIcon />
      ) : status === "error" ? (
        <StepperErrorIcon />
      ) : (
        <span className="zui-stepper__icon-label">{index + 1}</span>
      )}
    </span>
  );
});

StepIcon.displayName = "Stepper.StepIcon";

export const StepLabel = forwardRef<HTMLDivElement, StepLabelOwnProps>(function StepLabel(
  { children, className, description, error = false, icon, optional, ...rest },
  ref
) {
  const { status } = useStepContext("Stepper.StepLabel");

  return (
    <div
      ref={ref}
      className={cx("zui-stepper__label", className)}
      data-error={dataAttr(error)}
      data-status={status}
      {...rest}
    >
      <StepIcon icon={icon} />
      <div className="zui-stepper__label-text">
        {children ? <span className="zui-stepper__title">{children}</span> : null}
        {optional ? <span className="zui-stepper__optional">{optional}</span> : null}
        {description ? <span className="zui-stepper__description">{description}</span> : null}
      </div>
    </div>
  );
});

StepLabel.displayName = "Stepper.StepLabel";

export const StepButton = forwardRef<HTMLButtonElement, StepButtonOwnProps>(function StepButton(
  { children, className, disabled, type = "button", ...rest },
  ref
) {
  const { nonLinear } = useStepperContext("Stepper.StepButton");
  const { status } = useStepContext("Stepper.StepButton");
  const isDisabled = disabled ?? status === "disabled";

  return (
    <button
      ref={ref}
      className={cx("zui-stepper__button", className)}
      data-non-linear={dataAttr(nonLinear)}
      disabled={isDisabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
});

StepButton.displayName = "Stepper.StepButton";

export const StepContent = forwardRef<HTMLDivElement, StepContentOwnProps>(function StepContent(
  { className, ...rest },
  ref
) {
  const { activeStep, orientation } = useStepperContext("Stepper.StepContent");
  const { expanded, index } = useStepContext("Stepper.StepContent");
  const isOpen = expanded ?? (orientation === "vertical" && index === activeStep);

  if (!isOpen) {
    return null;
  }

  return <div ref={ref} className={cx("zui-stepper__content", className)} {...rest} />;
});

StepContent.displayName = "Stepper.StepContent";

export const Step = forwardRef<HTMLLIElement, StepOwnProps>(function Step(
  { children, className, completed: _completed, disabled: _disabled, expanded: _expanded, index: _index, isLast: _isLast, ...rest },
  ref
) {
  const { status } = useStepContext("Stepper.Step");

  return (
    <li
      ref={ref}
      aria-current={status === "active" ? "step" : undefined}
      aria-disabled={status === "disabled" ? true : undefined}
      className={cx("zui-stepper__step", className)}
      data-status={status}
      {...rest}
    >
      {children}
    </li>
  );
});

Step.displayName = "Stepper.Step";

function StepConnectorItem({ active }: { active: boolean }) {
  return (
    <li aria-hidden className="zui-stepper__connector-item">
      <span className="zui-stepper__connector" data-active={dataAttr(active)} />
    </li>
  );
}

const StepperRoot = forwardRef<HTMLOListElement, StepperOwnProps>(function Stepper(
  {
    activeStep: activeStepProp,
    defaultActiveStep = 0,
    onActiveStepChange,
    alternativeLabel = false,
    "aria-label": ariaLabel = "Progress",
    children,
    className,
    nonLinear = false,
    orientation = "horizontal",
    size: sizeProp,
    ...rest
  },
  ref
) {
  const [activeStepState] = useControllableState({
    value: activeStepProp,
    defaultValue: defaultActiveStep,
    onChange: onActiveStepChange
  });
  const activeStep = activeStepState ?? defaultActiveStep;
  const defaults = useComponentDefaults("Stepper");
  const size = (sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md") as ZedSize;
  const steps = Children.toArray(children).filter(isValidElement) as ReactElement<StepOwnProps>[];

  return (
    <StepperContext.Provider
      value={{ activeStep, alternativeLabel, nonLinear, orientation, size }}
    >
      <nav
        aria-label={ariaLabel}
        className={cx("zui-stepper", className)}
        data-alternative-label={dataAttr(alternativeLabel)}
        data-orientation={orientation}
        data-size={size}
        {...rest}
      >
        <ol ref={ref} className="zui-stepper__list">
          {steps.map((child, index) => {
            const stepProps = child.props;
            const error = hasStepLabelError(child);
            const status = resolveStepStatus({
              activeStep,
              completed: stepProps.completed,
              disabled: stepProps.disabled,
              error,
              index,
              nonLinear
            });

            const stepElement = (
              <StepContext.Provider
                value={{
                  completed: stepProps.completed,
                  disabled: stepProps.disabled,
                  error,
                  expanded: stepProps.expanded,
                  index,
                  isLast: index === steps.length - 1,
                  status
                }}
              >
                {cloneElement(child, {
                  completed: stepProps.completed,
                  disabled: stepProps.disabled,
                  expanded: stepProps.expanded,
                  index,
                  isLast: index === steps.length - 1,
                  key: child.key ?? index
                })}
              </StepContext.Provider>
            );

            if (orientation !== "horizontal" || index === 0) {
              return stepElement;
            }

            const previousStep = steps[index - 1]?.props;
            const connectorActive = isConnectorActive({
              activeStep,
              completed: previousStep?.completed,
              index: index - 1
            });

            return (
              <Fragment key={child.key ?? `step-group-${index}`}>
                <StepConnectorItem active={connectorActive} />
                {stepElement}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    </StepperContext.Provider>
  );
});

StepperRoot.displayName = "Stepper";

function hasStepLabelError(step: ReactElement<StepOwnProps>): boolean {
  return Children.toArray(step.props.children).some(
    (child) => isValidElement<StepLabelOwnProps>(child) && child.props.error === true
  );
}

/** Convenience step with `title` / `description` props. Prefer `Step` + `StepLabel` for full control. */
export function StepperStep({
  children,
  className,
  completed,
  description,
  disabled,
  expanded,
  icon,
  optional,
  title
}: StepOwnProps & {
  description?: ReactNode;
  icon?: ReactNode;
  optional?: ReactNode;
  title?: ReactNode;
}) {
  return (
    <Step className={className} completed={completed} disabled={disabled} expanded={expanded}>
      <StepLabel description={description} icon={icon} optional={optional}>
        {title}
      </StepLabel>
      {children}
    </Step>
  );
}

StepperStep.displayName = "StepperStep";

type StepperComponent = typeof StepperRoot & {
  Root: typeof StepperRoot;
  Step: typeof Step;
  StepButton: typeof StepButton;
  StepContent: typeof StepContent;
  StepIcon: typeof StepIcon;
  StepLabel: typeof StepLabel;
};

export const StepperParts = {
  Root: StepperRoot,
  Step,
  StepButton,
  StepContent,
  StepIcon,
  StepLabel
};

export const Stepper = Object.assign(StepperRoot, StepperParts) as StepperComponent;

// Legacy type aliases
export type StepperStepOwnProps = StepOwnProps & {
  description?: ReactNode;
  icon?: ReactNode;
  optional?: ReactNode;
  status?: StepperStepStatus;
  title?: ReactNode;
};
