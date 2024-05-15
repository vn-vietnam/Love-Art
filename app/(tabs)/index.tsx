import { callApi } from "@/api";
import Categories from "@/components/Categories";
import ImageGrid from "@/components/ImageGrid";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

export default function TabOneScreen() {
	const [activeCate, setActiveCate] = useState<any>(null);
	const [images, setImages] = useState<any[]>([]);
	const handleCate = (cate: any) => {
		setActiveCate(cate);
	};
	const fetchData = async (num: any) => {
		let res = await callApi(activeCate, num);
		setImages(res.hits);
	};
	useEffect(() => {
		fetchData(1);
	}, [activeCate]);
	return (
		<Animated.ScrollView style={styles.container}>
			<Categories activeCate={activeCate} handleCate={handleCate} />
			<View style={{}}>
				{images.length !== 0 ? <ImageGrid images={images} /> : <Loading />}
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
