import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";

describe("AvatarGroup", () => {
  it("renders grouped avatars", () => {
    const { getByText } = renderWithProvider(
      <AvatarGroup max={2}>
        <Avatar name="Jane Doe" />
        <Avatar name="John Smith" />
        <Avatar name="Extra User" />
      </AvatarGroup>
    );
    expect(getByText("JD")).toBeTruthy();
    expect(getByText("+1")).toBeTruthy();
  });
});
