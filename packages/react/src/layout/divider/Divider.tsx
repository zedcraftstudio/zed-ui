import { Separator } from "@base-ui/react/separator";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { cx } from "@zed-ui/utils";

export type DividerOwnProps = Omit<ComponentPropsWithoutRef<typeof Separator>, "className"> & {
  className?: string;
  label?: string;
  orientation?: "horizontal" | "vertical";
};

export const Divider = forwardRef<HTMLDivElement, DividerOwnProps>(function Divider(
  { className, label, orientation = "horizontal", ...rest },
  ref
) {
  if (label) {
    return (
      <div
        className={cx("zui-divider", "zui-divider--labeled", className)}
        data-orientation={orientation}
        role="separator"
      >
        <Separator
          ref={ref}
          className="zui-divider__line"
          orientation={orientation}
          {...rest}
        />
        <span className="zui-divider__label">{label}</span>
        <Separator className="zui-divider__line" orientation={orientation} />
      </div>
    );
  }

  return (
    <Separator
      ref={ref}
      className={cx("zui-divider", className)}
      data-orientation={orientation}
      orientation={orientation}
      {...rest}
    />
  );
});

Divider.displayName = "Divider";
