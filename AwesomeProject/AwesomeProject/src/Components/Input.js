import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, onChangeText, value }) {
	return (
		<TextInput
			style={styles.input}
			selectionColor="#FF6C00"
			placeholder={placeholder}
			onChangeText={onChangeText}
			value={value}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		fontFamily: "Roboto-Regular",

		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#E8E8E8",

		padding: 16,

		backgroundColor: "#F6F6F6",
	},
});
