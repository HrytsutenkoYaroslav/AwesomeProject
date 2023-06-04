import { useState } from "react";

import AuthorizationForm from "./AuthorizationForm";
import Input from "./Input";

export default function RegistrationScreen() {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<AuthorizationForm
				title="Реєстрація"
				buttonTitle="Зареєстуватися"
				changeAuthorizationTitle="Вже є акаунт? Увійти"
			>
				<Input placeholder="Логін" onChangeText={setLogin} value={login} />
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
