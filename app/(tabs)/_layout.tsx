import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { BlurView } from "expo-blur";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#25a35a",
				tabBarBackground: () => (
					<BlurView
						tint={"extraLight"}
						intensity={100}
						style={{
							flex: 1,
							backgroundColor: "#beefd3",
						}}
					/>
				),
				tabBarStyle: {
					backgroundColor: "transparent",
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					elevation: 0,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerStyle: {
						backgroundColor: "#eafaf1",
					},
					headerLeft: () => (
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
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="random"
				options={{
					headerStyle: {
						backgroundColor: "#eafaf1",
					},
					headerLeft: () => (
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
					tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
				}}
			/>
		</Tabs>
	);
}
