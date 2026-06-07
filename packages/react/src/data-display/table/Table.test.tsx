import { axe, toHaveNoViolations } from "jest-axe";
import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableScrollArea
} from "./Table";

expect.extend(toHaveNoViolations);

describe("Table", () => {
  it("renders table structure", () => {
    const { getByRole, getByText } = renderWithProvider(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ada</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(getByRole("table")).toBeTruthy();
    expect(getByText("Ada")).toBeTruthy();
  });

  it("renders caption, footer, and scroll area", () => {
    const { getByText, container } = renderWithProvider(
      <TableScrollArea>
        <Table striped stickyHeader>
          <TableCaption>Members</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ada</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total: 1</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableScrollArea>
    );
    expect(getByText("Members")).toBeTruthy();
    expect(getByText("Total: 1")).toBeTruthy();
    expect(container.querySelector(".zui-table-scroll-area")).toBeTruthy();
    expect(container.querySelector('.zui-table[data-striped]')).toBeTruthy();
  });

  it("has no axe violations", async () => {
    const { container } = renderWithProvider(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ada</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
