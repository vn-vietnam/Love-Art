import { View, StyleSheet, Button, Pressable, Text } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { useRouter } from "expo-router";

const NotFoundScreen = () => {
	const animation = useRef(null);
	const router = useRouter();
	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				ref={animation}
				style={{
					width: "100%",
					height: "50%",
				}}
				source={require("@/assets/animations/41.json")}
			/>
			<View>
				<Pressable
					style={{
						backgroundColor: "#104728",
						borderRadius: 20,
					}}
					onPress={() => router.back()}
				>
					<Text
						style={{
							color: "white",
							paddingVertical: 10,
							paddingHorizontal: 20,
							fontSize: 14,
							fontWeight: 500,
						}}
					>
						Back
					</Text>
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	animationContainer: {
		backgroundColor: "#eafaf1",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	buttonContainer: {
		paddingTop: 20,
	},
});
export default NotFoundScreen;
