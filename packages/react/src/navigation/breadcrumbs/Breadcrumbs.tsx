import { Children, isValidElement, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Link } from "../../typography/link/Link";

export type BreadcrumbItem = {
  current?: boolean;
  href?: string;
  label: ReactNode;
};

export type BreadcrumbsOwnProps = {
  children?: ReactNode;
  className?: string;
  items?: BreadcrumbItem[];
  separator?: ReactNode;
};

function DefaultSeparator() {
  return (
    <span aria-hidden className="zui-breadcrumbs__separator">
      /
    </span>
  );
}

export function BreadcrumbsItem({
  children,
  className,
  current = false,
  href
}: {
  children: ReactNode;
  className?: string;
  current?: boolean;
  href?: string;
}) {
  return (
    <li className={cx("zui-breadcrumbs__item", className)}>
      {current ? (
        <span aria-current="page" className="zui-breadcrumbs__current">
          {children}
        </span>
      ) : href ? (
        <Link className="zui-breadcrumbs__link" href={href}>
          {children}
        </Link>
      ) : (
        <span className="zui-breadcrumbs__link">{children}</span>
      )}
    </li>
  );
}

BreadcrumbsItem.displayName = "BreadcrumbsItem";

export function BreadcrumbsList({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ol className={cx("zui-breadcrumbs__list", className)}>{children}</ol>;
}

BreadcrumbsList.displayName = "BreadcrumbsList";

export function BreadcrumbsRoot({
  children,
  className,
  items,
  separator = <DefaultSeparator />
}: BreadcrumbsOwnProps) {
  if (items) {
    return (
      <nav aria-label="Breadcrumb" className={cx("zui-breadcrumbs", className)}>
        <ol className="zui-breadcrumbs__list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const current = item.current ?? isLast;

            return (
              <li key={index} className="zui-breadcrumbs__item">
                {current ? (
                  <span aria-current="page" className="zui-breadcrumbs__current">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <Link className="zui-breadcrumbs__link" href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  <span className="zui-breadcrumbs__link">{item.label}</span>
                )}
                {!isLast ? separator : null}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  const childArray = Children.toArray(children);
  const withSeparators = childArray.flatMap((child, index) => {
    if (!isValidElement(child)) return [child];
    const nodes: ReactNode[] = [child];
    if (index < childArray.length - 1) {
      nodes.push(
        <li
          key={`sep-${index}`}
          aria-hidden
          className="zui-breadcrumbs__separator-item"
          role="presentation"
        >
          {separator}
        </li>
      );
    }
    return nodes;
  });

  return (
    <nav aria-label="Breadcrumb" className={cx("zui-breadcrumbs", className)}>
      <ol className="zui-breadcrumbs__list">{withSeparators}</ol>
    </nav>
  );
}

export const BreadcrumbsSeparator = DefaultSeparator;

export const BreadcrumbsParts = {
  Item: BreadcrumbsItem,
  List: BreadcrumbsList,
  Root: BreadcrumbsRoot,
  Separator: BreadcrumbsSeparator
};

export const Breadcrumbs = BreadcrumbsParts;
