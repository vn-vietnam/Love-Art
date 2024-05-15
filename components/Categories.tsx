import { Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import { categories } from "@/constants/data";
import Animated, { FadeInRight } from "react-native-reanimated";

const Categories = ({ activeCate, handleCate }: any) => {
	return (
		<FlatList
			horizontal
			contentContainerStyle={styles.flatlistContainer}
			data={categories}
			keyExtractor={(item) => item}
			renderItem={({ item, index }) => (
				<CategoryItem
					title={item}
					index={index}
					isActive={activeCate === item}
					handleCate={handleCate}
				/>
			)}
		/>
	);
};
const CategoryItem = ({ title, index, isActive, handleCate }: any) => {
	return (
		<Animated.View
			key={index}
			entering={FadeInRight.delay(index * 200).duration(1000)}
		>
			<Pressable
				style={[
					styles.category,
					{
						backgroundColor: isActive ? "#25a35a" : "white",
						borderColor: isActive ? "gray" : "#25a35a",
					},
				]}
				onPress={() => handleCate(isActive ? null : title)}
			>
				<Text style={[styles.title, { color: isActive ? "white" : "#2ecc71" }]}>
					{title}
				</Text>
			</Pressable>
		</Animated.View>
	);
};
const styles = StyleSheet.create({
	flatlistContainer: {
		paddingHorizontal: 15,
		gap: 10,
		paddingVertical: 10,
	},
	category: {
		padding: 12,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 5,
		borderCurve: "continuous",
	},
	title: {
		fontSize: 14,
		fontWeight: "500",
	},
});

export default Categories;
