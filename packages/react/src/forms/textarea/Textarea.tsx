import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import type { PolymorphicComponent, PolymorphicProps } from "@zed-ui/system";
import { cx, dataAttr } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";
import { Box, type BoxOwnProps } from "../../primitives/box/Box";

export type TextareaOwnProps = Omit<BoxOwnProps, "color"> & {
  endIcon?: ReactNode;
  invalid?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
  rows?: number;
  size?: ZedSize;
  startIcon?: ReactNode;
};

function TextareaBase(props: PolymorphicProps<ElementType, TextareaOwnProps>, ref: Ref<unknown>) {
  const {
    as,
    className,
    endIcon,
    invalid = false,
    resize,
    rows,
    size = "md",
    startIcon,
    style,
    ...rest
  } = props;

  const hasIcons = Boolean(startIcon || endIcon);

  const textarea = (
    <Box
      ref={ref as Ref<HTMLElement>}
      as={as ?? "textarea"}
      className={cx(
        "zui-textarea",
        startIcon ? "zui-textarea--start-icon" : undefined,
        endIcon ? "zui-textarea--end-icon" : undefined,
        className
      )}
      data-invalid={dataAttr(invalid)}
      data-size={size}
      rows={rows}
      style={{ resize, ...style }}
      {...rest}
    />
  );

  if (!hasIcons) {
    return textarea;
  }

  return (
    <div className="zui-textarea-group" data-invalid={dataAttr(invalid)} data-size={size}>
      {startIcon ? (
        <span className="zui-textarea__start-icon" aria-hidden>
          {startIcon}
        </span>
      ) : null}
      {textarea}
      {endIcon ? (
        <span className="zui-textarea__end-icon" aria-hidden>
          {endIcon}
        </span>
      ) : null}
    </div>
  );
}

export const Textarea = forwardRef(TextareaBase) as PolymorphicComponent<"textarea", TextareaOwnProps>;
