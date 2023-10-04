import { Combobox } from '@headlessui/react';
import { IconCaretUpDown, IconCloudCheck } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { variantStyles } from './variants';

export const Autocomplete = ({
	data = [],
	filterFn = () => undefined,
	displayValueFn = () => undefined,
	style = 'box',
	name,
	label,
	placeholder,
	maxLength,
	pattern,
	minLength,
	max,
	min,
	required = 'Este campo es requerido.',
}) => {
	const [selected, setSelected] = useState('');
	const [query, setQuery] = useState('');

	const filteredData = query === '' ? data : data.filter(filterFn(query));
	const mappedData = filteredData.map(displayValueFn);

	const inputStyles = variantStyles[style] || variantStyles['box'];

	return (
		<label className="flex flex-col gap-1.5">
			<span className="text-sm font-bold">{label}</span>
			<Controller
				name={name}
				rules={{ maxLength, pattern, minLength, max, min, required }}
				render={({ field, fieldState: { error } }) => (
					<>
						<Combobox
							className="relative w-full"
							value={selected}
							onChange={setSelected}
							{...field}
							as="div"
						>
							<Combobox.Input
								className={inputStyles}
								displayValue={displayValueFn}
								onChange={(event) => setQuery(event.target.value)}
								placeholder={placeholder}
							/>
							<Combobox.Button className="absolute right-1.5 top-1.5">
								<IconCaretUpDown
									size={32}
									className="rounded-full p-1 hover:bg-gray-100"
									aria-hidden="true"
								/>
							</Combobox.Button>
							<Combobox.Options className="overflow-clip rounded-md py-1">
								{filteredData?.length === 0 && query !== '' ? (
									<div className="relative cursor-default select-none px-4 py-2 text-gray-700">
										No encontrado.
									</div>
								) : (
									filteredData?.map((client, index) => (
										<Combobox.Option
											key={client.id}
											className={({ active }) =>
												`relative cursor-default select-none py-2 pl-10 pr-4 ${
													active
														? 'border-t border-transparent bg-brand-green/25 '
														: 'border-t text-gray-900 first:border-transparent'
												}`
											}
											value={client}
										>
											{({ selected, active }) => (
												<>
													<span
														className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
													>
														{mappedData[index]}
													</span>
													{selected ? (
														<span
															className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																active ? 'text-white' : 'text-teal-600'
															}`}
														>
															<IconCloudCheck />{' '}
														</span>
													) : null}
												</>
											)}
										</Combobox.Option>
									))
								)}
							</Combobox.Options>
						</Combobox>
						{error?.message ? (
							<span className="block border border-red-300 bg-red-200/25 px-4 py-2 text-red-950">
								{error?.message}
							</span>
						) : null}
					</>
				)}
			/>
		</label>
	);
};

const createInputValidationSchema = (propType) =>
	PropTypes.shape({
		value: propType,
		message: PropTypes.string,
	});

Autocomplete.propTypes = {
	data: PropTypes.array.isRequired,
	filterFn: PropTypes.func.isRequired,
	displayValueFn: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	style: PropTypes.oneOf(['box', 'underlined']),
	required: PropTypes.oneOf([PropTypes.string, false]), // recibe el mensaje de error
	minLength: createInputValidationSchema(PropTypes.number),
	maxLength: createInputValidationSchema(PropTypes.number),
	min: createInputValidationSchema(PropTypes.number),
	max: createInputValidationSchema(PropTypes.number),
	pattern: createInputValidationSchema(PropTypes.object),
};
