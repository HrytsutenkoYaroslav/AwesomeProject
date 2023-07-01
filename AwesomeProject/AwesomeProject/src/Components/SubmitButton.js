import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function SubmitButton({ title }) {
	return (
		<>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>{title}</Text>
			</TouchableOpacity>
		</>
	);
}

const styles = StyleSheet.create({
	button: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		marginBottom: 16,

		width: "100%",
		height: 51,

		backgroundColor: "#FF6C00",

		borderRadius: 100,
	},

	buttonText: {
		fontFamily: "Roboto-Regular",

		fontSize: 16,
		color: "#FFFFFF",
	},
});
