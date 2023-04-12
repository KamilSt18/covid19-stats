import React, { useContext, useEffect } from "react"
import { useQuery } from "react-query"

import { Row } from "react-bootstrap"

import { fetchSummary } from "../../core/services/Covid19API"

import { Loading } from "../../core/shared/Loading"
import AlertStats from "../components/AlertStats"

import { ErrorMessage } from "../../core/shared/ErrorMessage"
import TableStats from "../components/TableStats"
import { TitleContext } from "../../core/contexts/TitleContextProvider"

type Props = {}

const HomeView = (props: Props) => {
	const { defaultTitle, updateTitle } = useContext(TitleContext)
	useEffect(() => {
		updateTitle(defaultTitle)
	}, [defaultTitle, updateTitle])

	const {
		data: response,
		error,
		isLoading,
	} = useQuery("summary", () => fetchSummary())
	const data = React.useMemo(() => response, [response])

	let lastUpdated,
		confirmedCases,
		totalDeaths,
		totalRecovered = null
	if (data) {
		lastUpdated = new Date(data.Global.Date).toLocaleString("en-US")
		confirmedCases = data.Global.TotalConfirmed.toLocaleString("en-US")
		totalDeaths = data.Global.TotalDeaths.toLocaleString("en-US")
		totalRecovered = data.Global.TotalRecovered.toLocaleString("en-US")
	}

	return (
		<>
			<Row className="d-flex justify-content-center">
				<h1>Coronavirus Pandemic (COVID-19) - Statistics</h1>
				<p>
					Coronavirus disease 2019 (COVID-19) is a contagious disease caused by
					a virus, the severe acute respiratory syndrome coronavirus 2
					(SARS-CoV-2). The first known case was identified in Wuhan, China, in
					December 2019. The disease quickly spread worldwide, resulting in the
					COVID-19 pandemic.
				</p>
				<p>
					The symptoms of COVID-19 are variable but often include fever, cough,
					headache, fatigue, breathing difficulties, loss of smell, and loss of
					taste. Symptoms may begin one to fourteen days after exposure to the
					virus. At least a third of people who are infected do not develop
					noticeable symptoms. Of those who develop symptoms noticeable enough
					to be classified as patients, most (81%) develop mild to moderate
					symptoms (up to mild pneumonia), while 14% develop severe symptoms
					(dyspnea, hypoxia, or more than 50% lung involvement on imaging), and
					5% develop critical symptoms (respiratory failure, shock, or
					multiorgan dysfunction).
				</p>
			</Row>

			{isLoading && <Loading />}

			{error instanceof Error && <ErrorMessage>{error.message}</ErrorMessage>}

			{data && (
				<AlertStats
					lastUpdated={lastUpdated}
					confirmedCases={confirmedCases}
					totalDeaths={totalDeaths}
					totalRecovered={totalRecovered}
				/>
			)}

			{data && (
				<>
					<h2>COVID-19 statistics table for countries</h2>
					<TableStats data={data} />
				</>
			)}
		</>
	)
}
export default HomeView
