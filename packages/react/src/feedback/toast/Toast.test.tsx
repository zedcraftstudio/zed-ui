import { fireEvent, renderHook } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../../actions/button/Button";
import { renderWithProvider } from "../../test/render";
import { Toast, ToastProvider } from "./Toast";
import { useToast } from "./useToast";

expect.extend(toHaveNoViolations);

function ToastTrigger() {
  const { toast } = useToast();
  return <Button onClick={() => toast({ title: "Done" })}>Show</Button>;
}

describe("Toast", () => {
  it("renders toast content", () => {
    const { getByText } = renderWithProvider(<Toast title="Saved" status="success" />);
    expect(getByText("Saved")).toBeTruthy();
  });

  it("resolves legacy variant to status", () => {
    const { getByText } = renderWithProvider(<Toast title="Warning" variant="warning" />);
    expect(getByText("Warning")).toBeTruthy();
  });

  it("renders description, end element, and color-driven status", () => {
    const { container, getByText } = renderWithProvider(
      <Toast
        color="danger"
        description="Try again"
        endElement="Undo"
        size="sm"
        title="Failed"
        variant="solid"
      />
    );
    expect(getByText("Try again")).toBeTruthy();
    expect(getByText("Undo")).toBeTruthy();
    expect(container.querySelector("[data-status='error']")).toBeTruthy();
    expect(container.querySelector("[data-variant='solid']")).toBeTruthy();
  });

  it("calls onClose when dismiss clicked", () => {
    const onClose = vi.fn();
    const { getByRole } = renderWithProvider(<Toast title="Saved" onClose={onClose} />);
    fireEvent.click(getByRole("button", { name: "Dismiss notification" }));
    expect(onClose).toHaveBeenCalled();
  });

  it("renders description and dismisses from provider", () => {
    const { getByRole, getByText } = renderWithProvider(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    );
    fireEvent.click(getByRole("button", { name: "Show" }));
    expect(getByText("Done")).toBeTruthy();
    fireEvent.click(getByRole("button", { name: "Dismiss notification" }));
  });

  it("queues toasts through provider", () => {
    const { getByRole, getByText } = renderWithProvider(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>
    );
    fireEvent.click(getByRole("button", { name: "Show" }));
    expect(getByText("Done")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Toast title="Saved" status="success" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("throws when useToast is used outside ToastProvider", () => {
    expect(() => renderHook(() => useToast())).toThrow(
      "`useToast` must be used within `ToastProvider`"
    );
  });
});
