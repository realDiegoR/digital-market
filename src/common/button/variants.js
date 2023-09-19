const baseStyles =
	'flex gap-2 py-2 px-5 text-black text-sm rounded-md transition duration-200 disabled:opacity-50';

export const widthStyles = {
	'max-content': 'w-max',
	full: 'w-full justify-center',
};

export const variantStyles = {
	primary: `${baseStyles} bg-brand-green hover:bg-[#0FDC68]`,
	secondary: `${baseStyles} bg-brand-yellow hover:bg-[#DCB129]`,
	terciary: `${baseStyles} bg-white border-2 border-solid border-black hover:bg-[#EEEEEE]`,
	danger: `${baseStyles} bg-white text-brand-red border-2 border-solid border-brand-red hover:bg-[#FCEFEF]`,
};
