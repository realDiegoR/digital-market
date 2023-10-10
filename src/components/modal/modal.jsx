import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Button } from '@/common/';

export const Modal = ({ children, title, onClose, open }) => {
	return (
		<Transition
			show={open}
			enter="transition-opacity duration-300 ease-in-out"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-300 ease-in-out"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			as={Fragment}
		>
			<Dialog
				onClose={onClose}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
			>
				<Transition.Child
					enter="transition-transform duration-300 ease-in-out"
					enterFrom="scale-95"
					enterTo="scale-100"
					leave="transition-transform duration-300 ease-in-out"
					leaveFrom="scale-100"
					leaveTo="scale-95"
					as={Fragment}
				>
					<Dialog.Panel className="w-5/6 max-w-lg space-y-5 rounded bg-white p-5">
						<Dialog.Title className="text-center text-lg sm:text-start">{title}</Dialog.Title>
						{children}
						<Button onClick={onClose} variant="terciary" width="full">
							Cerrar
						</Button>
					</Dialog.Panel>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
};
