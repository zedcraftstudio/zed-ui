import { describe, expect, it } from "vitest";
import { renderWithProvider } from "../../test/render";
import { Grid, GridItem, GridParts } from "./Grid";

describe("Grid", () => {
  it("renders grid children", () => {
    const { getByText } = renderWithProvider(
      <Grid columns={2}>
        <span>A</span>
        <span>B</span>
      </Grid>
    );
    expect(getByText("A")).toBeTruthy();
    expect(getByText("B")).toBeTruthy();
  });

  it("exposes compound namespace", () => {
    expect(GridParts.Root).toBe(Grid);
  });

  it("renders grid item spans", () => {
    const { container } = renderWithProvider(
      <Grid columns="repeat(2, 1fr)">
        <GridItem colSpan={2}>Wide</GridItem>
      </Grid>
    );
    const item = container.querySelector(".zui-grid-item") as HTMLElement;
    expect(item.style.gridColumn).toContain("span 2");
  });

  it("applies template columns", () => {
    const { container } = renderWithProvider(
      <Grid columns="repeat(3, 1fr)">
        <span>Cell</span>
      </Grid>
    );
    const grid = container.querySelector(".zui-grid") as HTMLElement;
    expect(grid.style.gridTemplateColumns).toBe("repeat(3, 1fr)");
  });

  it("renders inline grid and extended layout props", () => {
    const { container } = renderWithProvider(
      <Grid
        align="center"
        areas="'a a'"
        autoColumns="minmax(100px, auto)"
        autoRows="1fr"
        flow="dense"
        inline
        justify="space-between"
        rows="auto"
      >
        <span>Cell</span>
      </Grid>
    );
    const grid = container.querySelector(".zui-grid") as HTMLElement;
    expect(grid.classList.contains("zui-grid--inline")).toBe(true);
    expect(grid.style.display).toBe("inline-grid");
    expect(grid.style.gridAutoFlow).toBe("dense");
  });

  it("applies row span and positioning on grid items", () => {
    const { container } = renderWithProvider(
      <Grid>
        <GridItem area="main" colStart={2} rowEnd={3} rowSpan={2}>
          Item
        </GridItem>
      </Grid>
    );
    const item = container.querySelector(".zui-grid-item") as HTMLElement;
    expect(item.style.gridArea).toBe("main");
    expect(item.style.gridRow).toContain("span 2");
    expect(item.style.gridColumnStart).toBe("2");
    expect(item.style.gridRowEnd).toBe("3");
  });
});
