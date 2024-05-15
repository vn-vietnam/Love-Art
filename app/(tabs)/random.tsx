import { checkApi } from "@/api";
import ImageGrid from "@/components/ImageGrid";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";

export default function TabTwoScreen() {
	const [images, setImages] = useState<any[]>([]);
	const [search, setSearch] = useState("");

	const fetchData = async () => {
		let res = await checkApi(search);

		setImages(res.hits);
	};

	useEffect(() => {
		fetchData();
	}, [search]);
	const handleSearch = (value: any) => {
		setSearch(value);
	};
	return (
		<Animated.ScrollView style={styles.container}>
			<View style={{ padding: 15 }}>
				<TextInput
					placeholder="Search"
					onChangeText={(value) => handleSearch(value)}
					style={{
						borderWidth: 1,
						padding: 5,
						borderRadius: 5,
						borderColor: "#25a35a",
					}}
				/>
			</View>
			<View>
				{images && images.length !== 0 ? (
					<ImageGrid images={images} />
				) : (
					<Loading />
				)}
			</View>
		</Animated.ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eafaf1",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
