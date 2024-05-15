import { View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";
const ImageGrid = ({ images }: any) => {
	return (
		<View
			style={{
				minHeight: 3,
			}}
		>
			<MasonryFlashList
				data={images}
				numColumns={2}
				contentContainerStyle={{
					paddingHorizontal: 15,
					paddingVertical: 10,
				}}
				renderItem={({ item, index }: any) => (
					<ImageCard item={item} index={index} />
				)}
				estimatedItemSize={200}
			/>
		</View>
	);
};

export default ImageGrid;
