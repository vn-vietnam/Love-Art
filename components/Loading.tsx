import { View, StyleSheet, Button } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
	const animation = useRef(null);

	return (
		<View style={styles.animationContainer}>
			<LottieView
				autoPlay
				loop
				ref={animation}
				style={{
					width: "80%",
					height: "50%",
				}}
				source={require("@/assets/animations/44.json")}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	animationContainer: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	buttonContainer: {
		paddingTop: 20,
	},
});
export default Loading;
