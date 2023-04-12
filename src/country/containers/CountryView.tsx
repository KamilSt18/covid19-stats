import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchTotalByCountry } from "../../core/services/Covid19API"
import { useQuery } from "react-query"
import { Loading } from "../../core/shared/Loading"
import { ErrorMessage } from "../../core/shared/ErrorMessage"
import LineChart from "../components/LineChart"
import { totalCountryDatasets } from "../../core/services/totalCountryDatasets"
import SummaryCountry from "../components/SummaryCountry"
import { TitleContext } from "../../core/contexts/TitleContextProvider"

type Props = {}
const CountryView = (props: Props) => {
	const { defaultTitle, updateTitle } = useContext(TitleContext)
	const { code } = useParams()

	useEffect(() => {
		updateTitle(`${defaultTitle} - ${code}`)
	}, [code, defaultTitle, updateTitle])

	const {
		data: response,
		error,
		isLoading,
	} = useQuery(`total:${code}`, () =>
		fetchTotalByCountry(code?.toUpperCase() || "")
	)
	const data = React.useMemo(() => response, [response])

	const summaryByCountry = data?.at(-1)

	const labels = response?.map(el =>
		new Date(el.Date).toLocaleDateString("en-US")
	)

	let { totalCasesActiveDataset, totalRecoveredDeathsDataset } =
		totalCountryDatasets(response || [])

	return (
		<>
			{isLoading && <Loading />}

			{error instanceof Error && <ErrorMessage>{error.message}</ErrorMessage>}

			{summaryByCountry && labels && code && (
				<>
					<SummaryCountry
						summaryByCountry={summaryByCountry}
						code={code.toUpperCase()}
					/>

					<h2>Total Coronavirus Cases/Active in {summaryByCountry.Country}</h2>
					<LineChart dataset={totalCasesActiveDataset} labels={labels} />
					<h2>Total Recovered/Deaths in {summaryByCountry.Country}</h2>
					<LineChart dataset={totalRecoveredDeathsDataset} labels={labels} />
				</>
			)}
		</>
	)
}
export default CountryView
