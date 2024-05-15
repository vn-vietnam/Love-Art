import FontAwesome from "@expo/vector-icons/FontAwesome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
	initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		OfficeCodePro: require("../assets/fonts/OfficeCodePro-Light.otf"),
		...FontAwesome.font,
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			setTimeout(() => {
				SplashScreen.hideAsync();
			}, 2000);
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="[id]"
					options={{
						presentation: "modal",
						headerStyle: {
							backgroundColor: "#eafaf1",
						},
						headerRight: () => (
							<View>
								<Image
									source={require("@/assets/images/icon.png")}
									style={{
										width: 30,
										height: 30,
										borderRadius: 100,
										marginLeft: 15,
									}}
								/>
							</View>
						),
						headerTitle: "",
					}}
				/>
				<Stack.Screen name="+not-found" options={{ headerShown: false }} />
			</Stack>
		</QueryClientProvider>
	);
}
