import { axe, toHaveNoViolations } from "jest-axe";
import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Tabs, TabsContent, TabsList, TabsRoot, TabsTrigger } from "./Tabs";
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

  it("supports controlled value changes", () => {
    const { getByRole } = renderWithProvider(
      <TabsRoot value="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Panel one</TabsContent>
        <TabsContent value="two">Panel two</TabsContent>
      </TabsRoot>
    );
    expect(getByRole("tab", { name: "One" }).getAttribute("aria-selected")).toBe("true");
  });

  it("renders vertical tabs", () => {
    const { container } = renderWithProvider(
      <TabsRoot defaultValue="one" orientation="vertical">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Panel</TabsContent>
      </TabsRoot>
    );
    expect(container.querySelector(".zui-tabs")).toBeTruthy();
    expect(container.querySelector('[aria-orientation="vertical"]')).toBeTruthy();
  });

  it("lazy-mounts panel content after activation", () => {
    const { getByRole, queryByText } = renderWithProvider(
      <TabsRoot defaultValue="one">
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent lazyMount value="one">
          Panel one
        </TabsContent>
        <TabsContent lazyMount value="two">
          Panel two
        </TabsContent>
      </TabsRoot>
    );
    expect(queryByText("Panel two")).toBeNull();
    fireEvent.click(getByRole("tab", { name: "Two" }));
    expect(queryByText("Panel two")).toBeTruthy();
  });

  it("calls onValueChange when switching tabs", () => {
    const onValueChange = vi.fn();
    const { getByRole } = renderWithProvider(
      <TabsRoot defaultValue="one" onValueChange={onValueChange}>
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">A</TabsContent>
        <TabsContent value="two">B</TabsContent>
      </TabsRoot>
    );
    fireEvent.click(getByRole("tab", { name: "Two" }));
    expect(onValueChange).toHaveBeenCalled();
  });

  it("renders indicator and content group via compound API", () => {
    const { container } = renderWithProvider(
      <Tabs.Root defaultValue="one" fitted justify="center">
        <Tabs.List>
          <Tabs.Trigger value="one">One</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.ContentGroup>
          <Tabs.Content value="one">Panel</Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs.Root>
    );
    expect(container.querySelector(".zui-tabs__indicator")).toBeTruthy();
    expect(container.querySelector(".zui-tabs__content-group")).toBeTruthy();
    expect(container.querySelector('.zui-tabs[data-fitted]')).toBeTruthy();
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
