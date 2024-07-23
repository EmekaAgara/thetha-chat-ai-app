import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // statusBarHidden={true}
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="home" options={{}} />
      <Stack.Screen name="chat" options={{}} />
    </Stack>
  );
}
