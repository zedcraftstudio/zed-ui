import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  getAvatarColorFromName,
  getAvatarInitials
} from "./Avatar";

describe("Avatar", () => {
  it("renders fallback initials from name", () => {
    const { getByText } = renderWithProvider(<Avatar name="Jane Doe" />);
    expect(getByText("JD")).toBeTruthy();
  });

  it("renders custom fallback children", () => {
    const { getByText } = renderWithProvider(<Avatar fallback="ZK" />);
    expect(getByText("ZK")).toBeTruthy();
  });

  it("renders with src and applies avatar attributes", () => {
    const { container } = renderWithProvider(
      <Avatar alt="User" name="Jane" ring shape="square" src="/avatar.png" variant="solid" />
    );
    const avatar = container.querySelector(".zui-avatar");
    expect(avatar?.getAttribute("data-variant")).toBe("solid");
    expect(avatar?.getAttribute("data-shape")).toBe("square");
    expect(avatar?.getAttribute("data-ring")).toBe("true");
  });

  it("renders default icon when no name or fallback", () => {
    const { container } = renderWithProvider(<Avatar />);
    expect(container.querySelector(".zui-avatar__icon")).toBeTruthy();
  });

  it("exposes compound parts", () => {
    const { getByText, container } = renderWithProvider(
      <AvatarRoot>
        <AvatarImage alt="User" src="/avatar.png" />
        <AvatarFallback>AB</AvatarFallback>
      </AvatarRoot>
    );
    expect(container.querySelector(".zui-avatar")).toBeTruthy();
    expect(getByText("AB")).toBeTruthy();
  });

  it("getAvatarInitials splits words", () => {
    expect(getAvatarInitials("Jane Doe")).toBe("JD");
    expect(getAvatarInitials("Zed")).toBe("ZE");
    expect(getAvatarInitials()).toBe("?");
    expect(getAvatarInitials("   ")).toBe("?");
  });

  it("getAvatarColorFromName returns a stable palette color", () => {
    expect(getAvatarColorFromName("Jane Doe")).toBe(getAvatarColorFromName("Jane Doe"));
    expect(["primary", "neutral", "success", "warning", "danger", "info"]).toContain(
      getAvatarColorFromName("Jane Doe")
    );
  });
});
