import React from "react"
import { useParams } from "react-router-dom"
import { fetchTotalByCountry } from "../../core/services/Covid19API"
import { useQuery } from "react-query"
import { Loading } from "../../core/shared/Loading"
import { ErrorMessage } from "../../core/shared/ErrorMessage"
import LineChart from "../components/LineChart"

type Props = {}

const CountryView = (props: Props) => {
	const { code } = useParams()
	const {
		data: response,
		error,
		isLoading,
	} = useQuery(`total:${code}`, () => fetchTotalByCountry(code || ""))
	const data = React.useMemo(() => response, [response])

	const summaryByCountry = data?.at(-1)

	return (
		<>
			{isLoading && <Loading />}

			{error instanceof Error && <ErrorMessage>{error.message}</ErrorMessage>}

			{data && summaryByCountry && (
				<div>
					<img
						src={`https://flagsapi.com/${code}/shiny/64.png`}
						alt="Country flag"
					/>
					<p>CountryCode: {code}</p>
					<p>Country: {summaryByCountry.Country}</p>
					<p>Confirmed: {summaryByCountry.Confirmed}</p>
					<p>Deaths: {summaryByCountry.Deaths}</p>
					<p>Recovered: {summaryByCountry.Recovered}</p>
					<p>Active: {summaryByCountry.Active}</p>
					<p>Date: {summaryByCountry.Date}</p>
                    <h2>Total Coronavirus Cases in {summaryByCountry.Country}</h2>
					<LineChart data={data} label="Total Coronavirus Cases" />
				</div>
			)}
		</>
	)
}

export default CountryView
