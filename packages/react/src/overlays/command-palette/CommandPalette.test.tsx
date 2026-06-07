import { fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { renderWithProvider } from "../../test/render";
import { CommandPalette } from "./CommandPalette";

expect.extend(toHaveNoViolations);

describe("CommandPalette", () => {
  it("renders when open", () => {
    const { getByPlaceholderText } = renderWithProvider(
      <CommandPalette
        items={[{ id: "new", label: "New file" }]}
        open
        onOpenChange={vi.fn()}
      />
    );

    expect(getByPlaceholderText("Search commands…")).toBeTruthy();
  });

  it("filters commands by query", () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithProvider(
      <CommandPalette
        items={[
          { id: "new", label: "New file" },
          { id: "save", label: "Save file" }
        ]}
        open
        onOpenChange={vi.fn()}
      />
    );

    fireEvent.change(getByPlaceholderText("Search commands…"), { target: { value: "save" } });

    expect(queryByText("New file")).toBeNull();
    expect(getByText("Save file")).toBeTruthy();
  });

  it("shows empty state when filter has no matches", () => {
    const { getByPlaceholderText, getByText } = renderWithProvider(
      <CommandPalette items={[{ id: "save", label: "Save" }]} open onOpenChange={vi.fn()} />
    );
    fireEvent.change(getByPlaceholderText("Search commands…"), { target: { value: "zzzz" } });
    expect(getByText("No commands found.")).toBeTruthy();
  });

  it("groups items and highlights on hover", () => {
    const onSelect = vi.fn();
    const { getByText } = renderWithProvider(
      <CommandPalette
        items={[
          { group: "File", id: "new", label: "New file", onSelect },
          { group: "Edit", id: "save", label: "Save file" }
        ]}
        open
        onOpenChange={vi.fn()}
      />
    );
    fireEvent.mouseEnter(getByText("New file"));
    fireEvent.click(getByText("New file"));
    expect(onSelect).toHaveBeenCalled();
    expect(getByText("File")).toBeTruthy();
  });

  it("navigates with arrow keys and selects with enter", () => {
    const onSelect = vi.fn();
    const onOpenChange = vi.fn();
    const { getByPlaceholderText } = renderWithProvider(
      <CommandPalette
        items={[
          { id: "one", label: "One", onSelect },
          { id: "two", label: "Two" }
        ]}
        open
        onOpenChange={onOpenChange}
      />
    );
    const input = getByPlaceholderText("Search commands…");
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowUp" });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onSelect).toHaveBeenCalled();
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("skips disabled items on select", () => {
    const onSelect = vi.fn();
    const { getByText } = renderWithProvider(
      <CommandPalette
        items={[{ disabled: true, id: "x", label: "Disabled", onSelect }]}
        open
        onOpenChange={vi.fn()}
      />
    );
    fireEvent.click(getByText("Disabled"));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("runs item onSelect", () => {
    const onSelect = vi.fn();
    const { getByText } = renderWithProvider(
      <CommandPalette
        items={[{ id: "save", label: "Save file", onSelect }]}
        open
        onOpenChange={vi.fn()}
      />
    );
    fireEvent.click(getByText("Save file"));
    expect(onSelect).toHaveBeenCalled();
  });

  it("has no axe violations when open", async () => {
    const { container } = renderWithProvider(
      <CommandPalette
        items={[{ id: "new", label: "New file" }]}
        open
        onOpenChange={vi.fn()}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
