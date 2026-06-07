import { Menu as BaseMenu } from "@base-ui/react/menu";
import { createContext, forwardRef, useContext, type ComponentPropsWithoutRef } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";

export type MenuSize = ZedSize;

const MenuStyleContext = createContext<MenuSize>("md");

function useMenuSize() {
  return useContext(MenuStyleContext);
}

export type MenuRootOwnProps = ComponentPropsWithoutRef<typeof BaseMenu.Root> & {
  size?: MenuSize;
};

export function MenuRoot({ children, size: sizeProp, ...rest }: MenuRootOwnProps) {
  const defaults = useComponentDefaults("Menu");
  const size = (sizeProp ?? (defaults?.size as MenuSize | undefined) ?? "md") as MenuSize;

  return (
    <MenuStyleContext.Provider value={size}>
      <BaseMenu.Root {...rest}>{children}</BaseMenu.Root>
    </MenuStyleContext.Provider>
  );
}

export type MenuTriggerOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseMenu.Trigger>,
  "className"
> & {
  className?: string;
};

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerOwnProps>(function MenuTrigger(
  { className, ...rest },
  ref
) {
  return <BaseMenu.Trigger ref={ref} className={cx("zui-menu__trigger", className)} {...rest} />;
});

MenuTrigger.displayName = "MenuTrigger";

export type MenuPortalOwnProps = ComponentPropsWithoutRef<typeof BaseMenu.Portal>;

export function MenuPortal(props: MenuPortalOwnProps) {
  return <BaseMenu.Portal {...props} />;
}

export type MenuPositionerOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseMenu.Positioner>,
  "className"
> & {
  className?: string;
};

export const MenuPositioner = forwardRef<HTMLDivElement, MenuPositionerOwnProps>(
  function MenuPositioner({ className, sideOffset = 4, ...rest }, ref) {
    return (
      <BaseMenu.Positioner
        ref={ref}
        className={cx("zui-menu__positioner", className)}
        sideOffset={sideOffset}
        {...rest}
      />
    );
  }
);

MenuPositioner.displayName = "MenuPositioner";

export type MenuPopupOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseMenu.Popup>,
  "className"
> & {
  className?: string;
};

export const MenuPopup = forwardRef<HTMLDivElement, MenuPopupOwnProps>(function MenuPopup(
  { className, ...rest },
  ref
) {
  const size = useMenuSize();

  return (
    <BaseMenu.Popup
      ref={ref}
      className={cx("zui-menu__popup", className)}
      data-size={size}
      {...rest}
    />
  );
});

MenuPopup.displayName = "MenuPopup";

export type MenuItemOwnProps = Omit<ComponentPropsWithoutRef<typeof BaseMenu.Item>, "className"> & {
  className?: string;
};

export const MenuItem = forwardRef<HTMLDivElement, MenuItemOwnProps>(function MenuItem(
  { className, ...rest },
  ref
) {
  return <BaseMenu.Item ref={ref} className={cx("zui-menu__item", className)} {...rest} />;
});

MenuItem.displayName = "MenuItem";

export type MenuSeparatorOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseMenu.Separator>,
  "className"
> & {
  className?: string;
};

export const MenuSeparator = forwardRef<HTMLDivElement, MenuSeparatorOwnProps>(
  function MenuSeparator({ className, ...rest }, ref) {
    return (
      <BaseMenu.Separator ref={ref} className={cx("zui-menu__separator", className)} {...rest} />
    );
  }
);

MenuSeparator.displayName = "MenuSeparator";

export type MenuGroupOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseMenu.Group>,
  "className"
> & {
  className?: string;
};

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupOwnProps>(function MenuGroup(
  { className, ...rest },
  ref
) {
  return <BaseMenu.Group ref={ref} className={cx("zui-menu__group", className)} {...rest} />;
});

MenuGroup.displayName = "MenuGroup";

export type MenuGroupLabelOwnProps = Omit<
  ComponentPropsWithoutRef<typeof BaseMenu.GroupLabel>,
  "className"
> & {
  className?: string;
};

export const MenuGroupLabel = forwardRef<HTMLDivElement, MenuGroupLabelOwnProps>(
  function MenuGroupLabel({ className, ...rest }, ref) {
    return (
      <BaseMenu.GroupLabel ref={ref} className={cx("zui-menu__group-label", className)} {...rest} />
    );
  }
);

MenuGroupLabel.displayName = "MenuGroupLabel";

export const MenuParts = {
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Popup: MenuPopup,
  Portal: MenuPortal,
  Positioner: MenuPositioner,
  Root: MenuRoot,
  Separator: MenuSeparator,
  Trigger: MenuTrigger
};

export const Menu = MenuParts;

export type MenuRootProps = MenuRootOwnProps;
export type MenuTriggerProps = MenuTriggerOwnProps;
export type MenuPortalProps = MenuPortalOwnProps;
export type MenuPositionerProps = MenuPositionerOwnProps;
export type MenuPopupProps = MenuPopupOwnProps;
export type MenuItemProps = MenuItemOwnProps;
export type MenuSeparatorProps = MenuSeparatorOwnProps;
export type MenuGroupProps = MenuGroupOwnProps;
export type MenuGroupLabelProps = MenuGroupLabelOwnProps;
