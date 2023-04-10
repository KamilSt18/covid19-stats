import React, { useMemo, useState } from "react"
import { Column, useGlobalFilter, useRowSelect, useSortBy, useTable } from "react-table"
import { default as TableBs } from "react-bootstrap/Table"
import { Countries } from "../models/SummaryResponse"
import { Form, InputGroup } from "react-bootstrap"
import { InfoMessage } from "./InfoMessage"

type Props = {
	columns: readonly Column<Countries>[]
	data: Countries[]
}

const Table = ({ columns, data }: Props) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		footerGroups,
		state,
		setGlobalFilter
	} = useTable(
		{
			columns,
			data: data,
			initialState: { sortBy: [{ id: "TotalConfirmed", desc: true }] },
		},
		useGlobalFilter,
		useSortBy,
		useRowSelect,
	)

	const {globalFilter} = state

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setGlobalFilter(value)
	}

	return (
		<>
			<InputGroup className="my-3">
				<InputGroup.Text>Search by country</InputGroup.Text>
				<Form.Control
					aria-label="Country"
					value={globalFilter || ""}
					onChange={handleFilterChange}
				/>
			</InputGroup>
			{rows.length > 0 ? (
				<TableBs {...getTableProps()} striped bordered hover>
					<thead className="table-dark">
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()} style={{position: "sticky", top: 0}}>
								<th>#</th>
								{headerGroup.headers.map(column => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render("Header")}
										<span>
											{column.isSorted
												? column.isSortedDesc
													? " 🔽"
													: " 🔼"
												: ""}
										</span>
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row)
							return (
								<tr {...row.getRowProps()}>
									<td>{i + 1}</td>
									{row.cells.map(cell => {
										return (
											<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
										)
									})}
								</tr>
							)
						})}
					</tbody>
					<tfoot>
						{footerGroups.map(group => (
							<tr {...group.getFooterGroupProps()}>
								<td></td>
								{group.headers.map(column => (
									<td {...column.getFooterProps()}>
										{column.render("Footer")}
									</td>
								))}
							</tr>
						))}
					</tfoot>
				</TableBs>
			) : (
				<InfoMessage>No matching records found</InfoMessage>
			)}
		</>
	)
}

export default Table
