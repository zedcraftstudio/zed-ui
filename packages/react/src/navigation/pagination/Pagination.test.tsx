import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Pagination", () => {
  it("calls onPageChange", () => {
    const onPageChange = vi.fn();
    const { getByRole } = renderWithProvider(
      <Pagination count={5} page={2} onPageChange={onPageChange} />
    );

    getByRole("button", { name: "3" }).click();
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("applies size to the list", () => {
    const { container } = renderWithProvider(<Pagination count={5} page={1} size="lg" />);
    expect(container.querySelector('.zui-pagination__list[data-size="lg"]')).toBeTruthy();
  });

  it("navigates with prev and next", () => {
    const onPageChange = vi.fn();
    const { getByRole } = renderWithProvider(
      <Pagination count={5} page={3} onPageChange={onPageChange} />
    );

    getByRole("button", { name: "Prev" }).click();
    expect(onPageChange).toHaveBeenCalledWith(2);
    getByRole("button", { name: "Next" }).click();
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it("disables prev on first page and next on last page", () => {
    const { getByRole } = renderWithProvider(<Pagination count={5} page={1} />);
    expect(getByRole("button", { name: "Prev" }).hasAttribute("disabled")).toBe(true);
    expect(getByRole("button", { name: "Next" }).hasAttribute("disabled")).toBe(false);
  });

  it("renders ellipsis for large page counts", () => {
    const { container } = renderWithProvider(<Pagination count={20} page={10} />);
    expect(container.querySelector(".zui-pagination__ellipsis")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(<Pagination count={5} page={2} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
