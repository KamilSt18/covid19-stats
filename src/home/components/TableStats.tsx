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
				},
				{
					Header: "Country Code",
					accessor: "CountryCode",
				},
				{
					Header: "New Confirmed",
					accessor: "NewConfirmed",
				},
				{
					Header: "Total Confirmed",
					accessor: "TotalConfirmed",
				},
				{
					Header: "New Deaths",
					accessor: "NewDeaths",
				},
				{
					Header: "Total Deaths",
					accessor: "TotalDeaths",
				},
				{
					Header: "New Recovered",
					accessor: "NewRecovered",
				},
				{
					Header: "Total Recovered",
					accessor: "TotalRecovered",
				},
			] as const,
		[]
	)

	const tableData = useMemo(() => data.Countries, [data])

	return <Table columns={columns} data={tableData} />
}

export default TableStats
