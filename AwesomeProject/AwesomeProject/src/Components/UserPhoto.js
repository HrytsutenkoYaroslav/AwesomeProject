import { Image, StyleSheet } from "react-native";

export default function UserPhoto() {
	return <Image style={styles.image} />;
}

const styles = StyleSheet.create({
	image: {
		position: "absolute",
		top: -60,

		width: 120,
		height: 120,

		backgroundColor: "#F6F6F6",

		borderRadius: 16,
	},
});
