import { axe, toHaveNoViolations } from "jest-axe";
import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../../actions/button/Button";
import { renderWithProvider } from "../../test/render";
import { AlertDialogContent, AlertDialogRoot, AlertDialogTrigger } from "./AlertDialog";

expect.extend(toHaveNoViolations);

describe("AlertDialog", () => {
  it("renders trigger", () => {
    const { getByRole } = renderWithProvider(
      <AlertDialogRoot>
        <AlertDialogTrigger render={<Button>Delete</Button>} />
        <AlertDialogContent title="Delete item?" description="This cannot be undone." />
      </AlertDialogRoot>
    );

    expect(getByRole("button", { name: "Delete" })).toBeTruthy();
  });

  it("opens with custom actions and body content", () => {
    const onConfirm = vi.fn();
    const { getByRole, getByText } = renderWithProvider(
      <AlertDialogRoot defaultOpen>
        <AlertDialogTrigger render={<Button>Delete</Button>} />
        <AlertDialogContent
          cancelLabel="Keep"
          confirmLabel="Remove"
          description="This cannot be undone."
          title="Delete item?"
          onConfirm={onConfirm}
        >
          Extra warning
        </AlertDialogContent>
      </AlertDialogRoot>
    );
    expect(getByText("Extra warning")).toBeTruthy();
    fireEvent.click(getByRole("button", { name: "Remove" }));
    expect(onConfirm).toHaveBeenCalled();
  });

  it("has no axe violations when closed", async () => {
    const { container } = renderWithProvider(
      <AlertDialogRoot>
        <AlertDialogTrigger render={<Button>Delete</Button>} />
        <AlertDialogContent title="Delete item?" description="This cannot be undone." />
      </AlertDialogRoot>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
