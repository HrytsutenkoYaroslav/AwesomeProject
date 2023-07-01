import { StyleSheet, Text, View } from "react-native";

import SubmitButton from "./SubmitButton";
import ButtonChangeAuthorization from "./ButtonChangeAuthorization";
import BackgroundImage from "./BackgroundImage";
import UserPhoto from "./UserPhoto";

export default function AuthorizationForm({
	title,
	buttonTitle,
	changeAuthorizationTitle,
	children,
}) {
	return (
		<>
			<BackgroundImage />
			<View
				style={[
					styles.container,
					{
						paddingTop: title === "Реєстрація" ? 92 : 32,
						paddingBottom: title === "Реєстрація" ? 78 : 144,
					},
				]}
			>
				{title === "Реєстрація" && <UserPhoto />}
				<Text style={styles.title}>{title}</Text>
				<View style={styles.inputsList}>{children}</View>

				<SubmitButton title={buttonTitle} />
				<ButtonChangeAuthorization title={changeAuthorizationTitle} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		width: "100%",

		display: "flex",
		alignItems: "center",

		paddingBottom: 78,
		paddingLeft: 16,
		paddingRight: 16,

		backgroundColor: "#fff",

		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	title: {
		fontFamily: "Roboto-Medium",
		color: "#212121",
		fontSize: 30,
		marginBottom: 32,
	},

	inputsList: {
		display: "flex",
		alignItems: "stretch",
		gap: 16,

		marginBottom: 43,

		width: "100%",
	},
});
