import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { cx } from "@zed-ui/utils";
import { Input } from "../../forms/input/Input";
import {
  DialogBackdrop,
  DialogPopup,
  DialogPortal,
  DialogRoot,
  DialogViewport
} from "../dialog/Dialog";

export type CommandPaletteItem = {
  disabled?: boolean;
  group?: string;
  id: string;
  keywords?: string[];
  label: ReactNode;
  onSelect?: () => void;
};

export type CommandPaletteOwnProps = {
  emptyMessage?: string;
  items: CommandPaletteItem[];
  onOpenChange: (open: boolean) => void;
  open: boolean;
  placeholder?: string;
};

function matchesQuery(item: CommandPaletteItem, query: string): boolean {
  if (!query) return true;
  const haystack = [
    typeof item.label === "string" ? item.label : "",
    ...(item.keywords ?? [])
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export function CommandPalette({
  emptyMessage = "No commands found.",
  items,
  onOpenChange,
  open,
  placeholder = "Search commands…"
}: CommandPaletteOwnProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(
    () => items.filter((item) => matchesQuery(item, query.trim().toLowerCase())),
    [items, query]
  );

  const groups = useMemo(() => {
    const map = new Map<string, CommandPaletteItem[]>();
    for (const item of filteredItems) {
      const group = item.group ?? "Commands";
      const existing = map.get(group) ?? [];
      existing.push(item);
      map.set(group, existing);
    }
    return [...map.entries()];
  }, [filteredItems]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  function selectItem(item: CommandPaletteItem) {
    if (item.disabled) return;
    item.onSelect?.();
    onOpenChange(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, Math.max(filteredItems.length - 1, 0)));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const item = filteredItems[activeIndex];
      if (item) selectItem(item);
    }
  }

  let itemIndex = -1;

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogBackdrop />
        <DialogViewport>
          <DialogPopup className="zui-command-palette__popup">
            <Input
              ref={inputRef}
              aria-autocomplete="list"
              aria-controls="zui-command-palette-list"
              className="zui-command-palette__input"
              placeholder={placeholder}
              role="combobox"
              value={query}
              onChange={(event) => setQuery(event.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              id="zui-command-palette-list"
              className="zui-command-palette__list"
              role="listbox"
            >
              {filteredItems.length === 0 ? (
                <div className="zui-command-palette__empty">{emptyMessage}</div>
              ) : (
                groups.map(([group, groupItems]) => (
                  <div key={group} className="zui-command-palette__group">
                    <div className="zui-command-palette__group-label">{group}</div>
                    {groupItems.map((item) => {
                      itemIndex += 1;
                      const currentIndex = itemIndex;
                      const isActive = currentIndex === activeIndex;

                      return (
                        <button
                          key={item.id}
                          aria-selected={isActive}
                          className={cx("zui-command-palette__item", isActive && "zui-command-palette__item--active")}
                          disabled={item.disabled}
                          role="option"
                          type="button"
                          onClick={() => selectItem(item)}
                          onMouseEnter={() => setActiveIndex(currentIndex)}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </DialogPopup>
        </DialogViewport>
      </DialogPortal>
    </DialogRoot>
  );
}

CommandPalette.displayName = "CommandPalette";
