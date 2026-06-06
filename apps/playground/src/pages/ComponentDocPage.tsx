import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { getComponentDoc } from "../docs/registry";

export function ComponentDocPage() {
  const { componentId } = useParams<{ componentId: string }>();
  const id = componentId ?? "";
  const Section = getComponentDoc(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!Section) {
    return <Navigate to={ROUTES.docsComponents} replace />;
  }

  return (
    <div className="docs-page">
      <Section />
    </div>
  );
}
