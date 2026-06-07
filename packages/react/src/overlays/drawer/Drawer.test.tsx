import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { DrawerContent } from "./Drawer";
import { DrawerRoot, DrawerTrigger } from "./index";
import { Button } from "../../actions/button/Button";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Drawer", () => {
  it("uses Drawer.Title for accessible headings", async () => {
    const { container, getByRole } = renderWithProvider(
      <DrawerRoot defaultOpen>
        <DrawerTrigger render={<Button>Open drawer</Button>} />
        <DrawerContent title="Settings">Drawer body</DrawerContent>
      </DrawerRoot>
    );

    expect(getByRole("heading", { name: "Settings" })).toBeTruthy();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("renders drawer without title on alternate side", () => {
    const { getByRole, getByText } = renderWithProvider(
      <DrawerRoot defaultOpen>
        <DrawerTrigger render={<Button>Open drawer</Button>} />
        <DrawerContent side="left">Panel body</DrawerContent>
      </DrawerRoot>
    );
    expect(getByText("Panel body")).toBeTruthy();
    expect(getByRole("button", { name: "Close" })).toBeTruthy();
    expect(document.body.querySelector("[data-side='left']")).toBeTruthy();
  });
});
