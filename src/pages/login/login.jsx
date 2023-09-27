import { Form, FormInput } from '@/components';
import { Button, PageTitle, Wrapper } from '@/common';

export const Login = () => {
	return (
		<Wrapper className="flex w-80 flex-col items-center gap-10 whitespace-nowrap py-10">
			<PageTitle>
				<span className="font-bold">Inicia Sesión</span>
			</PageTitle>
			<Form>
				<FormInput
					label="Nombre de usuario"
					type="text"
					name="username"
					placeholder="Nombre de usuario"
					style="underlined"
					required
				/>
				<FormInput
					label="Contraseña"
					type="password"
					name="password"
					placeholder="correo@ejemplo.com"
					style="underlined"
					required
				/>
				{/* Nombre de usuario
				Contraseña
				<input
					className="border-b-2 border-black focus:outline-none md:w-80"
					type="password"
				></input> */}
			</Form>
			<Button type="submit">Continuar</Button>
		</Wrapper>
	);
};
