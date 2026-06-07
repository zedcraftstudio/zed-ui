import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { fireEvent } from "@testing-library/react";
import { Button } from "../../actions/button/Button";
import { DialogContent } from "./Dialog";
import { DialogRoot, DialogTrigger } from "./index";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Dialog", () => {
  it("renders trigger without opening", () => {
    const { getByRole } = renderWithProvider(
      <DialogRoot>
        <DialogTrigger render={<Button>Open dialog</Button>} />
        <DialogContent title="Confirm">Body copy</DialogContent>
      </DialogRoot>
    );

    expect(getByRole("button", { name: "Open dialog" })).toBeTruthy();
  });

  it("has no axe violations when closed", async () => {
    const { container } = renderWithProvider(
      <DialogRoot>
        <DialogTrigger render={<Button>Open dialog</Button>} />
        <DialogContent description="Details" title="Confirm">
          Body copy
        </DialogContent>
      </DialogRoot>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it("opens dialog and exposes title", () => {
    const { getByRole } = renderWithProvider(
      <DialogRoot>
        <DialogTrigger render={<Button>Open dialog</Button>} />
        <DialogContent title="Confirm action">Body copy</DialogContent>
      </DialogRoot>
    );

    fireEvent.click(getByRole("button", { name: "Open dialog" }));
    expect(getByRole("dialog", { name: "Confirm action" })).toBeTruthy();
  });

  it("renders description, footer, and floating close without header", () => {
    const { getByRole, getByText } = renderWithProvider(
      <DialogRoot defaultOpen>
        <DialogTrigger render={<Button>Open dialog</Button>} />
        <DialogContent description="More info" footer="Save" size="lg" title="Edit">
          Body copy
        </DialogContent>
      </DialogRoot>
    );
    expect(getByText("More info")).toBeTruthy();
    expect(getByText("Save")).toBeTruthy();
    expect(getByRole("button", { name: "Close dialog" })).toBeTruthy();

    const { getByRole: getByRoleBare } = renderWithProvider(
      <DialogRoot defaultOpen>
        <DialogTrigger render={<Button>Open</Button>} />
        <DialogContent>Body only</DialogContent>
      </DialogRoot>
    );
    expect(getByRoleBare("button", { name: "Close dialog" })).toBeTruthy();
  });
});
