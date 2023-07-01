import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonChangeAuthorization({title}) {
	return (
		<>
			<TouchableOpacity>
        <Text style={styles.textChangeAuthorization}>{title}</Text>
			</TouchableOpacity>
		</>
	);
}
  
const styles = StyleSheet.create({
	textChangeAuthorization: {
		fontFamily: "Roboto-Regular",

		fontSize: 16,
		color: "#1B4371",
	},
});