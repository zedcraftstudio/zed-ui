import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
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
});
