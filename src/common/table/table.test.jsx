import { fakerES_MX as faker } from '@faker-js/faker';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Table } from '.';

describe('Table', () => {
	test('should render keys as head cells', () => {
		const fakedata = generateFakeData(1);
		const keys = Object.keys(fakedata[0]);
		render(<Table list={fakedata} withSelect={false} />);

		const head0_1 = screen.getByText(keys[0]);
		const head0_2 = screen.getByText(keys[1]);
		const head0_3 = screen.getByText(keys[2]);

		expect(head0_1).toBeInTheDocument();
		expect(head0_2).toBeInTheDocument();
		expect(head0_3).toBeInTheDocument();
	});

	test('should render values as body cells', () => {
		const fakedata = generateFakeData(3);
		const rowOneFakeData = Object.values(fakedata[0]);
		const rowTwoFakeData = Object.values(fakedata[1]);
		const rowThreeFakeData = Object.values(fakedata[2]);

		render(<Table list={fakedata} withSelect={false} />);

		// eslint-disable-next-line no-unused-vars
		const [_, tableRowOne, tableRowTwo, tableRowThree] = screen.getAllByRole('row');

		const valuesRowOne = within(tableRowOne).getAllByRole('cell');
		const valuesRowTwo = within(tableRowTwo).getAllByRole('cell');
		const valuesRowThree = within(tableRowThree).getAllByRole('cell');

		valuesRowOne.forEach((cell, index) => {
			expect(cell.innerHTML).toBe(rowOneFakeData[index]);
		});

		valuesRowTwo.forEach((cell, index) => {
			expect(cell.innerHTML).toBe(rowTwoFakeData[index]);
		});

		valuesRowThree.forEach((cell, index) => {
			expect(cell.innerHTML).toBe(rowThreeFakeData[index]);
		});
	});

	test('should render selectable column', () => {
		const fakedata = generateFakeData(2);
		render(<Table list={fakedata} withSelect={true} />);

		const [tableRowOne, tableRowTwo] = screen.getAllByRole('row');
		const cellsRowOne = within(tableRowOne).getAllByRole('columnheader');
		const cellsRoTwo = within(tableRowTwo).getAllByRole('cell');

		expect(cellsRowOne[0]).toHaveTextContent('Selecc.');
		expect(cellsRoTwo[0]).toContainHTML('input');
	});
});

function generateFakeData(quantity) {
	const fakedata = [];

	for (let i = 0; i < quantity; i++) {
		const newFakeData = {
			codigo: faker.string.uuid(),
			nombre: faker.person.firstName(),
			descripcion: faker.company.buzzPhrase(),
		};
		fakedata.push(newFakeData);
	}

	return fakedata;
}
