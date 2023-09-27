import { Button, PageTitle, Wrapper } from '@/common';
import { Form, FormInput } from '@/components';

export const Login = () => {
	return (
		<Wrapper className="flex flex-col w-80 items-center whitespace-nowrap gap-10 py-10">
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
