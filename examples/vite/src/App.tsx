import {
  Box,
  Button,
  createTheme,
  Divider,
  FormField,
  Input,
  Link,
  Progress,
  Slider,
  Stack,
  Text,
  ThemeProvider
} from "@zed-ui/react";

const theme = createTheme({ colorScheme: "light", density: "comfortable" });

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box m="8" style={{ maxWidth: "28rem" }}>
        <Stack gap="6">
        <Text size="xl" weight="semibold">
          Zed UI + Vite
        </Text>
        <Text color="muted">
          Minimal example app. See{" "}
          <Link external href="https://zed-ui.zedcraftstudio.com">
            docs
          </Link>
          .
        </Text>
        <Divider />
        <FormField description="Your public display name" label="Name" required>
          <Input placeholder="Jane Doe" />
        </FormField>
        <Slider defaultValue={50} label="Volume" showValue />
        <Progress label="Setup" showValue value={75} />
        <Button color="primary">Get started</Button>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
