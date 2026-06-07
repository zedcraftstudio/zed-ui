import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Button } from "../../actions/button/Button";
import { renderWithProvider } from "../../test/render";
import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from "./index";

expect.extend(toHaveNoViolations);

describe("Tooltip", () => {
  it("renders trigger", () => {
    const { getByRole } = renderWithProvider(
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger render={<Button>Info</Button>} />
          <TooltipContent>Tooltip text</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );

    expect(getByRole("button", { name: "Info" })).toBeTruthy();
  });

  it("shows tooltip content when open", () => {
    const { getByText } = renderWithProvider(
      <TooltipProvider>
        <TooltipRoot defaultOpen>
          <TooltipTrigger render={<Button>Info</Button>} />
          <TooltipContent>Tooltip text</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );
    expect(getByText("Tooltip text")).toBeTruthy();
  });

  it("has no axe violations when closed", async () => {
    const { container } = renderWithProvider(
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger render={<Button>Info</Button>} />
          <TooltipContent>Tooltip text</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
