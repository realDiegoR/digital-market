import { IconPlus, IconUser } from '@tabler/icons-react';
import { Form, FormInput } from '@/components';
import { Button, LinkCard, PageTitle, Wrapper } from '@/common/';

export const RootPage = () => {
	return (
		<>
			<PageTitle>Home</PageTitle>
			<Wrapper>
				<LinkCard
					href="/page"
					title="Agregar nuevo producto"
					icon={<IconPlus size={32} stroke={1} />}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</LinkCard>
				<Button variant="secondary" onClick={() => alert(2)} width="max-content">
					<IconUser /> Agregar producto
				</Button>
				<Form
					action="/roles/"
					defaultValues={{ codigo: '', nombre: '', email: 'pepe@a.com' }}
					onSubmit={(data) => console.log(data)}
				>
					<FormInput
						label="Código"
						type="number"
						name="codigo"
						required="Este campo es requerido"
						placeholder="12345"
					/>
					<FormInput label="Nombre" type="text" name="nombre" placeholder="diego" />
					<FormInput
						label="Email"
						type="email"
						name="email"
						readOnly
						pattern={{
							value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gi,
							message:
								'La dirección de correo electrónico no es válida. Por favor, ingresa una dirección de correo válida.',
						}}
					/>
					<Button type="submit">submit</Button>
				</Form>
			</Wrapper>
		</>
	);
};
