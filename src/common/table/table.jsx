import PropTypes from 'prop-types';

export const Table = ({ list = [], withSelect = true, size = 'small' }) => {
	return (
		<table>
			<thead>
				<TableRow data={list[0]} type="head" withSelect={withSelect} size={size} />
			</thead>
			<tbody>
				{list.map((obj, index) => (
					<TableRow key={index} data={obj} withSelect={withSelect} size={size} />
				))}
			</tbody>
		</table>
	);
};

Table.propTypes = {
	list: PropTypes.array.isRequired,
	withSelect: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'big']).isRequired,
};

function TableRow({ type = 'body', withSelect, size, data }) {
	let entries;

	if (type === 'head') {
		entries = Object.keys(data);
	} else {
		entries = Object.values(data);
	}

	return (
		<tr>
			{withSelect && <SelectCell type={type} size={size} />}
			{entries.map((entry, index) => (
				<Cell key={index} size={size} type={type}>
					{entry}
				</Cell>
			))}
		</tr>
	);
}

TableRow.propTypes = {
	data: PropTypes.array.isRequired,
	type: PropTypes.oneOf(['head', 'body']),
	size: PropTypes.oneOf(['small', 'big']),
	withSelect: PropTypes.bool,
};

function Cell({ children, size = 'small', type = 'body' }) {
	const isString = typeof children === 'string';
	let hasWhiteSpaces;

	if (isString) {
		hasWhiteSpaces = children.includes(' '); // checkea si hay espacios en blanco (whitespaces) dentro del string
	}

	const breakWordStyles = hasWhiteSpaces ? '' : 'break-all';
	const sizeStyles = size === 'small' ? 'max-w-[25ch]' : 'max-w-[50ch]';

	if (type === 'head') {
		return (
			<th className={`border-2 border-black px-2 py-1 capitalize ${sizeStyles} ${breakWordStyles}`}>
				{children}
			</th>
		);
	}

	return (
		<td className={`border-2 border-black px-2 py-1 ${sizeStyles} ${breakWordStyles}`}>
			{children}
		</td>
	);
}

Cell.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.oneOf(['head', 'body']),
	size: PropTypes.oneOf(['small', 'big']),
};

function SelectCell({ type = 'body', size = 'small' }) {
	if (type === 'head') {
		return (
			<Cell size={size} type="head">
				Selecc.
			</Cell>
		);
	}

	return (
		<Cell type="body" size={size}>
			<input type="checkbox"></input>
		</Cell>
	);
}

SelectCell.propTypes = {
	type: PropTypes.oneOf(['head', 'body']),
	size: PropTypes.oneOf(['small', 'big']),
};
