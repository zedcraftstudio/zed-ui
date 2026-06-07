import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Button } from "../../actions/button/Button";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuTrigger
} from "./Menu";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Menu", () => {
  it("renders a menu trigger", () => {
    const { getByRole } = renderWithProvider(
      <MenuRoot>
        <MenuTrigger render={<Button>Open menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Edit</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    );

    expect(getByRole("button", { name: "Open menu" })).toBeTruthy();
  });

  it("has no axe violations when closed", async () => {
    const { container } = renderWithProvider(
      <MenuRoot>
        <MenuTrigger render={<Button>Actions</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Edit</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it("exposes compound namespace", () => {
    expect(Menu.Root).toBe(MenuRoot);
    expect(Menu.Item).toBe(MenuItem);
  });

  it("applies size to the popup when open", () => {
    renderWithProvider(
      <MenuRoot defaultOpen size="lg">
        <MenuTrigger render={<Button>Open menu</Button>} />
        <MenuPortal>
          <MenuPositioner>
            <MenuPopup>
              <MenuItem>Edit</MenuItem>
            </MenuPopup>
          </MenuPositioner>
        </MenuPortal>
      </MenuRoot>
    );

    expect(document.querySelector('.zui-menu__popup[data-size="lg"]')).toBeTruthy();
  });
});
