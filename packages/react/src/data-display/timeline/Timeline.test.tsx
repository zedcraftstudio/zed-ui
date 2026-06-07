import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Timeline } from "./Timeline";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Timeline", () => {
  it("renders timeline items", () => {
    const { getByText } = renderWithProvider(
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Product Shipped</Timeline.Title>
            <Timeline.Description>13th May 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Order Delivered</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    );

    expect(getByText("Product Shipped")).toBeTruthy();
    expect(getByText("Order Delivered")).toBeTruthy();
  });

  it("hides the last separator when showLastSeparator is false", () => {
    const { container } = renderWithProvider(
      <Timeline.Root showLastSeparator={false}>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>One</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Two</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    );

    expect(container.querySelectorAll(".zui-timeline__separator").length).toBe(2);
    expect(container.querySelector(".zui-timeline")?.hasAttribute("data-show-last-separator")).toBe(
      false
    );
  });

  it("shows the last separator when showLastSeparator is true", () => {
    const { container } = renderWithProvider(
      <Timeline.Root showLastSeparator>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>One</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Two</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    );

    expect(container.querySelector(".zui-timeline")?.hasAttribute("data-show-last-separator")).toBe(
      true
    );
  });

  it("renders alternating content via dual content slots", () => {
    const { getByText } = renderWithProvider(
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Content style={{ flex: 1 }} />
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content style={{ flex: 1 }}>
            <Timeline.Title>Placed Order</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content style={{ alignItems: "flex-end", flex: 1 }}>
            <Timeline.Title>Prepared Order</Timeline.Title>
          </Timeline.Content>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content style={{ flex: 1 }} />
        </Timeline.Item>
      </Timeline.Root>
    );

    expect(getByText("Placed Order")).toBeTruthy();
    expect(getByText("Prepared Order")).toBeTruthy();
  });

  it("renders content before the connector using content slots", () => {
    const { getByText } = renderWithProvider(
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Content style={{ flex: "0 0 auto", width: "auto" }}>
            <Timeline.Title>Nov 1994</Timeline.Title>
          </Timeline.Content>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>1</Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Description>Lorem ipsum dolor sit amet.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    );

    expect(getByText("Nov 1994")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <Timeline.Root>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>Shipped</Timeline.Title>
            <Timeline.Description>May 13, 2021</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
