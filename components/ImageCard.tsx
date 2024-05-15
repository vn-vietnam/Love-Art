import { Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const ImageCard = ({ item, index }: any) => {
	const router = useRouter();
	const blurhash =
		"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
	return (
		<Pressable
			key={index}
			style={{ padding: 5 }}
			onPress={() => {
				router.push({ pathname: `/${item.id}`, params: item.id });
			}}
		>
			<Image
				style={{
					height: 350,
					width: "100%",
					borderRadius: 10,
				}}
				source={item?.webformatURL}
				placeholder={{ blurhash }}
				contentFit="cover"
				transition={1000}
			/>
		</Pressable>
	);
};

export default ImageCard;
