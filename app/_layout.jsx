import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen 
      name="index"
      options={{ title: "Index",headerShown: false }}/>
      <Stack.Screen 
      name="schedules"
      options={{ title: "Schedules",headerShown: false }}/>
    </Stack>
  );
}
