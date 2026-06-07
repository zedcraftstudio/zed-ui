import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ComponentPropsWithoutRef
} from "react";
import { useControllableState } from "@zed-ui/hooks";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx, dataAttr } from "@zed-ui/utils";
import type {
  TabsActivationMode,
  TabsJustify,
  TabsSize,
  TabsVariant,
  ZedColor
} from "../../shared/types";

export type { TabsActivationMode, TabsJustify, TabsSize, TabsVariant };

type TabsStyleContextValue = {
  activationMode: TabsActivationMode;
  activeValue: BaseTabs.Tab.Value | undefined;
  mountedValues: Set<BaseTabs.Tab.Value>;
};

const TabsStyleContext = createContext<TabsStyleContextValue | null>(null);

function useTabsStyleContext() {
  const context = useContext(TabsStyleContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within Tabs.Root.");
  }
  return context;
}

type BaseTabsRootProps = ComponentPropsWithoutRef<typeof BaseTabs.Root>;

export type TabsRootOwnProps = Omit<BaseTabsRootProps, "className"> & {
  activationMode?: TabsActivationMode;
  className?: string;
  color?: ZedColor;
  fitted?: boolean;
  justify?: TabsJustify;
  size?: TabsSize;
  variant?: TabsVariant;
};

export function TabsRoot({
  activationMode = "automatic",
  className,
  color: colorProp,
  defaultValue,
  fitted = false,
  justify = "start",
  onValueChange,
  size: sizeProp,
  value,
  variant: variantProp,
  ...rest
}: TabsRootOwnProps) {
  const defaults = useComponentDefaults("Tabs");
  const size = (sizeProp ?? (defaults?.size as TabsSize | undefined) ?? "md") as TabsSize;
  const variant = (variantProp ??
    (defaults?.variant as TabsVariant | undefined) ??
    "line") as TabsVariant;
  const color = colorProp ?? (defaults?.color as ZedColor | undefined) ?? "primary";
  const [activeValue, setActiveValue] = useControllableState<BaseTabs.Tab.Value | undefined>({
    value,
    defaultValue
  });
  const [mountedValues, setMountedValues] = useState(
    () =>
      new Set<BaseTabs.Tab.Value>(
        (value ?? defaultValue) != null ? [(value ?? defaultValue) as BaseTabs.Tab.Value] : []
      )
  );

  const handleValueChange = useCallback(
    (nextValue: BaseTabs.Tab.Value, eventDetails: BaseTabs.Root.ChangeEventDetails) => {
      setActiveValue(nextValue);
      if (nextValue != null) {
        setMountedValues((current) => new Set(current).add(nextValue));
      }
      onValueChange?.(nextValue, eventDetails);
    },
    [onValueChange, setActiveValue]
  );

  const contextValue = useMemo(
    () => ({
      activationMode,
      activeValue,
      mountedValues
    }),
    [activationMode, activeValue, mountedValues]
  );

  return (
    <TabsStyleContext.Provider value={contextValue}>
      <BaseTabs.Root
        className={cx("zui-tabs", className)}
        data-color={color}
        data-fitted={dataAttr(fitted)}
        data-justify={justify}
        data-size={size}
        data-variant={variant}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        value={value}
        {...rest}
      />
    </TabsStyleContext.Provider>
  );
}

TabsRoot.displayName = "TabsRoot";

export type TabsListOwnProps = ComponentPropsWithoutRef<typeof BaseTabs.List>;

export const TabsList = forwardRef<HTMLDivElement, TabsListOwnProps>(function TabsList(
  { activateOnFocus, className, ...rest },
  ref
) {
  const { activationMode } = useTabsStyleContext();

  return (
    <BaseTabs.List
      ref={ref}
      activateOnFocus={activateOnFocus ?? activationMode === "automatic"}
      className={cx("zui-tabs__list", className)}
      {...rest}
    />
  );
});

TabsList.displayName = "TabsList";

export type TabsTriggerOwnProps = ComponentPropsWithoutRef<typeof BaseTabs.Tab>;

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerOwnProps>(function TabsTrigger(
  { className, ...rest },
  ref
) {
  return <BaseTabs.Tab ref={ref} className={cx("zui-tabs__trigger", className)} {...rest} />;
});

TabsTrigger.displayName = "TabsTrigger";

export type TabsIndicatorOwnProps = ComponentPropsWithoutRef<typeof BaseTabs.Indicator>;

export const TabsIndicator = forwardRef<HTMLSpanElement, TabsIndicatorOwnProps>(function TabsIndicator(
  { className, ...rest },
  ref
) {
  return (
    <BaseTabs.Indicator ref={ref} className={cx("zui-tabs__indicator", className)} {...rest} />
  );
});

TabsIndicator.displayName = "TabsIndicator";

export type TabsContentOwnProps = ComponentPropsWithoutRef<typeof BaseTabs.Panel> & {
  lazyMount?: boolean;
  unmountOnExit?: boolean;
};

export const TabsContent = forwardRef<HTMLDivElement, TabsContentOwnProps>(function TabsContent(
  { className, keepMounted, lazyMount = false, unmountOnExit = true, value, ...rest },
  ref
) {
  const { activeValue, mountedValues } = useTabsStyleContext();
  const shouldRender = !lazyMount || mountedValues.has(value) || activeValue === value;

  if (!shouldRender) {
    return null;
  }

  return (
    <BaseTabs.Panel
      ref={ref}
      className={cx("zui-tabs__content", className)}
      keepMounted={keepMounted ?? !unmountOnExit}
      value={value}
      {...rest}
    />
  );
});

TabsContent.displayName = "TabsContent";

export type TabsContentGroupOwnProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};

export const TabsContentGroup = forwardRef<HTMLDivElement, TabsContentGroupOwnProps>(
  function TabsContentGroup({ className, ...rest }, ref) {
    return <div ref={ref} className={cx("zui-tabs__content-group", className)} {...rest} />;
  }
);

TabsContentGroup.displayName = "TabsContentGroup";

export const TabsParts = {
  Content: TabsContent,
  ContentGroup: TabsContentGroup,
  Indicator: TabsIndicator,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger
};

export const Tabs = TabsParts;

/** @deprecated Use `TabsContent` */
export const TabsPanel = TabsContent;

/** @deprecated Use `TabsTrigger` */
export const TabsTab = TabsTrigger;

export type TabsRootProps = TabsRootOwnProps;
export type TabsListProps = TabsListOwnProps;
export type TabsTriggerProps = TabsTriggerOwnProps;
export type TabsContentProps = TabsContentOwnProps;
export type TabsIndicatorProps = TabsIndicatorOwnProps;
