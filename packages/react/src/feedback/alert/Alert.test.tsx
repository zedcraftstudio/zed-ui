import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Alert } from "./Alert";

expect.extend(toHaveNoViolations);

describe("Alert", () => {
  it("renders title and description", () => {
    const { getByText } = renderWithProvider(
      <Alert description="Details here" status="info" title="Notice" />
    );
    expect(getByText("Notice")).toBeTruthy();
    expect(getByText("Details here")).toBeTruthy();
  });

  it("renders status variants and optional chrome", () => {
    const { container, getByText, rerender } = renderWithProvider(
      <Alert compact endElement="Action" inline startElement="!" status="success" title="Done" />
    );
    expect(getByText("Done")).toBeTruthy();
    expect(getByText("Action")).toBeTruthy();
    expect(container.querySelector("[data-compact='true']")).toBeTruthy();
    expect(container.querySelector("[data-inline='true']")).toBeTruthy();

    rerender(<Alert color="danger">Body only</Alert>);
    expect(getByText("Body only")).toBeTruthy();
    expect(container.querySelector("[data-status='error']")).toBeTruthy();

    rerender(<Alert icon="*" size="lg" status="warning" variant="solid" />);
    expect(container.querySelector("[data-size='lg']")).toBeTruthy();
    expect(container.querySelector("[data-variant='solid']")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <Alert description="Details here" status="info" title="Notice" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
