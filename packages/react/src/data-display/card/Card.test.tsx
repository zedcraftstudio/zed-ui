import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "./Card";

expect.extend(toHaveNoViolations);

describe("Card", () => {
  it("renders card content", () => {
    const { getByText } = renderWithProvider(
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
        </CardHeader>
        <CardBody>Card body</CardBody>
      </Card>
    );
    expect(getByText("Card title")).toBeTruthy();
    expect(getByText("Card body")).toBeTruthy();
  });

  it("renders convenience header and footer props", () => {
    const { getByText } = renderWithProvider(
      <Card footer="Footer" header="Header">
        Body
      </Card>
    );
    expect(getByText("Header")).toBeTruthy();
    expect(getByText("Footer")).toBeTruthy();
    expect(getByText("Body")).toBeTruthy();
  });

  it("renders description and image", () => {
    const { getByText, container } = renderWithProvider(
      <Card>
        <CardImage alt="Cover" src="/cover.jpg" />
        <CardDescription>Details</CardDescription>
        <CardFooter>Actions</CardFooter>
      </Card>
    );
    expect(getByText("Details")).toBeTruthy();
    expect(getByText("Actions")).toBeTruthy();
    expect(container.querySelector(".zui-card__image")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <Card>
        <CardTitle>Card title</CardTitle>
        <CardBody>Card body</CardBody>
      </Card>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
