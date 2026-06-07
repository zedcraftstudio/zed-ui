import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Button } from "../../actions/button/Button";
import { renderWithProvider } from "../../test/render";
import {
  Popover,
  PopoverArrow,
  PopoverBackdrop,
  PopoverClose,
  PopoverDescription,
  PopoverPanel,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
  PopoverViewport
} from "./Popover";

expect.extend(toHaveNoViolations);

describe("Popover", () => {
  it("renders trigger", () => {
    const { getByRole } = renderWithProvider(
      <PopoverRoot>
        <PopoverTrigger render={<Button>Open</Button>} />
        <PopoverPanel>Popover body</PopoverPanel>
      </PopoverRoot>
    );

    expect(getByRole("button", { name: "Open" })).toBeTruthy();
  });

  it("shows panel when open", () => {
    const { getByText } = renderWithProvider(
      <PopoverRoot open>
        <PopoverTrigger render={<Button>Open</Button>} />
        <PopoverPanel>Popover body</PopoverPanel>
      </PopoverRoot>
    );
    expect(getByText("Popover body")).toBeTruthy();
  });

  it("renders panel header, footer, arrow, and backdrop", () => {
    const { getByText } = renderWithProvider(
      <PopoverRoot open>
        <PopoverTrigger render={<Button>Open</Button>} />
        <PopoverPanel
          description="Details"
          footer="Footer"
          showArrow
          showBackdrop
          title="Title"
        >
          Body
        </PopoverPanel>
      </PopoverRoot>
    );
    expect(getByText("Title")).toBeTruthy();
    expect(getByText("Details")).toBeTruthy();
    expect(getByText("Footer")).toBeTruthy();
    expect(document.body.querySelector(".zui-popover__backdrop")).toBeTruthy();
    expect(document.body.querySelector(".zui-popover__arrow")).toBeTruthy();
  });

  it("renders full compound popover chrome", () => {
    const { getByText } = renderWithProvider(
      <PopoverRoot open>
        <PopoverTrigger render={<Button>Open</Button>} />
        <PopoverPortal>
          <PopoverBackdrop />
          <PopoverPositioner>
            <PopoverPopup>
              <PopoverArrow />
              <PopoverTitle>Title</PopoverTitle>
              <PopoverDescription>Description</PopoverDescription>
              <PopoverViewport>Body</PopoverViewport>
              <PopoverClose>Dismiss</PopoverClose>
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </PopoverRoot>
    );
    expect(getByText("Title")).toBeTruthy();
    expect(getByText("Description")).toBeTruthy();
    expect(getByText("Body")).toBeTruthy();
    expect(document.body.querySelector(".zui-popover__popup")).toBeTruthy();
    expect(document.body.querySelector(".zui-popover__positioner")).toBeTruthy();
  });

  it("exposes compound namespace", () => {
    expect(Popover.Root).toBe(PopoverRoot);
    expect(Popover.Trigger).toBe(PopoverTrigger);
  });

  it("has no axe violations when closed", async () => {
    const { container } = renderWithProvider(
      <PopoverRoot>
        <PopoverTrigger render={<Button>Open</Button>} />
        <PopoverPanel>Popover body</PopoverPanel>
      </PopoverRoot>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
