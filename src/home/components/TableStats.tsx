import React, { useMemo } from "react"
import { Column } from "react-table"
import { SummaryResponse, Countries } from "../../core/models/SummaryResponse"
import Table from "../../core/shared/Table"

interface Props {
	data: SummaryResponse
}

const TableStats = ({ data }: Props) => {
	const columns = useMemo<readonly Column<Countries>[]>(
		() =>
			[
				{
					Header: "Country",
					accessor: "Country",
					Footer: <b>Total:</b>
				},
				{
					Header: "Country Code",
					accessor: "CountryCode",
					Footer: "-"
				},
				{
					Header: "New Confirmed",
					accessor: "NewConfirmed",
					Footer: info => {
						// Only calculate total new confirmed if rows change
						const total = React.useMemo(
						  () => info.rows.reduce((sum, row) => row.values.NewConfirmed + sum, 0),
						  [info.rows]
						)
		  
						return <>{total}</>
					  },
				},
				{
					Header: "Total Confirmed",
					accessor: "TotalConfirmed",
					Footer: info => {
						// Only calculate total confirmed if rows change
						const total = React.useMemo(
						  () => info.rows.reduce((sum, row) => row.values.TotalConfirmed + sum, 0),
						  [info.rows]
						)
		  
						return <>{total}</>
					  },
				},
				{
					Header: "New Deaths",
					accessor: "NewDeaths",
					Footer: info => {
						// Only calculate total new deaths if rows change
						const total = React.useMemo(
						  () => info.rows.reduce((sum, row) => row.values.NewDeaths + sum, 0),
						  [info.rows]
						)
		  
						return <>{total}</>
					  },
				},
				{
					Header: "Total Deaths",
					accessor: "TotalDeaths",
					Footer: info => {
						// Only calculate total deaths if rows change
						const total = React.useMemo(
						  () => info.rows.reduce((sum, row) => row.values.TotalDeaths + sum, 0),
						  [info.rows]
						)
		  
						return <>{total}</>
					  },
				},
				{
					Header: "New Recovered",
					accessor: "NewRecovered",
					Footer: info => {
						// Only calculate total new recovered if rows change
						const total = React.useMemo(
						  () => info.rows.reduce((sum, row) => row.values.NewRecovered + sum, 0),
						  [info.rows]
						)
		  
						return <>{total}</>
					  },
				},
				{
					Header: "Total Recovered",
					accessor: "TotalRecovered",
					Footer: info => {
						// Only calculate total recovered if rows change
						const total = React.useMemo(
						  () => info.rows.reduce((sum, row) => row.values.TotalRecovered + sum, 0),
						  [info.rows]
						)
		  
						return <>{total}</>
					  },
				},
			] as const,
		[]
	)

	const tableData = useMemo(() => data.Countries, [data])

	return <Table columns={columns} data={tableData} />
}

export default TableStats
