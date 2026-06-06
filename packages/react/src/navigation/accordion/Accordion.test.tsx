import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger
} from "./Accordion";
import { renderWithProvider } from "../../test/render";

expect.extend(toHaveNoViolations);

describe("Accordion", () => {
  it("renders triggers and panels", () => {
    const { getByRole, getByText } = renderWithProvider(
      <AccordionRoot defaultValue={["one"]}>
        <AccordionItem value="one">
          <AccordionHeader>
            <AccordionTrigger>Section one</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Panel one</AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    );

    expect(getByRole("button", { name: "Section one" })).toBeTruthy();
    expect(getByText("Panel one")).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <AccordionRoot defaultValue={["one"]}>
        <AccordionItem value="one">
          <AccordionHeader>
            <AccordionTrigger>Section one</AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>Panel one</AccordionPanel>
        </AccordionItem>
      </AccordionRoot>
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it("exposes compound namespace", () => {
    expect(Accordion.Root).toBe(AccordionRoot);
    expect(Accordion.Trigger).toBe(AccordionTrigger);
  });
});
