import { View, Text, Pressable, Share } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { getImage } from "@/api";
const SingleImage = () => {
	const params = useLocalSearchParams();
	const [images, setImages] = useState<any>();
	const fetchData = async (num: any) => {
		let res = await getImage(num);

		setImages(res.hits);
	};
	useEffect(() => {
		fetchData(params.id);
	}, []);
	const handleShare = async () => {
		await Share.share({
			message: images?.[0]?.webformatURL,
		});
	};
	const blurhash =
		"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				paddingTop: 50,
				backgroundColor: "#eafaf1",
			}}
		>
			<Image
				style={{
					height: 300,
					width: "90%",
					borderRadius: 10,
				}}
				source={images?.[0]?.webformatURL}
				placeholder={{ blurhash }}
				contentFit="cover"
				transition={1000}
			/>
			<Pressable
				onPress={handleShare}
				style={{
					padding: 12,
					paddingHorizontal: 15,
					borderWidth: 1,
					borderRadius: 5,
					borderCurve: "continuous",
					marginTop: 20,
				}}
			>
				<Text style={{ fontSize: 14, fontWeight: "500" }}>Share</Text>
			</Pressable>
		</View>
	);
};

export default SingleImage;
