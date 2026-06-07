import { useMemo, useState } from "react";
import { DayPicker, type Matcher } from "react-day-picker";
import { cx } from "@zed-ui/utils";
import { calendarClassNames } from "./calendarClassNames";

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;

export type CalendarOwnProps = {
  className?: string;
  disabled?: boolean;
  max?: Date;
  min?: Date;
  month?: Date;
  onMonthChange?: (month: Date) => void;
  onValueChange?: (value: Date | null) => void;
  value?: Date | null;
};

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function buildDisabledMatchers(disabled: boolean, min?: Date, max?: Date): Matcher | Matcher[] | boolean | undefined {
  if (disabled) return true;

  const matchers: Matcher[] = [];
  if (min) matchers.push({ before: startOfDay(min) });
  if (max) matchers.push({ after: startOfDay(max) });
  return matchers.length ? matchers : undefined;
}

export function Calendar({
  className,
  disabled = false,
  max,
  min,
  month: monthProp,
  onMonthChange,
  onValueChange,
  value = null
}: CalendarOwnProps) {
  const [uncontrolledMonth, setUncontrolledMonth] = useState(() => startOfMonth(value ?? new Date()));
  const visibleMonth = monthProp ? startOfMonth(monthProp) : uncontrolledMonth;
  const disabledDays = useMemo(() => buildDisabledMatchers(disabled, min, max), [disabled, min, max]);

  function handleMonthChange(next: Date) {
    const normalized = startOfMonth(next);
    onMonthChange?.(normalized);
    if (!monthProp) {
      setUncontrolledMonth(normalized);
    }
  }

  return (
    <DayPicker
      className={cx(className)}
      classNames={calendarClassNames}
      disableNavigation={disabled}
      disabled={disabledDays}
      formatters={{
        formatWeekdayName: (date) => WEEKDAY_LABELS[date.getDay()] ?? ""
      }}
      labels={{
        labelDayButton: (date) => date.toLocaleDateString()
      }}
      mode="single"
      navLayout="around"
      month={visibleMonth}
      selected={value ?? undefined}
      showOutsideDays={false}
      onMonthChange={handleMonthChange}
      onSelect={(date) => onValueChange?.(date ?? null)}
    />
  );
}

Calendar.displayName = "Calendar";
