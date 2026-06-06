import type { PropRow } from "../docs/props/types";

export type PropsTableProps = {
  rows: PropRow[];
};

export function PropsTable({ rows }: PropsTableProps) {
  if (rows.length === 0) return null;

  return (
    <div className="docs-props-table-wrap">
      <table className="docs-props-table">
        <thead>
          <tr>
            <th scope="col">Prop</th>
            <th scope="col">Default</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="docs-props-table__prop-cell">
                <code className="docs-props-table__prop">{row.name}</code>
              </td>
              <td className="docs-props-table__default-cell">
                <span className="docs-props-table__default">{row.default ?? "—"}</span>
              </td>
              <td className="docs-props-table__type-cell">
                <code className="docs-props-table__type">{row.type}</code>
                {row.description ? (
                  <p className="docs-props-table__description">{row.description}</p>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
