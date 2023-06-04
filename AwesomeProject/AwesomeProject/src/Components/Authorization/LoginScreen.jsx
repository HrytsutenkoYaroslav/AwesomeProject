import { useState } from "react";

import AuthorizationForm from "./AuthorizationForm";
import Input from "./Input";

export default function LoginScreen() {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<AuthorizationForm
				title="Увійти"
				buttonTitle="Увійти"
				changeAuthorizationTitle="Немає акаунту? Зареєструватися"
			>
				<Input
					placeholder="Адреса електронної пошти"
					onChangeText={setEmail}
					value={email}
				/>
				<Input
					placeholder="Пароль"
					onChangeText={setPassword}
					value={password}
				/>
			</AuthorizationForm>
		</>
	);
}
