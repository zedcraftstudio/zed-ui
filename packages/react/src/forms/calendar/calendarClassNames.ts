import { DayFlag, getDefaultClassNames, SelectionState, UI } from "react-day-picker";

export const calendarClassNames = {
  ...getDefaultClassNames(),
  [UI.Root]: "zui-calendar",
  [UI.Months]: "zui-calendar__months",
  [UI.Month]: "zui-calendar__month",
  [UI.MonthCaption]: "zui-calendar__header",
  [UI.CaptionLabel]: "zui-calendar__label",
  [UI.Nav]: "zui-calendar__nav-bar",
  [UI.PreviousMonthButton]: "zui-calendar__nav",
  [UI.NextMonthButton]: "zui-calendar__nav",
  [UI.Chevron]: "zui-calendar__chevron",
  [UI.MonthGrid]: "zui-calendar__grid",
  [UI.Weekdays]: "zui-calendar__weekdays",
  [UI.Weekday]: "zui-calendar__weekday",
  [UI.Weeks]: "zui-calendar__weeks",
  [UI.Week]: "zui-calendar__week",
  [UI.Day]: "zui-calendar__day-cell",
  [UI.DayButton]: "zui-calendar__day",
  [SelectionState.selected]: "zui-calendar__day--selected",
  [DayFlag.disabled]: "zui-calendar__day--disabled",
  [DayFlag.hidden]: "zui-calendar__day--hidden",
  [DayFlag.outside]: "zui-calendar__day--outside",
  [DayFlag.today]: "zui-calendar__day--today"
};
