import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "./Tabs";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Tabs", () => {
  it("renders tab triggers", () => {
    const { getByRole } = renderWithProvider(
      <TabsRoot defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Panel one</TabsContent>
        <TabsContent value="two">Panel two</TabsContent>
      </TabsRoot>
    );

    expect(getByRole("tab", { name: "One" })).toBeTruthy();
    expect(getByRole("tab", { name: "Two" })).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <TabsRoot defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Panel one</TabsContent>
      </TabsRoot>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
