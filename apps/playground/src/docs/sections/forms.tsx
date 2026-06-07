import { useState } from "react";
import {
  Calendar,
  Checkbox,
  CheckboxCard,
  Combobox,
  DatePicker,
  FormField,
  Input,
  MultiSelect,
  Radio,
  RadioCard,
  RadioGroup,
  NativeSelect,
  Select,
  Slider,
  Stack,
  Switch,
  SwitchCheckIcon,
  SwitchCloseIcon,
  Textarea
} from "@zed-ui/react";
import { ComponentDoc } from "../../components/ComponentDoc";
import { DocExample } from "../../components/DocExample";
import { PLAN_OPTIONS, ROLE_OPTIONS, SKILL_OPTIONS, StatePreview } from "../shared";

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="7" cy="7" r="4" />
      <path d="M10 10l3 3" strokeLinecap="round" />
    </svg>
  );
}

function AtIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="8" cy="8" r="3" />
      <path d="M11 5v2a3 3 0 0 1-6 0" strokeLinecap="round" />
      <path d="M11 8v3" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M2.5 4.5h11v6h-3.5L6 13V10.5h-3.5v-6z" strokeLinejoin="round" />
    </svg>
  );
}

export function FormFieldSection() {
  return (
    <ComponentDoc
      id="form-field"
      title="FormField"
      description="Used to wrap inputs with label, description, and error text."
      usage={{
        importCode: `import { FormField, Input } from "@zed-ui/react"`,
        usageCode: `<FormField label="Email" required>
  <Input type="email" placeholder="you@example.com" />
</FormField>`,
        preview: (
          <FormField label="Email" required>
            <Input type="email" placeholder="you@example.com" />
          </FormField>
        )
      }}
    >
      <DocExample
        title="With description"
        code={`<FormField label="Username" description="Must be unique.">
  <Input placeholder="jane" />
</FormField>`}
      >
        <FormField label="Username" description="Must be unique.">
          <Input placeholder="jane" />
        </FormField>
      </DocExample>

      <DocExample
        title="With error"
        description="Pass error to show a message and invalid styling on the control — no need to set invalid on Input separately."
        code={`<FormField label="Email" error="Enter a valid email.">
  <Input type="email" placeholder="you@example.com" />
</FormField>`}
      >
        <FormField label="Email" error="Enter a valid email.">
          <Input type="email" placeholder="you@example.com" />
        </FormField>
      </DocExample>
    </ComponentDoc>
  );
}

export function InputSection() {
  const [value, setValue] = useState("");

  return (
    <ComponentDoc
      id="input"
      title="Input"
      description="Used to collect single-line text from the user. Supports outline, filled, flushed, and unstyled variants."
      usage={{
        description: "Pass variant for outline, filled, flushed, or unstyled field styles.",
        importCode: `import { Input, Stack } from "@zed-ui/react"`,
        usageCode: `<Input variant="outline" placeholder="Outline" />
<Input variant="filled" placeholder="Filled" />`,
        preview: (
          <Stack gap="3" style={{ width: "100%", maxWidth: "20rem" }}>
            <Input variant="outline" placeholder="Outline" />
            <Input variant="filled" placeholder="Filled" />
            <Input variant="flushed" placeholder="Flushed" />
            <Input variant="unstyled" placeholder="Unstyled" />
          </Stack>
        )
      }}
    >
      <DocExample
        title="Controlled"
        code={`<Input value={value} onChange={(e) => setValue(e.target.value)} />`}
        footer={<StatePreview value={value} />}
      >
        <Input placeholder="Type here…" value={value} onChange={(e) => setValue(e.target.value)} />
      </DocExample>

      <DocExample
        title="Variants"
        description="outline, filled, flushed, and unstyled field styles."
        code={`<Input variant="outline" placeholder="Outline" />
<Input variant="filled" placeholder="Filled" />
<Input variant="flushed" placeholder="Flushed" />
<Input variant="unstyled" placeholder="Unstyled" />`}
      >
        <Stack gap="3">
          <Input variant="outline" placeholder="Outline" />
          <Input variant="filled" placeholder="Filled" />
          <Input variant="flushed" placeholder="Flushed" />
          <Input variant="unstyled" placeholder="Unstyled" />
        </Stack>
      </DocExample>

      <DocExample
        title="With icons"
        description="Use startIcon and endIcon for leading or trailing affordances."
        code={`<Input startIcon={<SearchIcon size={16} />} placeholder="Search…" />
<Input startIcon={<AtIcon size={16} />} placeholder="you@example.com" />
<Input endIcon={<SearchIcon size={16} />} placeholder="Filter…" />`}
      >
        <Stack gap="3" style={{ width: "100%", maxWidth: "20rem" }}>
          <Input startIcon={<SearchIcon size={16} />} placeholder="Search…" />
          <Input startIcon={<AtIcon size={16} />} placeholder="you@example.com" />
          <Input endIcon={<SearchIcon size={16} />} placeholder="Filter…" />
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function TextareaSection() {
  const [value, setValue] = useState("");

  return (
    <ComponentDoc
      id="textarea"
      title="Textarea"
      description="Used to collect multi-line text from the user."
      usage={{
        importCode: `import { Textarea } from "@zed-ui/react"`,
        usageCode: `<Textarea rows={3} placeholder="Notes…" />`,
        preview: <Textarea rows={3} placeholder="Notes…" />
      }}
    >
      <DocExample
        title="Controlled"
        code={`<Textarea value={value} onChange={(e) => setValue(e.target.value)} rows={3} />`}
        footer={<StatePreview value={value} />}
      >
        <Textarea
          placeholder="Optional feedback…"
          rows={3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </DocExample>

      <DocExample
        title="With icons"
        description="Icons align to the top of the field for multi-line text."
        code={`<Textarea startIcon={<MessageIcon size={16} />} placeholder="Leave a comment…" rows={3} />
<Textarea endIcon={<AtIcon size={16} />} placeholder="Mention someone…" rows={3} />`}
      >
        <Stack gap="3" style={{ width: "100%", maxWidth: "20rem" }}>
          <Textarea startIcon={<MessageIcon size={16} />} placeholder="Leave a comment…" rows={3} />
          <Textarea endIcon={<AtIcon size={16} />} placeholder="Mention someone…" rows={3} />
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function SelectSection() {
  const [role, setRole] = useState("engineer");

  return (
    <ComponentDoc
      id="select"
      title="Select"
      description="Used to pick one option from a list. Powered by Base UI."
      usage={{
        importCode: `import { Select } from "@zed-ui/react"`,
        usageCode: `<Select
  options={[{ label: "A", value: "a" }]}
  value={value}
  onValueChange={setValue}
/>`,
        preview: (
          <Select options={ROLE_OPTIONS} value={role} onValueChange={(v) => setRole(v as string)} />
        )
      }}
    >
      <DocExample
        title="Role picker"
        code={`<Select options={options} value={role} onValueChange={setRole} />`}
        footer={<StatePreview value={role} />}
      >
        <Select options={ROLE_OPTIONS} value={role} onValueChange={(v) => setRole(v as string)} />
      </DocExample>
    </ComponentDoc>
  );
}

export function MultiSelectSection() {
  const [skills, setSkills] = useState<string[]>(["react", "typescript"]);

  return (
    <ComponentDoc
      id="multi-select"
      title="MultiSelect"
      description="Used to pick multiple options from a list."
      usage={{
        importCode: `import { MultiSelect } from "@zed-ui/react"`,
        usageCode: `<MultiSelect
  options={options}
  value={skills}
  onValueChange={setSkills}
  placeholder="Pick skills…"
/>`,
        preview: (
          <MultiSelect
            options={SKILL_OPTIONS}
            value={skills}
            placeholder="Pick skills…"
            onValueChange={setSkills}
          />
        )
      }}
    >
      <DocExample
        title="Skills"
        footer={<StatePreview value={skills} />}
        code={`<MultiSelect options={options} value={skills} onValueChange={setSkills} />`}
      >
        <MultiSelect
          options={SKILL_OPTIONS}
          value={skills}
          placeholder="Pick skills…"
          onValueChange={setSkills}
        />
      </DocExample>
    </ComponentDoc>
  );
}

export function CheckboxSection() {
  const [checked, setChecked] = useState(false);
  const [weekdays, setWeekdays] = useState<string[]>(["mon", "tue"]);
  const [frameworks, setFrameworks] = useState<string[]>(["react"]);

  const weekdayOptions = [
    { value: "mon", label: "Monday" },
    { value: "tue", label: "Tuesday" },
    { value: "wed", label: "Wednesday" },
    { value: "thu", label: "Thursday" }
  ];

  const frameworkOptions = [
    {
      value: "react",
      label: "React",
      description: "Component-based UI library with a large ecosystem."
    },
    {
      value: "vue",
      label: "Vue",
      description: "Progressive framework for building user interfaces."
    },
    {
      value: "svelte",
      label: "Svelte",
      description: "Compile-time approach with less runtime overhead."
    }
  ];

  const allSelected = weekdays.length === weekdayOptions.length;
  const someSelected = weekdays.length > 0 && !allSelected;

  return (
    <ComponentDoc
      id="checkbox"
      title="Checkbox"
      description="Used when a user needs to select one or more options. Built on Base UI with styled control, label, and indicator."
      usage={{
        description:
          "Wrap with label text or pass the label prop. Use indeterminate for mixed selection states.",
        importCode: `import { Checkbox } from "@zed-ui/react"`,
        usageCode: `<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
  label="Accept terms and conditions"
/>`,
        preview: (
          <Checkbox
            checked={checked}
            onCheckedChange={(v) => setChecked(Boolean(v))}
            label="Accept terms and conditions"
          />
        )
      }}
    >
      <DocExample
        title="Controlled"
        footer={<StatePreview value={checked} />}
        code={`<Checkbox label="I agree to the terms" checked={checked} onCheckedChange={setChecked} />`}
      >
        <Checkbox
          checked={checked}
          onCheckedChange={(v) => setChecked(Boolean(v))}
          label="I agree to the terms"
        />
      </DocExample>

      <DocExample
        title="Variants"
        description="outline keeps a white box with a colored tick; solid fills the box; soft uses a light tinted fill."
        code={`<Checkbox defaultChecked variant="solid" label="Solid" />
<Checkbox defaultChecked variant="outline" label="Outline" />
<Checkbox defaultChecked variant="soft" label="Soft" />`}
      >
        <Stack gap="3">
          <Checkbox defaultChecked variant="solid" label="Solid" />
          <Checkbox defaultChecked variant="outline" label="Outline" />
          <Checkbox defaultChecked variant="soft" label="Soft" />
        </Stack>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<Checkbox defaultChecked color="primary" label="Primary" />
<Checkbox defaultChecked color="success" label="Success" />
<Checkbox defaultChecked color="danger" label="Danger" />`}
      >
        <Stack gap="3">
          <Checkbox defaultChecked color="primary" label="Primary" />
          <Checkbox defaultChecked color="success" label="Success" />
          <Checkbox defaultChecked color="danger" label="Danger" />
        </Stack>
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<Checkbox defaultChecked size="sm" label="Small" />
<Checkbox defaultChecked size="md" label="Medium" />
<Checkbox defaultChecked size="lg" label="Large" />`}
      >
        <Stack gap="3">
          <Checkbox defaultChecked size="sm" label="Small" />
          <Checkbox defaultChecked size="md" label="Medium" />
          <Checkbox defaultChecked size="lg" label="Large" />
        </Stack>
      </DocExample>

      <DocExample
        title="States"
        code={`<Checkbox defaultChecked disabled label="Disabled" />
<Checkbox invalid label="Invalid" />
<Checkbox defaultChecked readOnly label="Read only" />`}
      >
        <Stack gap="3">
          <Checkbox defaultChecked disabled label="Disabled" />
          <Checkbox invalid label="Invalid" />
          <Checkbox defaultChecked readOnly label="Read only" />
        </Stack>
      </DocExample>

      <DocExample
        title="Description"
        code={`<Checkbox
  label="I agree to the terms and conditions"
  description="By clicking this, you agree to our Terms and Privacy Policy."
/>`}
      >
        <Checkbox
          label="I agree to the terms and conditions"
          description="By clicking this, you agree to our Terms and Privacy Policy."
        />
      </DocExample>

      <DocExample
        title="Checkbox card"
        description="Select options displayed inside a card. Built on Base UI with a solid checkbox indicator."
        code={`import { CheckboxCard } from "@zed-ui/react"

<CheckboxCard
  label="React"
  description="Component-based UI library with a large ecosystem."
  defaultChecked
/>`}
      >
        <CheckboxCard
          defaultChecked
          description="Component-based UI library with a large ecosystem."
          label="React"
        />
      </DocExample>

      <DocExample
        title="Checkbox card group"
        description="Use multiple cards to pick one or more related options."
        code={frameworkOptions
          .map(
            (option) => `<CheckboxCard
  label="${option.label}"
  description="${option.description}"
  checked={frameworks.includes("${option.value}")}
  onCheckedChange={(next) => /* toggle "${option.value}" */}
/>`
          )
          .join("\n")}
        footer={<StatePreview value={frameworks} />}
      >
        <Stack gap="3" style={{ width: "100%", maxWidth: "24rem" }}>
          {frameworkOptions.map((option) => (
            <CheckboxCard
              key={option.value}
              checked={frameworks.includes(option.value)}
              description={option.description}
              label={option.label}
              onCheckedChange={(next) =>
                setFrameworks((current) =>
                  next
                    ? [...current, option.value]
                    : current.filter((value) => value !== option.value)
                )
              }
            />
          ))}
        </Stack>
      </DocExample>

      <DocExample
        title="Checkbox card variants"
        description="outline highlights the border when selected; subtle tints the background; solid fills the card."
        code={`<CheckboxCard defaultChecked variant="outline" label="Outline" description="Border highlight" />
<CheckboxCard defaultChecked variant="subtle" label="Subtle" description="Soft background" />
<CheckboxCard defaultChecked variant="solid" label="Solid" description="Filled card" />`}
      >
        <Stack gap="3" style={{ width: "100%", maxWidth: "24rem" }}>
          <CheckboxCard
            defaultChecked
            description="Border highlight"
            label="Outline"
            variant="outline"
          />
          <CheckboxCard
            defaultChecked
            description="Soft background"
            label="Subtle"
            variant="subtle"
          />
          <CheckboxCard defaultChecked description="Filled card" label="Solid" variant="solid" />
        </Stack>
      </DocExample>

      <DocExample
        title="Indeterminate"
        description="Use indeterminate on a parent checkbox when some child options are selected."
        code={`const allSelected = selected.length === options.length;
const someSelected = selected.length > 0 && !allSelected;

<Checkbox
  checked={allSelected}
  indeterminate={someSelected}
  label="Weekdays"
  onCheckedChange={(next) => setSelected(next ? allValues : [])}
/>`}
        footer={<StatePreview value={weekdays} />}
      >
        <Stack gap="3">
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected}
            label="Weekdays"
            onCheckedChange={(next) =>
              setWeekdays(next ? weekdayOptions.map((option) => option.value) : [])
            }
          />
          <Stack gap="2" style={{ paddingInlineStart: "1.5rem" }}>
            {weekdayOptions.map((option) => (
              <Checkbox
                key={option.value}
                checked={weekdays.includes(option.value)}
                label={option.label}
                onCheckedChange={(next) =>
                  setWeekdays((current) =>
                    next
                      ? [...current, option.value]
                      : current.filter((value) => value !== option.value)
                  )
                }
              />
            ))}
          </Stack>
        </Stack>
      </DocExample>
    </ComponentDoc>
  );
}

export function SwitchSection() {
  const [notify, setNotify] = useState(true);
  const [trackOn, setTrackOn] = useState(false);
  const [thumbOn, setThumbOn] = useState(true);

  return (
    <ComponentDoc
      id="switch"
      title="Switch"
      description="Used to capture a binary on/off state. Built on Base UI with track, thumb, label, and theme tokens."
      usage={{
        description:
          "Pass label text via the label prop. Control state with checked and onCheckedChange.",
        importCode: `import { Switch } from "@zed-ui/react"`,
        usageCode: `<Switch
  checked={on}
  onCheckedChange={setOn}
  label="Activate notifications"
/>`,
        preview: (
          <Switch checked={notify} onCheckedChange={setNotify} label="Activate notifications" />
        )
      }}
    >
      <DocExample
        title="Controlled"
        footer={<StatePreview value={notify} />}
        code={`<Switch label="Email me updates" checked={notify} onCheckedChange={setNotify} />`}
      >
        <Switch checked={notify} onCheckedChange={setNotify} label="Email me updates" />
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<Switch defaultChecked size="sm" label="Small" />
<Switch defaultChecked size="md" label="Medium" />
<Switch defaultChecked size="lg" label="Large" />`}
      >
        <Stack gap="3">
          <Switch defaultChecked size="sm" label="Small" />
          <Switch defaultChecked size="md" label="Medium" />
          <Switch defaultChecked size="lg" label="Large" />
        </Stack>
      </DocExample>

      <DocExample
        title="Variants"
        description="solid fills the track with a smaller inset thumb; raised uses a thin recessed track and a larger thumb that sits above it."
        code={`<Switch variant="solid" />
<Switch variant="raised" />`}
      >
        <Stack direction="row" gap="4">
          <Switch variant="solid" />
          <Switch variant="raised" />
        </Stack>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<Switch defaultChecked color="primary" label="Primary" />
<Switch defaultChecked color="success" label="Success" />
<Switch defaultChecked color="danger" label="Danger" />`}
      >
        <Stack gap="3">
          <Switch defaultChecked color="primary" label="Primary" />
          <Switch defaultChecked color="success" label="Success" />
          <Switch defaultChecked color="danger" label="Danger" />
        </Stack>
      </DocExample>

      <DocExample
        title="Track indicator"
        description="Use trackLabel to show different labels inside the track for on and off states."
        footer={<StatePreview value={trackOn} />}
        code={`<Switch
  checked={on}
  onCheckedChange={setOn}
  label="Switch me"
  trackLabel={{ on: "On", off: "Off" }}
/>`}
      >
        <Switch
          checked={trackOn}
          onCheckedChange={setTrackOn}
          label="Switch me"
          trackLabel={{ on: "On", off: "Off" }}
        />
      </DocExample>

      <DocExample
        title="Thumb indicator"
        description="Use thumbLabel to add icons or labels inside the thumb."
        footer={<StatePreview value={thumbOn} />}
        code={`<Switch
  checked={on}
  onCheckedChange={setOn}
  label="Switch me"
  thumbLabel={{
    on: <SwitchCheckIcon />,
    off: <SwitchCloseIcon />
  }}
/>`}
      >
        <Switch
          checked={thumbOn}
          onCheckedChange={setThumbOn}
          label="Switch me"
          thumbLabel={{
            on: <SwitchCheckIcon />,
            off: <SwitchCloseIcon />
          }}
        />
      </DocExample>

      <DocExample
        title="Disabled"
        code={`<Switch defaultChecked disabled label="Activate notifications" />`}
      >
        <Switch defaultChecked disabled label="Activate notifications" />
      </DocExample>

      <DocExample title="Invalid" code={`<Switch invalid label="Activate notifications" />`}>
        <Switch invalid label="Activate notifications" />
      </DocExample>

      <DocExample
        title="With description"
        code={`<Switch
  defaultChecked
  description="Receive product updates and release notes."
  label="Email notifications"
/>`}
      >
        <Switch
          defaultChecked
          description="Receive product updates and release notes."
          label="Email notifications"
        />
      </DocExample>
    </ComponentDoc>
  );
}

export function RadioSection() {
  const [plan, setPlan] = useState("starter");

  return (
    <ComponentDoc
      id="radio"
      title="Radio"
      description="Used to select one option from a group. Built on Base UI with styled control, indicator dot, label, and theme tokens."
      usage={{
        description: "Wrap radios in RadioGroup and pass a unique value to each option.",
        importCode: `import { Radio, RadioGroup } from "@zed-ui/react"`,
        usageCode: `<RadioGroup value={plan} onValueChange={setPlan}>
  <Radio value="starter" label="Starter" />
  <Radio value="pro" label="Pro" />
</RadioGroup>`,
        preview: (
          <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)}>
            <Stack gap="2">
              {PLAN_OPTIONS.map((opt) => (
                <Radio key={opt.value} value={opt.value} label={opt.label} />
              ))}
            </Stack>
          </RadioGroup>
        )
      }}
    >
      <DocExample
        title="Controlled"
        footer={<StatePreview value={plan} />}
        code={`<RadioGroup value={plan} onValueChange={setPlan}>
  {options.map((opt) => (
    <Radio key={opt.value} value={opt.value} label={opt.label} />
  ))}
</RadioGroup>`}
      >
        <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)}>
          <Stack gap="2">
            {PLAN_OPTIONS.map((opt) => (
              <Radio key={opt.value} value={opt.value} label={opt.label} />
            ))}
          </Stack>
        </RadioGroup>
      </DocExample>

      <DocExample
        title="Variants"
        description="outline and solid invert when selected: solid fill with a contrast center dot. soft uses a tinted fill with a colored dot."
        code={`<RadioGroup defaultValue="solid">
  <Radio value="solid" variant="solid" label="Solid" />
</RadioGroup>
<RadioGroup defaultValue="outline">
  <Radio value="outline" variant="outline" label="Outline" />
</RadioGroup>
<RadioGroup defaultValue="soft">
  <Radio value="soft" variant="soft" label="Soft" />
</RadioGroup>`}
      >
        <Stack gap="3">
          <RadioGroup defaultValue="solid">
            <Radio value="solid" variant="solid" label="Solid" />
          </RadioGroup>
          <RadioGroup defaultValue="outline">
            <Radio value="outline" variant="outline" label="Outline" />
          </RadioGroup>
          <RadioGroup defaultValue="soft">
            <Radio value="soft" variant="soft" label="Soft" />
          </RadioGroup>
        </Stack>
      </DocExample>

      <DocExample
        title="Colors"
        code={`<RadioGroup defaultValue="primary">
  <Radio value="primary" color="primary" label="Primary" />
  <Radio value="success" color="success" label="Success" />
  <Radio value="danger" color="danger" label="Danger" />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="primary">
          <Stack gap="3">
            <Radio value="primary" color="primary" label="Primary" />
            <Radio value="success" color="success" label="Success" />
            <Radio value="danger" color="danger" label="Danger" />
          </Stack>
        </RadioGroup>
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<RadioGroup defaultValue="md">
  <Radio value="sm" size="sm" label="Small" />
  <Radio value="md" size="md" label="Medium" />
  <Radio value="lg" size="lg" label="Large" />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="md">
          <Stack gap="3">
            <Radio value="sm" size="sm" label="Small" />
            <Radio value="md" size="md" label="Medium" />
            <Radio value="lg" size="lg" label="Large" />
          </Stack>
        </RadioGroup>
      </DocExample>

      <DocExample
        title="States"
        code={`<RadioGroup defaultValue="disabled">
  <Radio value="disabled" defaultChecked disabled label="Disabled" />
  <Radio value="invalid" invalid label="Invalid" />
  <Radio
    value="desc"
    description="Best for teams getting started."
    label="Starter plan"
  />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="disabled">
          <Stack gap="3">
            <Radio value="disabled" disabled label="Disabled" />
            <Radio value="invalid" invalid label="Invalid" />
            <Radio
              value="desc"
              description="Best for teams getting started."
              label="Starter plan"
            />
          </Stack>
        </RadioGroup>
      </DocExample>

      <DocExample
        title="Radio card"
        description="Select one option displayed inside a card. Must be used inside RadioGroup."
        code={`import { RadioCard, RadioGroup } from "@zed-ui/react"

<RadioGroup defaultValue="react">
  <RadioCard
    value="react"
    label="React"
    description="Component-based UI library with a large ecosystem."
  />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="react">
          <RadioCard
            description="Component-based UI library with a large ecosystem."
            label="React"
            value="react"
          />
        </RadioGroup>
      </DocExample>

      <DocExample
        title="Radio card group"
        description="Use multiple cards to pick a single option from related choices."
        code={`<RadioGroup value={plan} onValueChange={setPlan}>
  {options.map((option) => (
    <RadioCard
      key={option.value}
      value={option.value}
      label={option.label}
      description={option.description}
    />
  ))}
</RadioGroup>`}
        footer={<StatePreview value={plan} />}
      >
        <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)}>
          <Stack gap="3" style={{ width: "100%", maxWidth: "24rem" }}>
            <RadioCard
              description="For individuals and small teams getting started."
              label="Starter"
              value="starter"
            />
            <RadioCard
              description="For growing teams that need more capacity."
              label="Pro"
              value="pro"
            />
            <RadioCard
              description="For organizations with advanced requirements."
              label="Enterprise"
              value="enterprise"
            />
          </Stack>
        </RadioGroup>
      </DocExample>

      <DocExample
        title="Radio card variants"
        description="outline highlights the border when selected; subtle tints the background; solid fills the card."
        code={`<RadioGroup defaultValue="outline">
  <RadioCard value="outline" variant="outline" label="Outline" description="Border highlight" />
  <RadioCard value="subtle" variant="subtle" label="Subtle" description="Soft background" />
  <RadioCard value="solid" variant="solid" label="Solid" description="Filled card" />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="outline">
          <Stack gap="3" style={{ width: "100%", maxWidth: "24rem" }}>
            <RadioCard
              description="Border highlight"
              label="Outline"
              value="outline"
              variant="outline"
            />
            <RadioCard
              description="Soft background"
              label="Subtle"
              value="subtle"
              variant="subtle"
            />
            <RadioCard description="Filled card" label="Solid" value="solid" variant="solid" />
          </Stack>
        </RadioGroup>
      </DocExample>

      <DocExample
        title="Horizontal"
        code={`<RadioGroup defaultValue="starter" orientation="horizontal">
  <Radio value="starter" label="Starter" />
  <Radio value="pro" label="Pro" />
  <Radio value="enterprise" label="Enterprise" />
</RadioGroup>`}
      >
        <RadioGroup defaultValue="starter" orientation="horizontal">
          <Radio value="starter" label="Starter" />
          <Radio value="pro" label="Pro" />
          <Radio value="enterprise" label="Enterprise" />
        </RadioGroup>
      </DocExample>
    </ComponentDoc>
  );
}

export function SliderSection() {
  return (
    <ComponentDoc
      id="slider"
      title="Slider"
      description="Range control for selecting a numeric value."
      usage={{
        importCode: `import { Slider } from "@zed-ui/react"`,
        usageCode: `<Slider defaultValue={40} label="Volume" showValue />`,
        preview: <Slider defaultValue={40} label="Volume" showValue />
      }}
    />
  );
}

export function NativeSelectSection() {
  return (
    <ComponentDoc
      id="native-select"
      title="NativeSelect"
      description="Deprecated native HTML select. Prefer Select or MultiSelect."
      usage={{
        importCode: `import { NativeSelect } from "@zed-ui/react"`,
        usageCode: `<NativeSelect options={[{ value: "a", label: "Option A" }]} placeholder="Choose…" />`,
        preview: (
          <NativeSelect
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" }
            ]}
            placeholder="Choose…"
          />
        )
      }}
    />
  );
}

const FRAMEWORK_OPTIONS = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular", disabled: true }
];

export function ComboboxSection() {
  const [framework, setFramework] = useState("react");

  return (
    <ComponentDoc
      id="combobox"
      title="Combobox"
      description="Filterable select for long option lists. Built on Base UI Combobox."
      usage={{
        importCode: `import { useState } from "react";
import { Combobox } from "@zed-ui/react"`,
        usageCode: `const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" }
];
const [value, setValue] = useState("react");

<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  placeholder="Search frameworks…"
/>`,
        preview: (
          <Combobox
            defaultValue="react"
            options={FRAMEWORK_OPTIONS}
            placeholder="Search frameworks…"
          />
        )
      }}
    >
      <DocExample
        title="Controlled"
        code={`const [value, setValue] = useState("react");

<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  placeholder="Search frameworks…"
/>`}
        footer={<StatePreview value={framework} />}
      >
        <Combobox
          options={FRAMEWORK_OPTIONS}
          placeholder="Search frameworks…"
          value={framework}
          onValueChange={(next) => setFramework(next ?? "")}
        />
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<Combobox size="sm" options={options} placeholder="sm" />
<Combobox size="md" options={options} placeholder="md" />
<Combobox size="lg" options={options} placeholder="lg" />`}
      >
        <Stack gap="3" style={{ maxWidth: "20rem" }}>
          <Combobox options={FRAMEWORK_OPTIONS} placeholder="Small" size="sm" />
          <Combobox
            defaultValue="react"
            options={FRAMEWORK_OPTIONS}
            placeholder="Medium"
            size="md"
          />
          <Combobox options={FRAMEWORK_OPTIONS} placeholder="Large" size="lg" />
        </Stack>
      </DocExample>

      <DocExample
        title="Invalid"
        code={`<Combobox invalid options={options} placeholder="Choose…" />`}
      >
        <Combobox invalid options={FRAMEWORK_OPTIONS} placeholder="Choose framework" />
      </DocExample>

      <DocExample
        title="Disabled options"
        code={`<Combobox options={[{ label: "Angular", value: "angular", disabled: true }, …]} />`}
      >
        <Combobox options={FRAMEWORK_OPTIONS} placeholder="Angular is disabled" />
      </DocExample>

      <DocExample
        title="Inside FormField"
        code={`<FormField label="Framework" required>
  <Combobox options={options} placeholder="Search…" />
</FormField>`}
      >
        <FormField description="Type to filter the list." label="Framework" required>
          <Combobox options={FRAMEWORK_OPTIONS} placeholder="Search frameworks…" />
        </FormField>
      </DocExample>
    </ComponentDoc>
  );
}

export function CalendarSection() {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <ComponentDoc
      id="calendar"
      title="Calendar"
      description="Month grid for picking a single date."
      usage={{
        importCode: `import { useState } from "react";
import { Calendar } from "@zed-ui/react"`,
        usageCode: `const [value, setValue] = useState<Date | null>(new Date());

<Calendar value={value} onValueChange={setValue} />`,
        preview: <Calendar value={value} onValueChange={setValue} />
      }}
    >
      <DocExample
        title="Controlled"
        code={`const [value, setValue] = useState<Date | null>(new Date());

<Calendar value={value} onValueChange={setValue} />`}
        footer={<StatePreview value={value?.toLocaleDateString() ?? "null"} />}
      >
        <Calendar value={value} onValueChange={setValue} />
      </DocExample>

      <DocExample
        title="Min and max"
        description="Dates outside the range are disabled."
        code={`<Calendar
  min={new Date(2026, 5, 1)}
  max={new Date(2026, 5, 30)}
  value={value}
  onValueChange={setValue}
/>`}
      >
        <Calendar
          max={new Date(2026, 5, 30)}
          min={new Date(2026, 5, 1)}
          value={value}
          onValueChange={setValue}
        />
      </DocExample>

      <DocExample
        title="Disabled"
        code={`<Calendar disabled value={value} onValueChange={setValue} />`}
      >
        <Calendar disabled value={value} onValueChange={setValue} />
      </DocExample>
    </ComponentDoc>
  );
}

export function DatePickerSection() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <ComponentDoc
      id="date-picker"
      title="DatePicker"
      description="Button trigger that opens a calendar popup."
      usage={{
        importCode: `import { useState } from "react";
import { DatePicker } from "@zed-ui/react"`,
        usageCode: `const [value, setValue] = useState<Date | null>(null);

<DatePicker value={value} onValueChange={setValue} placeholder="Select date" />`,
        preview: <DatePicker value={value} onValueChange={setValue} />
      }}
    >
      <DocExample
        title="Controlled"
        code={`const [value, setValue] = useState<Date | null>(null);

<DatePicker value={value} onValueChange={setValue} />`}
        footer={<StatePreview value={value?.toLocaleDateString() ?? "null"} />}
      >
        <DatePicker value={value} onValueChange={setValue} />
      </DocExample>

      <DocExample
        title="Sizes"
        code={`<DatePicker size="sm" value={value} onValueChange={setValue} />
<DatePicker size="md" value={value} onValueChange={setValue} />
<DatePicker size="lg" value={value} onValueChange={setValue} />`}
      >
        <Stack gap="3" style={{ maxWidth: "16rem" }}>
          <DatePicker size="sm" value={value} onValueChange={setValue} />
          <DatePicker size="md" value={value} onValueChange={setValue} />
          <DatePicker size="lg" value={value} onValueChange={setValue} />
        </Stack>
      </DocExample>

      <DocExample
        title="Disabled and invalid"
        code={`<DatePicker disabled placeholder="Unavailable" />
<DatePicker invalid placeholder="Required" />`}
      >
        <Stack gap="3" style={{ maxWidth: "16rem" }}>
          <DatePicker disabled placeholder="Unavailable" />
          <DatePicker invalid placeholder="Required" />
        </Stack>
      </DocExample>

      <DocExample
        title="Min and max"
        code={`<DatePicker
  min={new Date(2026, 0, 1)}
  max={new Date(2026, 11, 31)}
  value={value}
  onValueChange={setValue}
/>`}
      >
        <div style={{ maxWidth: "16rem" }}>
          <DatePicker
            max={new Date(2026, 11, 31)}
            min={new Date(2026, 0, 1)}
            value={value}
            onValueChange={setValue}
          />
        </div>
      </DocExample>

      <DocExample
        title="Inside FormField"
        code={`<FormField label="Start date" required>
  <DatePicker value={value} onValueChange={setValue} />
</FormField>`}
      >
        <FormField label="Start date" required style={{ maxWidth: "16rem" }}>
          <DatePicker value={value} onValueChange={setValue} />
        </FormField>
      </DocExample>
    </ComponentDoc>
  );
}
