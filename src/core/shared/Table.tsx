import React, { useMemo, useState } from "react"
import { Column, useTable } from "react-table"
import { default as TableBs } from "react-bootstrap/Table"
import { Countries } from "../models/SummaryResponse"
import { Form, InputGroup } from "react-bootstrap"
import { InfoMessage } from "./InfoMessage"

type Props = {
	columns: readonly Column<Countries>[]
	data: Countries[]
}

const Table = ({ columns, data }: Props) => {
	const [filterInput, setFilterInput] = useState("")

	const filteredData = useMemo(() => {
		return data.filter(row =>
			row.Country.toLowerCase().includes(filterInput.toLowerCase())
		)
	}, [data, filterInput])

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		footerGroups,
	} = useTable({ columns, data: filteredData })

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value || ""
		setFilterInput(value)
	}

	return (
		<>
			<InputGroup className="my-3">
				<InputGroup.Text>Search by country</InputGroup.Text>
				<Form.Control
					aria-label="Country"
					value={filterInput}
					onChange={handleFilterChange}
				/>
			</InputGroup>
			{filteredData.length > 0 ? (<TableBs {...getTableProps()} striped bordered hover>
				<thead className="table-dark">
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
								})}
							</tr>
						)
					})}
				</tbody>
				<tfoot>
					{footerGroups.map(group => (
						<tr {...group.getFooterGroupProps()}>
							{group.headers.map(column => (
								<td {...column.getFooterProps()}>{column.render("Footer")}</td>
							))}
						</tr>
					))}
				</tfoot>
			</TableBs>) : <InfoMessage>No matching records found</InfoMessage>}
		</>
	)
}

export default Table
