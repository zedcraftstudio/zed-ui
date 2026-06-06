import { describe, expect, it, vi } from "vitest";
import { mergeRefs } from "./mergeRefs";

describe("mergeRefs", () => {
  it("calls callback and object refs", () => {
    const callback = vi.fn();
    const objectRef = { current: null as HTMLDivElement | null };
    const merged = mergeRefs(callback, objectRef);
    const node = document.createElement("div");
    merged(node);
    expect(callback).toHaveBeenCalledWith(node);
    expect(objectRef.current).toBe(node);
  });
});
