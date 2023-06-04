import { Pressable, StyleSheet, Text } from "react-native";

export default function ButtonChangeAuthorization({title}) {
	return (
		<>
			<Pressable>
        <Text style={styles.textChangeAuthorization}>{title}</Text>
			</Pressable>
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