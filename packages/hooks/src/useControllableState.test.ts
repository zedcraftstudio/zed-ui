import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useControllableState } from "./useControllableState";

describe("useControllableState", () => {
  it("manages uncontrolled state", () => {
    const { result } = renderHook(() => useControllableState({ defaultValue: "a" }));
    expect(result.current[0]).toBe("a");
    act(() => result.current[1]("b"));
    expect(result.current[0]).toBe("b");
  });

  it("respects controlled value", () => {
    const onChange = vi.fn();
    const { result, rerender } = renderHook(
      ({ value }) => useControllableState({ value, onChange }),
      { initialProps: { value: "x" as string | undefined } }
    );
    act(() => result.current[1]("y"));
    expect(onChange).toHaveBeenCalledWith("y");
    rerender({ value: "y" });
    expect(result.current[0]).toBe("y");
  });
});
